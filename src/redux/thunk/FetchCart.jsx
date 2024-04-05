import { fetchCarts } from "../addBooks/Actions";

const FetchCart = async (dispatch) => {
    const rsq = await fetch('http://localhost:9000/books');
    const data = await rsq.json()
    dispatch(fetchCarts(data))
}

export default FetchCart