import React from 'react'
import { GHNToken } from 'utils/index'
import axios from 'axios'


function CustomerInfo() {

    async function renderProvince() {

        try {
         
            let provinceURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province"
            let provinceHeader = { headers: { token: GHNToken } }
            let res = await axios.get(provinceURI, provinceHeader)
            let data = res.data.data
            console.log(data)
            // if (data.length) {
            //     console.log(data)
            // }
    
        } catch (error) {
            console.log(error)
        }
        
    }

    renderProvince()
    return (
        <div className="col-lg-4 col-md-6 customer-info">
            <h4>Thông tin khách hàng</h4>
            <div className="customer-info-form ">


                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fullName" placeholder="fullName" />
                    <label htmlFor="fullName">Tên đầy đủ</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="phone" placeholder="name@example.com" />
                    <label htmlFor="phone">Số điện thoại</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select" id="province">
                        <option value="" selected="" disabled hidden="" className="disabled">Tỉnh/Thành phố</option>
                    </select>
                    <label htmlFor="province">Tỉnh/Thành phố</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select" disabled id="district">
                        <option value="" selected="" disabled hidden="" className="disabled">Quận/Huyện</option>
                    </select>
                    <label htmlFor="district">Quận/Huyện</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select" disabled id="ward">
                        <option value="" selected="" disabled hidden="" className="disabled">Phường/Xã</option>
                    </select>
                    <label htmlFor="ward">Phường/Xã</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" disabled id="address"
                        placeholder="Số nhà, đường phố" />
                    <label htmlFor="address">Số nhà, đường phố</label>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo