import React from 'react';

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
                            <input type="text" className="form-control" name= "name"  onChange={() => {}} id="productName"
                                placeholder="Nhập tên sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblMaSanPham">Mã sản phẩm: </label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "code"  onChange={() => {}} id="productCode"
                                placeholder="Nhập mã sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblGiaSanPham">Giá sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "price"  onChange={() => {}} id="productPrice"
                                placeholder="Nhập giá sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblMoTaSanPham">Mô tả sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "description"  onChange={() => {}} id="productDescription"
                                placeholder="Nhập mô tả sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblAnh">Hình ảnh sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "name"  onChange={() => {}} id="productImage"
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

export default AddMedicine;