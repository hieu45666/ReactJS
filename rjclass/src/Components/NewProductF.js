
import  {useState} from "react"
function NewProductF() {
    const [productInfo, setProductInfo] = useState({
        name : "",
        code : "",
    });
    function changeValue(event) {
        setProductInfo({
            ...productInfo, [event.target.name] : event.target.value
        });
    }
    function saveProduct(){
        alert(productInfo.name);
    }
    return (
        <div className="col-md-5">
            <fieldset className="border p-2">
                <legend className="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={productInfo.name} name="name" onChange={changeValue} id="productName"
                                placeholder="Nhập tên sản phẩm ..."/>
                            <input type="hidden" id="productId"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Mã sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="productCode" value={productInfo.code} name ="code" onChange={changeValue} placeholder="Nhập mã sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" onClick={saveProduct} className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}
export default NewProductF;