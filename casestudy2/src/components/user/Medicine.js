import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import AddMedicine from "./AddMedicine";
import { medicine } from "./medicineInfo";
const Medicine = () => {
  let [medi, addMedi] = useState();

    let mdc = [...medicine];
  const styleCard = {
    height: "300px",
    width: "150px",
  };
  const styleImg = {
    width: "80%",
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Thêm sản phẩm mới
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm sản phẩm mới</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <AddMedicine/>
      </div>
    </div>
  </div>
</div>
      <div className="row gap-3">
        {mdc.map((item) => (
          <div className="card col h-50" key={item.id} style={styleCard}>
            <img
              src={item.link}
              className="card-img-top"
              alt="..."
              style={styleImg}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.text}</p>
              <a className="btn btn-primary">Xem thêm</a>
              <a className="btn btn-primary">Sửa</a>
              <a className="btn btn-primary" href="#" role="button">Mua</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Medicine;
