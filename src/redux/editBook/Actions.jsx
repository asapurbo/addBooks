import { FETCHCART } from "../addBooks/ActionsTypes"
import { EDITBOOK, EDITBOOKDELETED, SEARCHRESULT, STATUS } from "./ActionsTypes"

export const editBook = (data) => {
    return {
        type: EDITBOOK,
        payload: data,
    }
}

export const editBookDeleted = () => {
    return {
        type: EDITBOOKDELETED,
    }
}

export const itemStatus = (text) => {
    return {
        type: STATUS,
        payload: text,
    }
}

export const searchResult = (text) => {
    return {
        type: SEARCHRESULT,
        payload: text,
    }
}
