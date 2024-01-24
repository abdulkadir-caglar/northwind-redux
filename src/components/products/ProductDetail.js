import React, { Component } from 'react';
import TextInput from '../toolbox/TextInput';

const ProductDetail = (
    categories,
    product,
    onSave, onChange
) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update" : "Add"}</h2>
            <TextInput name="productName"
            label="Product Name"
            value={product.productName}
            onChange={onChange}
            error = "Error"/>

            <button type="submit" className='btn-success'>Save</button>
        </form>
    )
}

export default ProductDetail;