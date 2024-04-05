import { useDispatch, useSelector } from "react-redux";
import { itemStatus } from "../../redux/editBook/Actions";

const BookListBar = () => {
  const dispatch = useDispatch();
  const handleStatus = (text) => {
    dispatch(itemStatus(text));
  };
  const data = useSelector((state) => state.editBook.itemStatus);
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleStatus("All")}
          className={`filter-btn ${data === "All" ? "active-filter" : null}`}
          id="lws-filterAll"
        >
          All
        </button>

        <button
          onClick={() => handleStatus("Featured")}
          className={`filter-btn ${
            data === "Featured" ? "active-filter" : null
          }`}
          id="lws-filterFeatured"
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookListBar;
