import React, {useState} from 'react'

function NewProductF() {
    const [name, setName] = useState();
    const changeName = (e) => {
        setName(e.target.value);
    }
  return (  <div className="col-md-5">
            <fieldset className="border p-2">
                <legend className="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={name} id="productName"
                                placeholder="Nhập tên sản phẩm ..." onChange={changeName}/>
                            <input type="hidden" id="productId"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Mã sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="productCode" placeholder="Nhập mã sản phẩm ..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label>Loại sản phẩm:</label>
                        </div>
                        <div className="form-check col-md-8">
                            <div className="col-md-6">
                                <input className="form-check-input" type="checkbox" value="1" name="productType"/>
                                <label className="form-check-label" for="productType">Đồ gia dụng</label><br/>
                                <input className="form-check-input" type="checkbox" value="2" name="productType"/>
                                <label className="form-check-label" for="productType">Đồ điện tử</label><br/>
                            </div>
                            <div className="col-md-6">
                                <input className="form-check-input" type="checkbox" value="3" name="productType"/>
                                <label className="form-check-label" for="productType">Quần áo</label><br/>
                                <input className="form-check-input" type="checkbox" value="4" name="productType"/>
                                <label className="form-check-label" for="productType">Sách</label>
                            </div>
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
                            <select className="form-control" id="productUnit">
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
                            <input type="number" className="form-control" id="productPrice"
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
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
  );
}

export default NewProductF;