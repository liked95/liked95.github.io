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
    const params = queryString.parse(location.search, { arrayFormat: 'bracket'})

    return {
      brands: params.brands || []
    }
  })


  // Thay doi brand
  const handleChangeBrands = (brands) => {
    const queryParams = { ...filters, brands }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket'})
    })
  }

  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'bracket'})
    console.log(params)

    setFilters({
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
    })
  }, [location.search])

  console.log('filter la', filters)

  // Thay doi ram
  const handleChangeRams = (rams) => {
    const queryParams = { ...filters, rams }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket'})
    })
  }

  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'bracket' })
    console.log(params)

    setFilters({
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
    })
  }, [location.search])

  // Thay doi rom
  const handleChangeRoms = (roms) => {
    const queryParams = { ...filters, roms }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket'})
    })
  }

  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'bracket'})
    console.log(params)

    setFilters({
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
    })
  }, [location.search])


    // Bat dau loc theo tieu chi
  const startFilter = () => {
    let updatedProducts = [...products]

    if (filters.roms && filters.roms.length > 0) {
      
      updatedProducts = updatedProducts.filter(product => {
        // console.log(filters.roms)
        // return filters.roms.some(r => product.rom.includes(r))
      })
    }

    if (filters.brands) {
      updatedProducts = updatedProducts.filter(product => filters.brands.includes(product.brand))
    }

    if (filters.rams && filters.rams.length > 0) {
      updatedProducts = updatedProducts.filter(product => {
        
        return filters.rams.includes(product.ram[0].slice(0, -2))
      })
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
                {/* <div class="filter-btn" onClick={startFilter}>
                  <i class="fa-solid fa-filter"></i>
                  lọc
                </div> */}
                <div class="erase-tag-btn">
                  <i class="fa-solid fa-eraser"></i>
                  xóa hết
                </div>
              </div>
            </div>

            <div class="filter-category-container">
              <FilterByPriceRange />
              <FilterByBrand onChangeBrands={handleChangeBrands} filters={filters} />
              <FilterByRam onChangeRams={handleChangeRams} filters={filters} />
              <FilterByRom onChangeRoms={handleChangeRoms} filters={filters} />
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