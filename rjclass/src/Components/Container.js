import React from "react";
import NewProduct from "./NewProduct";
import ProductList from "./ProductList";
import productAPI from "../API/productAPI"

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : {},
            productList : []
        }
    }
    myFunction = (message) =>{
        alert(message);
    }

    fetchProduct = async () =>{
        const response = await productAPI.getAll();
        this.setState({
            productList : [...response.data]
        });
        console.log(response.data);
    }

    componentDidMount() {
        this.fetchProduct();
    }
    componentDidUpdate(){
        
    }

    editProduct = (id) =>{
        let index = this.state.productList.findIndex(function(i) {
            return i.id === id
        });
        const item = this.state.productList[index];
        this.setState({
            product : {
                id : item.id,
                name : item.name,
                price : item.price,
                unit : item.unit,
            }
        })
    }

    deleteProduct = async (id) =>{
        await productAPI.delete(id).then(
            async () => this.fetchProduct()
        )
    }

    saveProduct = async (product) => {
        if (product.id) {
            //update
            await productAPI.update(product).then(
                async () => this.fetchProduct()
            )
        } else {
            //create
            await productAPI.create(product).then(
                async () => this.fetchProduct()
            );
        }
    }

    render(){
        return <div className="row">
            <ProductList productList = {this.state.productList} editProduct= {this.editProduct} deleteProduct = {this.deleteProduct}/>
            <NewProduct productInfo = {this.state.product} saveProduct= {this.saveProduct}/>
        </div>
    }
}

export default Container;