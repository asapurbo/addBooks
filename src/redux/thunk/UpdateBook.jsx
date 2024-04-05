import { updateBook } from "../addBooks/Actions";

const UpdateBook = (book) => {
  const { id } = book;
  return async (dispatch) => {
    const rsq = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...book,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const data = await rsq.json();
    dispatch(updateBook(data));
  };
};

export default UpdateBook;
