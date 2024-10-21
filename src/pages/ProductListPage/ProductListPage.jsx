import { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";
import BookListComponent from "../../components/BookListComponent/BookListComponent";
import TestSeriesListComponent from "../../components/TestSeriesListComponent/TestSeriesListComponent";
import LiveClassesListComponent from "../../components/LiveClassesListComponent/LiveClassesListComponent";

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  console.log({ selectedCategory });
  return (
    <AppLayout>
      <ErrorBoundary>
        <ErrorBoundary>
          <div className="pt-20">
            <HeroComponent />
          </div>
        </ErrorBoundary>

        <div className="bg-gray4/50 py-4">
          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40 mx-auto px-6 lg:px-8 pt-4">
            <div className="flex items-center">
              <Link
                className="text-sm 2xl:text-xl font-medium text-gray1 inline-block"
                to={PAGE_ROUTES.HOME}
              >
                Home
              </Link>
              <span className="px-1 text-sm font-medium 2xl:text-xl text-black">
                /
              </span>
              <Link className="text-sm font-medium 2xl:text-xl text-black">
                Jee & Other Eng Entrances
              </Link>
            </div>
          </div>

          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto mt-4">
            <p className=" md:text-3xl text-2xl  font-semibold text-black">
              JEE & Other Eng Entrances
            </p>
            <CategoriesSlider
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        {selectedCategory == "1" ? <BookListComponent />:""}
        {selectedCategory == "2" ? <TestSeriesListComponent  />:""}
        {selectedCategory == "3" ? <LiveClassesListComponent  />:""}
      </ErrorBoundary>
    </AppLayout>
  );
};

export default ProductListPage;
