import { useEffect, useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NewsMarqueeComponent from "../NewsMarqueeComponent/NewsMarqueeComponent";
import { getAPI } from "../../utils/apiServices";
import { API_ROUTES } from "../../constants/ApiConstants";
import more from "../../assets/img/down.png";
import banner1 from "../../assets/img/banner1.png";
import BookCard from "../../components/BookCard/BookCard";
import UpcomingBooksComponent from "../../components/UpcomingBooksComponent/UpcomingBooksComponent";
import TestSeriesComponent from "../TestSeriesComponent/TestSeriesComponent";
import ArihantPlusMasterClass from "../ArihantPlusMasterClass/ArihantPlusMasterClass";
import OurExpertsComponent from "../OurExpertsComponent/OurExpertsComponent";
import FiltersComponent from "../FiltersComponent/FiltersComponent";

const BookListComponent = () => {
  const [bookList, setBookList] = useState([]);
  const [upcomingBooksList, setUpcomingBooksList] = useState([]);

  const getBooksListPageData = async () => {
    try {
      const res = await getAPI(API_ROUTES.BOOK_LIST);
      setBookList(res?.data?.items || []);
      setUpcomingBooksList(res?.data?.upcoming_books || []);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getBooksListPageData();
  }, []);

  return (
    <div>
      {/* news */}
      <ErrorBoundary>
        <NewsMarqueeComponent />
      </ErrorBoundary>
      {/* news */}

      <FiltersComponent>
        <div className="w-full sticky top-0 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 md:p-4 ">
            {bookList?.map((el) => (
              <ErrorBoundary key={el.id}>
                <BookCard data={el} />
              </ErrorBoundary>
            ))}
          </div>
          <button className="flex items-center gap-2 mt-4">
            <span className="text-base font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <button className="size-4 *:size-full *:object-contain">
              <img src={more} alt="" />
            </button>
          </button>
        </div>
      </FiltersComponent>

      <ErrorBoundary>
        <UpcomingBooksComponent data={upcomingBooksList} />
      </ErrorBoundary>

      <div className="bg-[#EEEAEC]">
        <div className="relative group/nav  max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  md:py-16 2xl:py-10">
          <h1 className="text-2xl sm:text-3xl pt-14 font-semibold text-black pb-12">
            Latest Test Series
          </h1>
          <TestSeriesComponent />
          <button className="flex items-center gap-2 max-sm:mt-4">
            <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <button className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={more} alt="" />
            </button>
          </button>
        </div>
      </div>

      <ArihantPlusMasterClass />

      <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="w-full aspect-[1/.4] rounded-xl overflow-hidden *:size-full *:object-cover hover:scale-[1.02] duration-300 hover:shadow-2xl">
            <img src={banner1} alt="" />
          </div>
          <div className="w-full aspect-[1/.4] rounded-xl overflow-hidden *:size-full *:object-cover hover:scale-[1.02] duration-300 hover:shadow-2xl">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>

      <OurExpertsComponent />
    </div>
  );
};

export default BookListComponent;
