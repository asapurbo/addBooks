import BookForm from "./BookForm";
import BookItems from "./BookItems";
import BookListBar from "./BookListBar";

const BooksContent = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          {/* Book List Bar */}
          <BookListBar />
          {/* Book List Bar */}

          {/* Book Cart */}
          <BookItems />
          {/* Book Cart */}
        </div>
        {/* Form */}
        <BookForm />
        {/* Form */}
      </div>
    </main>
  );
};

export default BooksContent;
