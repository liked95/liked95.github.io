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
import Sort from './Sort';
import { avgRating } from 'components/ProductItem/index';

function SmartPhone() {
  const location = useLocation()
  const navigate = useNavigate()

  let { products } = useContext(Context)
  products = products.filter(product => product.category == 'smartphone')

  const [filters, setFilters] = useState(() => {
    const params = queryString.parse(location.search, { arrayFormat: 'bracket' })

    return {
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
      maxPrice: params.maxPrice || [50000000],
      sort: params.sort || [],
    }
  })


  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'bracket' })
    
    setFilters({
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
      maxPrice: params.maxPrice || [50000000],
      sort: params.sort || [],
    })
  }, [location.search])


  // Thay doi brand
  const handleChangeBrands = (brands) => {
    const queryParams = { ...filters, brands }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }


  // Thay doi ram
  const handleChangeRams = (rams) => {
    const queryParams = { ...filters, rams }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }


  // Thay doi rom
  const handleChangeRoms = (roms) => {
    const queryParams = { ...filters, roms }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // Thay doi gia max
  const handleChangeMaxPrice = (maxPrice) => {
    const queryParams = { ...filters, maxPrice }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // thay doi sort
  const handleChangeSelectedSort = sort => {
    const queryParams = { ...filters, sort }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // reset filter
  const handleResetFilter = () => {
    navigate({
      pathname: location.pathname,
      search: ''
    })
  }





  // Bat dau loc theo tieu chi
  const startFilter = () => {
    let updatedProducts = [...products]

    if (filters.brands && filters.brands.length > 0) {
      updatedProducts = updatedProducts.filter(product => filters.brands.includes(product.brand))
    }

    if (filters.rams && filters.rams.length > 0) {
      updatedProducts = updatedProducts.filter(product => {

        return filters.rams.includes(product.ram[0].slice(0, -2))
      })
    }

    if (filters.roms && filters.roms.length > 0) {

      updatedProducts = updatedProducts.filter(product => {
        // console.log(filters.roms)
        return filters.roms.some(r => {
          console.log(r);
          return product.rom.includes(r+'GB')
        })
      })
    }

    if (filters.maxPrice != 100000000) {
      updatedProducts = updatedProducts.filter(product => product.currentPrices[0] < filters.maxPrice)
    }

    if (filters.sort) {
      if (filters.sort == "priceAsc") updatedProducts = updatedProducts.sort((p1, p2) => p1.currentPrices[0] - p2.currentPrices[0])
      if (filters.sort == "priceDesc") updatedProducts = updatedProducts.sort((p1, p2) => p2.currentPrices[0] - p1.currentPrices[0])
      if (filters.sort == "discountAsc") updatedProducts = updatedProducts.sort((p1, p2) => Math.abs(Number(p1.discounts[0])) - Math.abs(Number(p2.discounts[0])))
      if (filters.sort == "discountDesc") updatedProducts = updatedProducts.sort((p1, p2) => Math.abs(Number(p2.discounts[0])) - Math.abs(Number(p1.discounts[0])))
      if (filters.sort == "quantityAsc") updatedProducts = updatedProducts.sort((p1, p2) => p1.soldQuantity - p2.soldQuantity)
      if (filters.sort == "quantityDesc") updatedProducts = updatedProducts.sort((p1, p2) => p2.soldQuantity - p1.soldQuantity)
      if (filters.sort == "ratingAsc") updatedProducts = updatedProducts.sort((p1, p2) => avgRating(p1.reviews) - avgRating(p2.reviews))
      if (filters.sort == "ratingDesc") updatedProducts = updatedProducts.sort((p1, p2) => avgRating(p2.reviews) - avgRating(p1.reviews))
    }

    return updatedProducts
  }

  console.log('filter la', filters)

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
                <div class="erase-tag-btn" onClick={handleResetFilter} >
                  <i class="fa-solid fa-eraser"></i>
                  Đặt lại bộ lọc
                </div>
              </div>
            </div>

            <div class="filter-category-container">
              <FilterByPriceRange onChangeMaxPrice={handleChangeMaxPrice} filters={filters}/>
              <FilterByBrand onChangeBrands={handleChangeBrands} filters={filters} />
              <FilterByRam onChangeRams={handleChangeRams} filters={filters} />
              <FilterByRom onChangeRoms={handleChangeRoms} filters={filters} />
            </div>
          </div>


          <div class="panel-right">
            <div class="product-length-sort">
              <div class="product-length">
                <p>Tìm thấy <b class="search-quantity">{renderedProducts.length}</b> sản phẩm </p>
              </div>
             <Sort onChangeSort = {handleChangeSelectedSort} filters={filters}/>
            </div>
            <div class="row product-category-container">
              {renderedProducts.length > 0 && renderedProducts.map((item, index) => <ProductItem key={index} props={item} />)}
              {renderedProducts.length == 0 && <p>Không tìm thấy sản phẩm</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartPhone