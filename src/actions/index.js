import axios from "../axios/axios"
import { ALLPRODUCTS,LOADINGPRODUCTS,PRODUCTLOADINGERROR } from "./actionType";


export const fetchAllProducts =  (allProducts) => {
    return{
        type:ALLPRODUCTS,
        payload:allProducts.data
    }
}

function allProductsLoading(){
    return {
        type:LOADINGPRODUCTS
    }
}
function loadedProducts(products){
    return{
        type:ALLPRODUCTS,
        payload:products.data
    }
}
function productLoadingError(error){
    return{
        type:PRODUCTLOADINGERROR,
        payload:error.message
    }
}