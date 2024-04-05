import { addToBooks } from "../addBooks/Actions"

const AddToBooks = (book) => {
    return async (dispatch) => {
        const req = await fetch('http://localhost:9000/books', {
            method: "POST",
            body: JSON.stringify({
                ...book
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        })
        const data = await req.json();
        dispatch(addToBooks(data))
    }
}

export default AddToBooks