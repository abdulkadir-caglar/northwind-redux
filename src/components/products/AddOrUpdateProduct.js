import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom"

function AddOrUpdateProduct({ products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    ...props }) {
    const [product, setProduct] = useState({ ...props.product });
    const history = useNavigate();

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product })
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event){

        event.preventDefault();
        saveProduct(product).then(() => history.push("/"));
    }

    return(
        <ProductDetail 
        product={product}
        categories={categories}
        onChange={handleChange}
        onSave={handleSave}
        />
    )
}

export function getProductById(products, productId){
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps){
    const productId = ownProps.productId;

    const product = productId && state.productListReducer.length > 0
    ?getProductById(state.productListReducer, productId)
    :{}
    return{
        product,
        products : state.productListReducer,
        categories : state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)