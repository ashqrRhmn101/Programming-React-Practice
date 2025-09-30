import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([])
    // console.log(products)

    const handleAddProduct = newProduct =>{
        const newProducts = [...products,newProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}/>
        </div>
    );
};

export default ProductManagement;