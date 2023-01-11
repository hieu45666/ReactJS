import React from "react";
import NewProductF from "./NewProductF";
import ProductList from "./ProductList";


class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : {},
            productList : [
                {
                    id : 57,
                    name : "Iphone 14",
                    price : 20000000,
                    unit : "Cái"
                },
                {
                    id : 76,
                    name : "SamSung Galaxy",
                    price : 15000000,
                    unit : "Chiếc"
                },
                {
                    id : 99,
                    name : "SamSung Galaxy",
                    price : 15000000,
                    unit : "Chiếc"
                }
            ]
        }
    }
    myFunction = (message) =>{
        alert(message);
    }
    editProduct = (id) =>{

    }

    deleteProduct = (id) =>{
        let arr = [...this.state.productList];
        let index = arr.findIndex(function(i) {
            return i.id === id
        });
        arr.splice(index,1);
        this.setState({
            productList : arr
        })
    }
    render(){
        return <div className="row">
            <ProductList productList = {this.state.productList} editProduct= {this.editProduct} deleteProduct = {this.deleteProduct}/>
            <NewProductF productInfo = {this.state.product} saveProduct= {this.myFunction}/>
        </div>
    }
}

export default Container;