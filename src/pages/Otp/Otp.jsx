import React, { useState } from "react";
import logo from "../../assets/img/ArihantPlus-logo_1.png";
import Rectangle_182 from "../../assets/img/Rectangle_182.png";
import Arrow from "../../assets/img/Line_25.png";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/RouteConstants";
import { useSelector } from "react-redux";
import { postAPI } from "../../utils/apiServices";
import { API_ROUTES } from "../../constants/ApiConstants";
import * as Yup from "yup";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState({});
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    otp: Yup.string()
    .matches(/^\d{4}$/, 'Please enter a valid OTP')
    .required('OTP is required*')
  });

  const validateOTP = async (value,callback) => {
    try {
      await validationSchema.validate({ otp:value }, {
        abortEarly: false,
      });
      setError({});
      if(callback) callback();
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setError(newErrors);
    }
  };

  const handleResendOtp = () => {
    console.log("Resend Otp");
  };

  const handleVerify =async () => {
    const joinedOtp = otp.join("");

      validateOTP(joinedOtp,async ()=>{
        try {
          const res =await postAPI(API_ROUTES?.OTP_SUBMIT,{ otp:joinedOtp });
          
          navigate(AUTH_ROUTES.SIGN_UP);
          console.log({ res });
        } catch (error) {
          console.log({ error});
        }
      })
  };

  console.log("error",error);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focuses on next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown =(e,index)=>{
    const target = e.target;
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    if(e.key === 'Backspace' && target && target?.previousSibling){
      target?.previousSibling?.focus();
    }
  }


  return (
    <AuthLayout>
      <div>
        <div className="px-10 py-4">
          <div className="sm:w-40 2xl:w-48 max-sm:hidden">
            <img className="size-full" src={logo} alt="" />
          </div>
          <div className="mt-4 max-sm:text-center">
            <p className="text-gray1 text-sm 2xl:text-xl">Great Almost Done</p>
            <h2 className="font-semibold sm:text-2xl text-[20px] 2xl:text-3xl">
              Please verify your Mobile Number
            </h2>
          </div>
          <div className="mt-3 flex gap-4 bg-gray4 p-2 rounded-md">
            <div className="p-2 bg-white rounded-full size-[36px] min-w-[36px] flex items-center justify-center">
              <img
                className="size-full object-contain"
                src={Rectangle_182}
                alt=""
              />
            </div>
            {user.phone && (
              <div className="text-sm font-semibold">
                Enter the OTP which has been sent to mobile no. {user?.phone}
              </div>
            )}
          </div>
          <div className="mt-4 flex gap-4 sm:gap-8 justify-center">
            {otp.map((val, i) => (
              <input
                key={i}
                className="rounded-md w-full border border-[#757676] p-2 sm:h-16 !size-10 max-sm:min-size-10 text-2xl 2xl:p-8 text-center"
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleOtpChange(e.target, i)}
                onFocus={(e) => e.target.select()}
                autoComplete="off"
                onKeyDown={(e)=>handleKeyDown(e, i)}
              />
            ))}
          </div>
          <div className="mt-3 max-sm:text-center  text-base 2xl:text-lg">
            <p className="text-gray1">
              Don’t receive OTP?{" "}
              <span
                className="text-primary font-medium cursor-pointer"
                onClick={handleResendOtp}
              >
                Resend OTP
              </span>
            </p>
          </div>
          { 
            error.otp &&  <div className="text-error" >{error.otp}</div>
          }
          <div className="mt-10 flex justify-between gap-4">
            <button className="flex gap-4 border  border-[#353C41] rounded-full px-8 py-1.5 items-center">
              <img
                className="flex  justify-center items-center"
                src={Arrow}
                alt=""
              />
              <span
                className="font-semibold 2xl:text-2xl"
                onClick={() => navigate(AUTH_ROUTES.GET_OTP)}
              >
                Back
              </span>
            </button>
            <button className="flex gap-4 bg-secondary rounded-full px-12 py-1.5  2xl:text-2xl justify-center">
              <span className="font-semibold text-white" onClick={handleVerify}>
                Verify
              </span>
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Otp;
