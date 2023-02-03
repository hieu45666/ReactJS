import React from "react";

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            code : "",
            price : "",
            changeByInput : false
        }
    }
    static defaultProps = {
        productTypes : [
            {value : 1, text : "Đồ gia dụng", checked : true},
            {value : 2, text : "Đồ điện tử", checked : false},
            {value : 3, text : "Quần áo", checked : false},
            {value : 4, text : "Khác", checked : false},
        ]
    }
    saveProduct = () => {
        this.props.saveProduct(this.state);
    }
    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            changeByInput: true,
        });
    }

    static getDerivedStateFromProps = (props,state) =>{
        if(!state.changeByInput)
        return {
            name : props.productInfo.name
        }
        return {...state,changeByInput : false}
    }

    render() {
        return <div className="col-md-5">
            <fieldset className="border p-2">
                <legend className="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "name" value={this.state.name} onChange={this.changeValue} id="productName"
                                placeholder="Nhập tên sản phẩm ..."/>
                            <input type="hidden" id="productId"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Mã sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="code" id="productCode" value={this.state.code} onChange={this.changeValue} placeholder="Nhập mã sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Loại sản phẩm:</label>
                        </div>
                        <div className="form-check col-md-8">
                            {
                                this.props.productTypes.map(item => {
                                    return <React.Fragment key = {item.value}>
                                        <input className="form-check-input" type="checkbox" value={item.value} checked={item.checked} name="productType"/>
                                        <label className="form-check-label">{item.text}</label><br />
                                    </React.Fragment>
                                })
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Khuyến mãi:</label>
                        </div>
                        <div className="form-check col-md-8">
                            <div className="col-md-6">
                                <input className="form-check-input" type="radio" value="1" name="productPromotion"/>
                                <label className="form-check-label" for="promotion">Đang khuyến mãi</label><br/>
                                <input className="form-check-input" type="radio" value="2" name="productPromotion"/>
                                <label className="form-check-label" for="promotion">Không</label><br/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Đơn vị tính:</label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-control" id="productUnit" value={this.state.unit} >
                                <option value="">-- Chọn đơn vị tính --</option>
                                <option value="1">Cái</option>
                                <option value="2">Chiếc</option>
                                <option value="3">Bao</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Giá sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name='price' value={this.state.price} onChange={this.changeValue} className="form-control" id="productPrice"
                                placeholder="Nhập giá sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Ngày nhập:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="date" className="form-control" id="productImportDate"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Mô tả:</label>
                        </div>
                        <div className="col-md-8">
                            <textarea className="form-control" id="productDescription"
                                placeholder="Mô tả sản phẩm ..."></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" className="btn btn-primary" onClick={this.saveProduct}>Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    }
}

export default NewProduct;