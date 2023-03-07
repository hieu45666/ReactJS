import React from 'react';
import { connect } from "react-redux";
import * as productAction from "./productAction";

const changeValue = event => {
    this.setState({
        [event.target.name] : event.target.value,
        changeByInput: true,
    });
}

const AddMedicine = () => {
    return (
        <div>
            <fieldset className=" p-2">
                <legend className="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "name"  onChange={this.changeValue} id="productName"
                                placeholder="Nhập tên sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblMaSanPham">Mã sản phẩm: </label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "code"  onChange={this.changeValue} id="productCode"
                                placeholder="Nhập mã sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblGiaSanPham">Giá sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "price"  onChange={this.changeValue} id="productPrice"
                                placeholder="Nhập giá sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblMoTaSanPham">Mô tả sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "description"  onChange={this.changeValue} id="productDescription"
                                placeholder="Nhập mô tả sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblAnh">Hình ảnh sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "name"  onChange={this.changeValue} id="productImage"
                                placeholder="Link ảnh sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" className="btn btn-primary" onClick={() => {}}>Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct(product){
            dispatch(productAction.createProduct(product));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddMedicine);