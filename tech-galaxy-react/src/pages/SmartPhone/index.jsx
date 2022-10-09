import Context from 'context/index'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import ProductItem from 'components/ProductItem/index'
import Tags from './Tags'
import FilterByBrand from './FilterByBrand'
import FilterByRam from './FilterByRam'
import FilterByRom from './FilterByRom'
import FilterByPriceRange from './FilterByPriceRange'

function SmartPhone() {
  const location = useLocation()
  const navigate = useNavigate()

  const { products } = useContext(Context)

  const [filters, setFilters] = useState(() => {
    const params = queryString.parse(location.search, { arrayFormat: 'separator', arrayFormatSeparator: '|' })

    return {
      brands: params.brands || []
    }
  })


  // Thay doi brand
  const handleChangeBrands = (brands) => {
    const queryParams = { ...filters, brands }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'separator', arrayFormatSeparator: ',' })
    })
  }

  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'separator', arrayFormatSeparator: ',' })
      console.log(params)

    setFilters({ brands: params.brands || [] })
  }, [location.search])

  console.log('filter la', filters)





  // Bat dau loc theo tieu chi
  const startFilter = () => {
    let updatedProducts = [...products]
    if (filters.brands) {
      updatedProducts=updatedProducts.filter(product => filters.brands.includes(product.brand))
    }

    return updatedProducts
  }

  const renderedProducts = startFilter()



  return (
    <section class="smartphone-container">
      <div class="container">
        <div class="breadcrumb"><a href="smartphone.html">Điện thoại</a></div>

        <div class="row main-page-container">
          <div class="filter-container">
            <h4>
              <span>bộ lọc tìm kiếm</span>
              <span class="filter-expand-btn" id="arrow"><i class="fa-solid fa-chevron-down "></i></span>
              <span id="filter-sidebar-close"><i class="fa-solid fa-xmark"></i></span>
            </h4>
            <div class="tag-container">
              <Tags />

              <div class="function-btn">
                <div class="filter-btn" onClick={startFilter}>
                  <i class="fa-solid fa-filter"></i>
                  lọc
                </div>
                <div class="erase-tag-btn">
                  <i class="fa-solid fa-eraser"></i>
                  xóa hết
                </div>
              </div>
            </div>

            <div class="filter-category-container">
              <FilterByPriceRange />
              <FilterByBrand onChangeBrands={handleChangeBrands} filters={filters}/>
              <FilterByRam />
              <FilterByRom />
            </div>
          </div>


          <div class="panel-right">
            <div class="product-length-sort">
              <div class="product-length">
                <p>Tìm thấy <b class="search-quantity"></b> sản phẩm </p>
              </div>
              <div class="sort-container">
                <label htmlFor="sort">Sắp xếp theo:</label>
                <select name="sort" id="sort">
                  <option value="" selected disabled hidden class="disabled">Tiêu chí...</option>
                  <option value="priceAsc">Giá tăng dần</option>
                  <option value="priceDesc">Giá giảm dần</option>
                  <option value="discountAsc">Chiết khấu tăng dần</option>
                  <option value="discountDesc">Chiết khấu giảm dần</option>
                  <option value="quantityAsc">Đã bán tăng dần</option>
                  <option value="quantityDesc">Đã bán giảm dần</option>
                  <option value="ratingAsc">Xếp hạng tăng dần</option>
                  <option value="ratingDesc">Xếp hạng giảm dần</option>
                </select>
              </div>
            </div>
            <div class="row product-category-container">
              {renderedProducts.map((item, index) => <ProductItem key={index} props={item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartPhone