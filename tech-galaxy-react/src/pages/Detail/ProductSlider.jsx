import ProductItem from 'components/ProductItem/index';
import React, { useState, } from 'react';
import Slider from 'react-slick';

function ProductSlider({products}) {
    console.log(products);
    const settings = {
        dots: false,
        infinite: products.length > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };


    return (
        <Slider {...settings}>
            {products.map(product => <ProductItem key={product.id} props={product}/>)}
        </Slider>
    );
}

export default ProductSlider