import { deleted } from "../addBooks/Actions"

const DeletedBook = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:9000/books/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json; charset=utf-8",
        }
    })
    dispatch(deleted(id))
  }
}

export default DeletedBook