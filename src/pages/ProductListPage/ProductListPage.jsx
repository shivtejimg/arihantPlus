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
          <div className="xl:max-w-6xl  mx-auto px-4  pt-4">
            <div className="flex items-center *:leading-none">
              <Link
                className="text-sm  font-medium text-gray1 inline-block"
                to={PAGE_ROUTES.HOME}
              >
                Home
              </Link>
              <span className="px-1 text-sm font-medium  text-black">
                /
              </span>
              <Link className="text-sm font-medium  text-black">
                Jee & Other Eng Entrances
              </Link>
            </div>
          </div>

          <div className="xl:max-w-6xl  px-4 mx-auto pt-[43px] ">
            <div className=" text-3xl   font-semibold leading-none text-[#353C41]">
              JEE & Other Eng Entrances 
            </div>
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
