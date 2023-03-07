import { CREATE_PRODUCT, DELETE_PRODUCT } from "./actionType";

export const createProduct = (payload) => ({
    type: CREATE_PRODUCT,
    payload
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: {id}
});