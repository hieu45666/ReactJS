import NewProduct from "./NewProduct";
import ProductList from "./ProductList";
import {useState, useEffect } from "react";

export const ContainerF =( ) =>{
    const [productList, setProductList] = useState(
        [
            {
                id : 57,
                name : "Iphone 14",
                price : 20000000,
                unit : "1",
                type : ["1","2"]
            },
            {
                id : 76,
                name : "SamSung Galaxy",
                price : 15000000,
                unit : "2",
                type : ["1","3"]
            },
            {
                id : 99,
                name : "SamSung Galaxy",
                price : 15000000,
                unit : "3",
                type : ["2","3"]
            }
        ]
    );
    const [product, setProduct] = useState({
        type :[]
    });
    function deleteProduct (id) {
        let arr = [...productList];
        let index = arr.findIndex(function(i) {
            return i.id === id
        });
        arr.splice(index,1);
        setProductList(arr);
    }
    function editProduct(id){
        let index = productList.findIndex(function(i) {
            return i.id === id
        });
        const item = productList[index];
        setProduct(item);
    }

    function saveProduct(product){
        const maxId = Math.max(...productList.map(x => x.id));
        product.id = maxId  + 1;
        setProductList([...productList,product])
    }

    useEffect(() => {
    },[productList]);
    
    return (
        <div className="row">
            <ProductList productList = {productList} deleteProduct= {deleteProduct} editProduct = {editProduct}/>
            <NewProduct productInfo = {product} saveProduct ={saveProduct}/>
        </div>
    )
}
export default ContainerF;