import { useDispatch, useSelector } from "react-redux";
import BookCart from "./BookCart";
import { useEffect } from "react";
import FetchCart from "../../redux/thunk/FetchCart";

const BookItems = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch()
  const addCartData = data.addToBooks;
  const editData = data.editBook;
  const searchResult = data.editBook.searchResult;
  useEffect(() => {
    dispatch(FetchCart)
  }, [dispatch])
  return (
    <div className="flex flex-wrap justify-between gap-10">
      {addCartData
        .filter((item) => {
          if (editData.itemStatus === "Featured") {
            return item.featured;
          }
          return true;
        })
        .filter((item) => {
          return searchResult === ""
            ? item
            : item.name.toLowerCase().includes(searchResult.toLowerCase()) ||
                item.author.toLowerCase().includes(searchResult.toLowerCase());
        })
        .map((item) => {
          return (
            <BookCart
              key={item.id}
              thumbnail={item.thumbnail}
              featured={item.featured}
              name={item.name}
              price={item.price}
              rating={item.rating}
              author={item.author}
              info={item}
            />
          );
        })}
    </div>
  );
};

export default BookItems;
