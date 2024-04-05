import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToBooks from "../../redux/thunk/AddToBooks";
import UpdateBook from '../../redux/thunk/UpdateBook';

const BookForm = () => {
  const [input, setInput] = useState({});
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const editData = data.editBook.data;
  const cartBookData = data.addToBooks;

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    let condition = cartBookData.some((item) => item.id === input.id);
    if (condition) {
      cartBookData.forEach((item) => {
        if (item.id === input.id) {
          dispatch(UpdateBook(input));
        }
      });
    } else {
      dispatch(AddToBooks(input));
    }
    setInput({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  useEffect(() => {
    if (editData.length > 0) {
      setInput(editData[0]);
    }
  }, [editData]);

  const handleInput = (e, name) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={input.name}
              onChange={(e) => handleInput(e, "name")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={input.author}
              onChange={(e) => handleInput(e, "author")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={input.thumbnail}
              onChange={(e) => handleInput(e, "thumbnail")}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={input.price}
                onChange={(e) => handleInput(e, "price")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                value={input.rating}
                min="1"
                max="5"
                onChange={(e) => handleInput(e, "rating")}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              checked={input.featured}
              className="w-4 h-4"
              onChange={(e) => handleInput(e, "featured")}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
