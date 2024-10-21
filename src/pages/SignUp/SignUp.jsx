import { useEffect, useState } from "react";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Arrow from "../../assets/img/Arrow_4.png";
import OffCanvas from "./OffCanvas";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { postAPI } from "../../utils/apiServices";
import { API_ROUTES } from "../../constants/ApiConstants";

const active = " border bg-primary text-white";

const data = [
  "JEE",
  "NEET",
  "CUET",
  "CLAT & Law",
  "NDA, CDS",
  "IAS & State PSC",
  "SSC",
  "Railways",
  "Army",
  "Air Force",
  "Navy",
];

const SignUp = () => {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Students");
  const [examList, setExamList] = useState([]);
  const [searchPreferences, setSearchPreferences] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First Name can only contain letters")
      .required("First Name is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last Name can only contain letters")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    selectedPreferences: Yup.array().min(
      1,
      "Please select at least one preference"
    ),
    acceptedTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const validateField = async (field, value) => {
    try {
      await validationSchema.validateSyncAt(field, { [field]: value });
      setError((prev) => ({ ...prev, [field]: "" }));
    } catch (err) {
      setError((prev) => ({ ...prev, [field]: err.message }));
    }
  };

  const validateForm = async (value, callback) => {
    try {
      await validationSchema.validate(value, {
        abortEarly: false,
      });
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

  const openOffCanvas = () => {
    setOffCanvasOpen(true);
  };

  const closeOffCanvas = () => {
    setOffCanvasOpen(false);
  };

  const handlePreferences = (item) => {
    if (selectedPreferences.includes(item)) {
      const filtered = selectedPreferences.filter((el) => el != item);
      setSelectedPreferences(filtered);
    } else {
      setSelectedPreferences((prev) => [...prev, item]);
    }
    validateField("selectedPreferences", selectedPreferences);
  };

  useEffect(() => {
    if (searchPreferences) {
      const filtered = data.filter((item) =>
        item?.toLowerCase()?.includes(searchPreferences?.toLowerCase())
      );
      setExamList(filtered);
    } else {
      setExamList(data);
    }
  }, [searchPreferences]);

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      mobile,
      selectedPreferences,
      acceptedTerms,
    };
    console.log({ payload });
    validateForm(payload, async () => {
      try {
        const res = await postAPI(API_ROUTES.OTP_SUBMIT, {
          ...payload,
          selectedRole,
        });
        console.log({ res });
        navigate(PAGE_ROUTES.PRODUCT_LIST);
      } catch (error) {
        console.log({ error });
      }
    });

    // const values = { firstName, lastName, email, mobile, selectedPreferences, acceptedTerms };
    // validationSchema
    //   .validate(values, { abortEarly: false })
    //   .then(() => {
    //     console.log("Form Submitted Successfully", values);
    //     navigate(PAGE_ROUTES.PRODUCT_LIST);
    //   })
    //   .catch((err) => {
    //     const newErrors = {};
    //     err.inner.forEach((error) => {
    //       newErrors[error.path] = error.message;
    //     });
    //     setError(newErrors);
    //   });
  };

  return (
    <AuthLayout>
      <div>
        <div className="px-2 sm:px-10 py-4 h-full">
          <div>
            <p className="text-gray1 text-sm">Be Invincible</p>
            <h2 className="font-semibold text-3xl">Create an Account</h2>
          </div>
          <div className="mt-3">
            <div className="font-medium line-clamp-1 text-xl">
              Create account as
            </div>
            <div className="mt-1 font-semibold text-base grid grid-cols-3 gap-4 justify-between">
              <button
                className={` rounded-md outline-1 outline-dashed px-4 py-1 ${
                  selectedRole === "Students" ? active : "text-gray1"
                }`}
                onClick={() => setSelectedRole("Students")}
              >
                Students
              </button>
              <button
                className={`rounded-md outline-1 outline-dashed px-4 py-1  ${
                  selectedRole === "Teachers" ? active : "text-gray1"
                }`}
                onClick={() => setSelectedRole("Teachers")}
              >
                Teachers
              </button>
              <button
                className={`rounded-md outline-1 outline-dashed px-4 py-1 ${
                  selectedRole === "Guest" ? active : "text-gray1"
                } `}
                onClick={() => setSelectedRole("Guest")}
              >
                Guest
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  className="rounded-md w-full border border-[#757676] p-2 outline-none"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={() => validateField("firstName", firstName)}
                />
                {error.firstName && (
                  <div className="text-error text-xs">{error.firstName}</div>
                )}
              </div>
              <div>
                <input
                  className="rounded-md w-full border border-[#757676] p-2 outline-none"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={() => validateField("lastName", lastName)}
                />
                {error.lastName && (
                  <div className="text-error text-xs">{error.lastName}</div>
                )}
              </div>
            </div>
            <div>
              <div className="rounded-md border border-[#757676] p-2 outline-none flex flex-col">
                <div
                  className={`flex w-full justify-between items-center cursor-pointer ${
                    selectedPreferences.length ? "border-b-2 py-2 mb-2" : ""
                  }`}
                  onClick={openOffCanvas}
                >
                  <span className="text-base text-[#353C41]">Preferences*</span>
                  <div className="text-white bg-primary rounded-full size-[18px] max-h-[18px] flex items-center justify-center">
                    <button
                      className="h-full flex leading-[15px]"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedPreferences.map((item) => (
                    <div
                      key={item}
                      className="border rounded-md px-2 py-1 bg-gray-100 border-gray2 gap-3 flex justify-center items-center"
                    >
                      <span className="text-base text-[#353C41]">{item}</span>
                      <div className="bg-white rounded-full size-[18px] max-h-[18px] flex items-center justify-center">
                        <button
                          className="h-full flex leading-[12px]"
                          type="button"
                          onClick={() => handlePreferences(item)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {error.selectedPreferences && (
                <div className="text-error text-xs">
                  {error.selectedPreferences}
                </div>
              )}
            </div>

            <div>
              <input
                className="rounded-md w-full border border-[#757676] p-2 outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateField("email", email)}
              />
              {error.email && (
                <div className="text-error text-xs">{error.email}</div>
              )}
            </div>
            <div>
              <input
                className="rounded-md w-full border border-[#757676] p-2 outline-none"
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                onBlur={() => validateField("mobile", mobile)}
              />
              {error.mobile && (
                <div className="text-error text-xs">{error.mobile}</div>
              )}
            </div>
          </div>
          <div className="mt-3 text-sm flex gap-3">
            <input
              type="checkbox"
              checked={acceptedTerms}
              id="termsAndCond"
              onChange={(e) => {
                setAcceptedTerms(e.target.checked);
                validateField("acceptedTerms", e.target.checked);
              }}
            />
            <label htmlFor="termsAndCond" className="text-gray1">
              Please accept the terms & conditions.
            </label>
          </div>
          {error.acceptedTerms && (
            <div className="text-error text-xs">{error.acceptedTerms}</div>
          )}
          <div className="mt-10 flex justify-between gap-4">
            <button
              className="flex w-full gap-2 bg-secondary rounded-full px-12 py-1.5 justify-center items-center"
              type="button"
              onClick={handleSubmit}
            >
              <span className="font-bold text-white text-xl">Next</span>
              <img className="size-8 object-contain" src={Arrow} alt="" />
            </button>
          </div>
        </div>

        {/* Off-Canvas */}
        <ErrorBoundary>
          <OffCanvas isOpen={isOffCanvasOpen} onClose={closeOffCanvas}>
            <>
              <div className="p-4">
                <input
                  className="rounded-md w-full border border-[#757676] p-2 outline-none"
                  type="search"
                  placeholder="Search"
                  value={searchPreferences}
                  onChange={(e) => setSearchPreferences(e.target.value)}
                />
              </div>
              <div className="grow px-4 overflow-auto offcanvas-scrollbar">
                <div className=" flex flex-col items-start font-semibold text-base gap-2">
                  {examList.map((item) => (
                    <button
                      key={item}
                      className={`${
                        selectedPreferences?.includes(item)
                          ? "text-gray2"
                          : "text-[#353C41]"
                      }`}
                      onClick={() => handlePreferences(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between gap-4 p-4 flex-col">
                <hr />
                <div className="flex flex-wrap gap-2">
                  {selectedPreferences.map((item) => (
                    <div
                      key={item}
                      className="border col-auto rounded-md px-2 py-1 bg-gray-100 border-gray2"
                    >
                      <div className="flex justify-center items-center gap-3">
                        <div className="text-base text-[#353C41]">{item}</div>
                        <div className=" bg-white rounded-full size-[18px] max-h-[18px] flex items-center justify-center">
                          <button
                            className="h-full flex leading-[12px]"
                            onClick={() => handlePreferences(item)}
                          >
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={closeOffCanvas}
                  className="flex w-full gap-2 bg-secondary rounded-full px-12 py-1.5 justify-center items-center"
                >
                  <span className="font-bold text-white text-xl">Done</span>
                </button>
              </div>
            </>
          </OffCanvas>
        </ErrorBoundary>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
