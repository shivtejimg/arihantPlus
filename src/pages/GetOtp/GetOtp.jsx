import { useEffect, useState } from "react";
import logo from "../../assets/img/ArihantPlus-logo_1.png";
import googleLogo from "../../assets/img/googleLogo.png";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/RouteConstants";
import { postAPI } from "../../utils/apiServices";
import { API_ROUTES } from "../../constants/ApiConstants";
import { useDispatch } from "react-redux";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GetOtp = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState([]);

  const validationSchema = Yup.object({
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, "Contact number must be exactly 10 digits")
      .required("Contact number is required"),
  });

  const validateContact = async (value, callback) => {
    try {
      await validationSchema.validate(
        { contactNumber: value },
        {
          abortEarly: false,
        }
      );
      setError({});
      if (callback) callback();
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setError(newErrors);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if (!isNaN(Number(value))) {
      setContactNumber(value);
      setError({});
    }
  };

  const handleValidations = () => {
    validateContact(contactNumber);
  };

  const handleSendOtp = () => {
    validateContact(contactNumber, async () => {
      try {
        const res = await postAPI(API_ROUTES.OTP_SEND, {
          phone: contactNumber,
        });
        console.log({ res });
        // dispatch(updateUserDetail({ phone:contactNumber }));
        navigate(AUTH_ROUTES.VERIFY_OTP);
      } catch (error) {
        console.log({ error });
      }
      console.log("OTP sent to", countryCode + contactNumber);
    });
  };


  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleGoogleLogin =async ()=>{
    if(user){
      try {
      const res = axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  }

  useEffect(() => {
    handleGoogleLogin();
  }, [user]);//eslint-disable-line


  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <AuthLayout>
      <div>
        <div className="sm:px-10 px-4 py-4">
          <div className="sm:w-40 max-sm:hidden">
            <img className="size-full" src={logo} alt="" />
          </div>
          <div className="mt-4 max-sm:text-center">
            <p className="text-[#6E757D] text-sm 2xl:text-xl ">
              Hi, Invincible
            </p>
            <h2 className="font-semibold sm:text-2xl text-[20px] 2xl:text-3xl">
              Welcome to Arihant Plus!
            </h2>
          </div>
          <div className="mt-3 flex flex-col gap-1 max-sm:text-center">
            <h2 className="sm:text-xl text-[15px] 2xl:text-2xl text-[#353C41]">
              To create your account
            </h2>
            <p className="sm:text-sm text-[11px] 2xl:text-xl text-[#6E757D]">
              Please enter your mobile number. We will send you a One-Time
              Password (OTP) via SMS
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="rounded-md p-2 border border-[#757676] 2xl:p-3 2xl:text-2xl">
              +91
            </button>
            <input
              className="rounded-md w-full border border-[#757676] p-2 2xl:p-3 placeholder: 2xl:text-2xl"
              type="text"
              placeholder="Enter your Mobile No."
              value={contactNumber}
              onChange={handleChange}
              onBlur={handleValidations}
            />
          </div>
          {error?.contactNumber ? (
            <div className="text-error text-sm 2xl:text-xl">
              {error?.contactNumber}
            </div>
          ) : (
            ""
          )}
          <div className="mt-3">
            <button
              className="bg-secondary py-2 text-white font-semibold w-full rounded-full text-[13px] 2xl:text-2xl sm:text-sm"
              onClick={handleSendOtp}
            >
              Get OTP
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="w-24 border-t border-[#757676]"></span>
            <p className="mx-4 2xl:text-2xl">OR</p>
            <span className="w-24 border-t border-[#757676]"></span>
          </div>
          <div className="mt-2">
            <button
              className="flex gap-4 bg-[#F7F7F7] w-full py-2 justify-center  2xl:text-2xl border border-black rounded-md"
              onClick={login}
            >
              <img className="w-6 2xl:w-8" src={googleLogo} alt="" />
              <span className="font-semibold max-sm:text-[15px]">
                Continue with Google
              </span>
            </button>
            {/* <button onClick={logOut}>Log out</button> */}
          </div>
        </div>
        <div className="font-semibold text-sm 2xl:text-lg border-t mt-4 flex justify-center">
          <div className="mt-2">
            Already have an account?{" "}
            <span className="text-secondary  cursor-pointer">Login</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default GetOtp;
