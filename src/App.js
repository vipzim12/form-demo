import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="container">
          <div className="text-center mt-5">
            <h2>Quản Lý Công Việc</h2>
          </div>
          <div className="row mt-5">
            <div className="col-4 col-sm-4 col-md-4	ol-lg-4	col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="alert alert-danger">
                    Thêm Công Việc
                  </div>
                  <label for="">Tên: </label>
                  <input className="form-control" type="text" id="name-work" />
                  <label for="">Trạng thái: </label>
                  <select class="form-control" id="add-work-status">
                    <option>Kích hoạt</option>
                    <option>Ẩn</option>
                  </select>
                  <div className="mt-3 text-center">
                    <button type="button" className="btn btn-success ">Lưu lại</button>
                    <button type="button" className="btn btn-danger ml-2">Hủy bỏ</button>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-8 col-sm-8 col-md-8	ol-lg-8	col-xl-8">
              <div>
                <button className="btn btn-success">+ Thêm công việc</button>
              </div>
              <div className="row mt-2">
                <div class="input-group col-6 col-sm-6 col-md-6	ol-lg-6	col-xl-6">
                  <input class="form-control" type="search" value="search" id="example-search-input" />
                  <span class="input-group-append">
                    <button class="btn btn-success" type="button">
                      <i class="fa fa-search"></i>Tìm
                  </button>
                  </span>
                </div>
                <div class="col-6 col-sm-6 col-md-6	ol-lg-6	col-xl-6">
                  <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sắp xếp</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">A-Z</a>
                      <a class="dropdown-item" href="#">Z-A</a>
                      <a class="dropdown-item" href="#">Kích hoạt</a>
                      <a class="dropdown-item" href="#">Ẩn</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Trạng Thái</th>
                      <th scope="col">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <input className="form-control" type="text" />
                      </td>
                      <td>
                        <select class="form-control" id="table-status">
                          <option>Kích hoạt</option>
                          <option>Ẩn</option>
                        </select>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
