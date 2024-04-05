import { ADDBOOKS, DELETED, FETCHCART, UPDATEBOOK } from "./ActionsTypes"

export const addToBooks = (data) => {
    return {
        type: ADDBOOKS,
        payload: data,
    }
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    }
}

export const updateBook = (data) => {
    return {
        type: UPDATEBOOK,
        payload: data,
    }
}

export const fetchCarts = (data) => {
    return {
        type: FETCHCART,
        payload: data,
    }
}
