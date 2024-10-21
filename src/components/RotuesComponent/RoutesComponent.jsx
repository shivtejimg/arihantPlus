import React from "react";
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../pages/SignIn/SignIn'
import SignUp from '../../pages/SignUp/SignUp'
import GetOtp from '../../pages/GetOtp/GetOtp'
import Otp from '../../pages/Otp/Otp'
import { AUTH_ROUTES, PAGE_ROUTES } from '../../constants/RouteConstants'
import ProductListPage from '../../pages/ProductListPage/ProductListPage'
import Home from '../../pages/Home/Home'
import BooksDetails from '../../pages/BookDetails/BooksDetails'
import OrderPage from "../../pages/OrderPage/OrderPage";
import GeneralInstructions from "../../pages/GeneralInstructions/GeneralInstructions";
import TestQuestion from "../../pages/TestQuestion/TestQuestion";

const RoutesComponents = () => {
  return (
    <>
    <Routes>
        {/* ========== Auth Routes ========== */}
        <Route path={AUTH_ROUTES.GET_OTP} element={<GetOtp />} />
        <Route path={AUTH_ROUTES.VERIFY_OTP} element={<Otp />} />
        <Route path={AUTH_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={AUTH_ROUTES.SIGN_UP} element={<SignUp />} />

        {/* ========== ROUTE ========== */}
        <Route path={PAGE_ROUTES.HOME} element={<Home />} />
        <Route path={`${PAGE_ROUTES.PRODUCT_LIST}/:exam`} element={<ProductListPage />} />
        <Route path={`${PAGE_ROUTES.BOOK_DETAIL}/:bookName`} element={<BooksDetails />} />
        <Route path={`${PAGE_ROUTES.ORDER_PAGE}/`} element={<OrderPage />} />
        <Route path={`${PAGE_ROUTES.GENERAL_INSTRUCTIONS}/`} element={<GeneralInstructions />} />
        <Route path={`${PAGE_ROUTES.TEST_QUESTION}/`} element={<TestQuestion />} />
    </Routes>
    </>
  )
}

export default RoutesComponents;