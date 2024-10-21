import { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import * as Yup from "yup";
// import { postAPI } from "../../utils/apiServices";

const data = [
  {
    id: 1,
    name: "Anish Kr",
    address:
      ".192/24,opposite bus stand,sadar bazar,meerut, Uttar Pradesh 25001",
  },
  {
    id: 2,
    name: "Anish Kr",
    address:
      ".192/24,opposite bus stand,sadar bazar,meerut, Uttar Pradesh 25001",
  },
  {
    id: 3,
    name: "Anish Kr",
    address:
      ".192/24,opposite bus stand,sadar bazar,meerut, Uttar Pradesh 25001",
  },
];

const AddressComponent = () => {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressFormValues, setAddressFormValues] = useState({
    fullName: "",
    mobileNumber: "",
    alterMobileNumber: "",
    email: "",
    country: "",
    address1: "",
    address2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    isDefault: false,
    addressType: "",
  });
  const [formError, setFormErrors] = useState({});

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z]+$/, "FullName can only contain letters")
      .required("FullName is required"),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    alterMobileNumber: Yup.string()
      .matches(
        /^\d{10}$/,
        "Alternative mobile number must be exactly 10 digits"
      )
      .required("Alternative mobile number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    country: Yup.string()
      .matches(/^[A-Za-z]+$/, "Country can only contain letters")
      .required("Country is required"),
    address1: Yup.string().required("Address is required"),
    address2: Yup.string().required("Address is required"),
    landmark: Yup.string().required("Landmark is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Enter a valid pincode")
      .required("Pincode is required"),
    city: Yup.string()
      .matches(/^[A-Za-z]+$/, "City can only contain letters")
      .required("City is required"),
    state: Yup.string()
      .matches(/^[A-Za-z]+$/, "State can only contain letters")
      .required("State is required"),
  });

  // const validateForm = async (value, callback) => {
  //   try {
  //     await validationSchema.validate(value, {
  //       abortEarly: false,
  //     });
  //     setFormErrors({});
  //     if (callback) callback();
  //   } catch (err) {
  //     const newErrors = {};
  //     err.inner.forEach((error) => {
  //       newErrors[error.path] = error.message;
  //     });
  //     setFormErrors(newErrors);
  //   }
  // };

  const validateField = async (field, value) => {
    try {
      await validationSchema.validateSyncAt(field, { [field]: value });
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    } catch (err) {
      setFormErrors((prev) => ({ ...prev, [field]: err.message }));
    }
  };

  // const handleSubmit = () => {
  //   validateForm(addressFormValues, async () => {
  //     try {
  //       // const res =await postAPI(API_ROUTE.OTP_SUBMIT,{...payload,selectedRole});
  //       const res = {};
  //       console.log({ res });
  //       // navigate(PAGE_ROUTES.PRODUCT_LIST);
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   });
  // };

  const handleFormChange = (e) => {
    setAddressFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      {step === 1 ? (
        <>
          <div className="pt-5 mb-10">
            <div className=" flex flex-col gap-3">
              <div className="font-semibold text-base 2xl:text-lg ">
                Delivery address
              </div>

              {data.map((item) => (
                <ErrorBoundary key={item.id}>
                  <div className="addrs1">
                    <input
                      type="radio"
                      name="status"
                      className="w-4 h-4 absolute hidden accent-current right-3 peer/mm"
                      id={item.id}
                      onChange={() => setSelectedAddress(item.id)}
                      value={selectedAddress}
                      checked={selectedAddress === item.id}
                    />
                    <label
                      htmlFor={item.id}
                      className=" p-0.5 relative  flex items-center rounded-full peer-checked/mm:ring-primary peer-checked/mm:ring-2 select-none"
                    >
                      <div className="flex max-sm:gap-1 items-center justify-between w-full 2xl:px-8 px-5 py-3 sm:py-2 2xl:py-3 bg-gray4 rounded-full">
                        <div className="2xl:w-[38%] w-2/3 lg:w-[54%] text-xs sm:text-sm text-gray1 2xl:text-base">
                          <span className=" font-medium text-black">
                            {item.name}
                          </span>
                          {item.address}
                        </div>
                        <div className="flex gap-1 sm:gap-2 items-center text-gray1 text-xs sm:text-sm 2xl:text-base">
                          <button
                            className="text-nowrap hover:text-primary transition-all duration-300 ease-in-out"   
                            onClick={() => setStep(2)}
                          >
                            Edit address
                          </button>
                          |<button className="hover:text-primary transition-all duration-300 ease-in-out">Delete</button>
                        </div>
                      </div>
                    </label>
                  </div>
                </ErrorBoundary>
              ))}
            </div>
            <div className="pt-5">
              <button
                className="font-semibold text-gray1 text-base 2xl:text-lg"
                onClick={() => setStep(2)}
              >
                + Delivery address
              </button>
            </div>
            <div className=" pt-10 ">
              <button
                className="bg-primary text-white text-sm 2xl:text-base px-14 py-3 rounded-full"
                onClick={() => setStep(3)}
              >
                Use this address
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {step === 2 ? (
        <>
          <div className="flex items-center justify-between py-7">
            <div className="font-semibold text-base 2xl:text-lg ">
              Add Delivery address
            </div>
            <button className="max-sm:hidden 2xl:text-base text-sm py-1 px-10 rounded-full bg-gray4 border-secondary border">
              Autofill your current location
            </button>
          </div>
          <div className="form border-y border-slate-300 py-5">
            <div className="grid grid-cols-12 max-sm:gap-x-3 gap-7">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="size-full">
                  <label
                    htmlFor="fullname"
                    className="font-semibold text-xs sm:text-sm 2xl:text-base"
                  >
                    Full name (Full and Last name)
                  </label>
                  <input
                    className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                    type="text"
                    id="fullname"
                    name="fullName"
                    value={addressFormValues.fullName}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField("fullName", addressFormValues.fullName)
                    }
                  />
                  {formError.fullName && (
                    <div className="text-error text-xs">
                      {formError.fullName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-6 lg:col-span-4">
                <div className="size-full">
                  <label
                    htmlFor="mobile"
                    className="font-semibold text-xs sm:text-sm  2xl:text-base"
                  >
                    Mobile number
                  </label>
                  <input
                    className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                    type="tel"
                    id="mobile"
                    name="mobileNumber"
                    value={addressFormValues.mobileNumber}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField(
                        "mobileNumber",
                        addressFormValues.mobileNumber
                      )
                    }
                  />
                  {formError.mobileNumber && (
                    <div className="text-error text-xs">
                      {formError.mobileNumber}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-6 lg:col-span-4">
                <div className="size-full">
                  <label
                    htmlFor="alternateMob"
                    className="font-semibold text-xs sm:text-sm  2xl:text-base"
                  >
                    Alternative mobile number
                  </label>
                  <input
                    className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                    type="tel"
                    id="alternateMob"
                    name="alterMobileNumber"
                    value={addressFormValues.alterMobileNumber}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField(
                        "alterMobileNumber",
                        addressFormValues.alterMobileNumber
                      )
                    }
                  />
                  {formError.alterMobileNumber && (
                    <div className="text-error text-xs">
                      {formError.alterMobileNumber}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-6 lg:col-span-8">
                <div className="size-full">
                  <label
                    htmlFor="email"
                    className="font-semibold text-xs sm:text-sm  2xl:text-base"
                  >
                    Email
                  </label>
                  <input
                    className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                    type="email"
                    id="email"
                    name="email"
                    value={addressFormValues.email}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField("email", addressFormValues.email)
                    }
                  />
                  {formError.email && (
                    <div className="text-error text-xs">{formError.email}</div>
                  )}
                </div>
              </div>
              <div className="col-span-6 lg:col-span-4">
                <div className="size-full">
                  <label
                    htmlFor="country"
                    className="font-semibold text-xs sm:text-sm  2xl:text-base"
                  >
                    Country/Region
                  </label>
                  <select
                    className="border text-xs 2xl:text-sm border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none px-2 bg-gray-200"
                    id="country"
                    name="country"
                    value={addressFormValues.country}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField("country", addressFormValues.country)
                    }
                  >
                    <option value="india">India</option>
                    <option value="america">America</option>
                  </select>
                  {formError.country && (
                    <div className="text-error text-xs">
                      {formError.country}
                    </div>
                  )}
                </div>
              </div>
              <button className="col-span-12 max-sm:block hidden 2xl:text-base text-xs sm:text-sm py-2.5 sm:py-1 px-10 rounded-full bg-gray4 border-secondary border">
                Autofill your current location
              </button>
              <div className="col-span-12">
                <label
                  htmlFor="building"
                  className="font-semibold text-xs sm:text-sm  2xl:text-base"
                >
                  Flat,House no,Building,Company,Apartment
                </label>
                <input
                  className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                  type="text"
                  id="building"
                  name="address1"
                  value={addressFormValues.address1}
                  onChange={handleFormChange}
                  onBlur={() =>
                    validateField("address1", addressFormValues.address1)
                  }
                />
                {formError.address1 && (
                  <div className="text-error text-xs">{formError.address1}</div>
                )}
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="area"
                  className="font-semibold text-xs sm:text-sm  2xl:text-base"
                >
                  Area,Street,Sector,Village
                </label>
                <input
                  className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2"
                  type="text"
                  id="area"
                  name="address2"
                  value={addressFormValues.address2}
                  onChange={handleFormChange}
                  onBlur={() =>
                    validateField("address2", addressFormValues.address2)
                  }
                />
                {formError.address2 && (
                  <div className="text-error text-xs">{formError.address2}</div>
                )}
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Landmark"
                  className="font-semibold text-xs sm:text-sm  2xl:text-base"
                >
                  Landmark
                </label>
                <input
                  className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2 placeholder:text-xs sm:placeholder:text-sm 2xl:placeholder:text-base placeholder:text-slate-400 placeholder:ps-1 sm:placeholder:ps-3"
                  type="text"
                  id="Landmark"
                  name="landmark"
                  placeholder="Eg. near apollo hospital"
                  value={addressFormValues.landmark}
                  onChange={handleFormChange}
                  onBlur={() =>
                    validateField("landmark", addressFormValues.landmark)
                  }
                />
                {formError.landmark && (
                  <div className="text-error text-xs">{formError.landmark}</div>
                )}
              </div>
              <div className="col-span-6 lg:col-span-4">
                <label
                  htmlFor="pin"
                  className="font-semibold text-xs sm:text-sm  2xl:text-base"
                >
                  Pincode
                </label>
                <input
                  className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2 placeholder:text-xs sm:placeholder:text-sm 2xl:placeholder:text-base placeholder:text-slate-400 placeholder:ps-1 sm:placeholder:ps-3"
                  type="text"
                  id="pin"
                  name="pincode"
                  placeholder="6 digit [0-9] pin code"
                  value={addressFormValues.pincode}
                  onChange={handleFormChange}
                  onBlur={() =>
                    validateField("pincode", addressFormValues.pincode)
                  }
                />
                {formError.pincode && (
                  <div className="text-error text-xs">{formError.pincode}</div>
                )}
              </div>
              <div className="col-span-6 lg:col-span-4">
                <label
                  htmlFor="town"
                  className="font-semibold text-xs sm:text-sm  2xl:text-base"
                >
                  Town/City
                </label>
                <input
                  className="border border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none ps-2 placeholder:text-sm 2xl:placeholder:text-base placeholder:text-slate-400 placeholder:ps-3"
                  type="text"
                  id="town"
                  name="city"
                  value={addressFormValues.city}
                  onChange={handleFormChange}
                  onBlur={() => validateField("city", addressFormValues.city)}
                />
                {formError.city && (
                  <div className="text-error text-xs">{formError.city}</div>
                )}
              </div>
              <div className="col-span-6 lg:col-span-4">
                <div className="size-full">
                  <label
                    htmlFor="state"
                    className="font-semibold text-xs sm:text-sm  2xl:text-base"
                  >
                    State
                  </label>
                  <select
                    className="border text-xs 2xl:text-sm border-slate-400 rounded-md w-full h-10 mt-1 focus-visible:outline-none px-2 bg-gray-200"
                    name="state"
                    id="state"
                    value={addressFormValues.state}
                    onChange={handleFormChange}
                    onBlur={() =>
                      validateField("state", addressFormValues.state)
                    }
                  >
                    <option value="rajasthan">Rajasthan</option>
                    <option value="haryana">Haryana</option>
                  </select>
                  {formError.state && (
                    <div className="text-error text-xs">{formError.state}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input
                type="checkbox"
                id="defaultaddress"
                name="isDefault"
                className="rounded-md accent-secondary"
                value={addressFormValues.isDefault}
              />
              <label
                htmlFor="defaultaddress"
                className="text-slate-400  text-sm 2xl:text-base"
              >
                Make this my default address
              </label>
            </div>
            <div className="pt-7">
              <div className="font-semibold text-sm 2xl:text-base ">
                Address Type(Optional)
              </div>
              <div className="flex items-center gap-7 py-5">
                <button
                  className={`text-sm border font-semibold py-2 px-7 rounded-lg ${
                    addressFormValues.addressType === "House"
                      ? "border-primary text-primary font-semibold"
                      : " border-slate-300"
                  }`}
                  onClick={() =>
                    setAddressFormValues((prev) => ({
                      ...prev,
                      addressType: "House",
                    }))
                  }
                >
                  House
                </button>
                <button
                  className={`text-sm border py-2 px-7 rounded-lg ${
                    addressFormValues.addressType === "Office"
                      ? "border-primary text-primary font-semibold"
                      : "border-slate-300"
                  }`}
                  onClick={() =>
                    setAddressFormValues((prev) => ({
                      ...prev,
                      addressType: "Office",
                    }))
                  }
                >
                  Office
                </button>
              </div>
              {addressFormValues.addressType ? (
                <>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="monday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="monday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Monday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="tuesday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="tuesday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Tuesday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="wednesday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="wednesday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Wednesday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="thursday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="thursday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Thursday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="friday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="friday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Friday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="saturday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="saturday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Saturday
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="size-full flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="sunday"
                          className=" accent-gray-500 "
                        />
                        <label
                          htmlFor="sunday"
                          className="font-semibold text-sm 2xl:text-base"
                        >
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold text-sm 2xl:text-base pt-5 ">
                    <button className="border-b border-slate-500">
                      6AM - 11 PM delivery
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" my-8 ">
            <button
              className="bg-primary max-sm:w-full  text-white text-sm 2xl:text-base px-14 py-3 rounded-full"
              onClick={() => setStep(3)}
            >
              Use this address
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {step === 3 ? (
        <div className="py-7">
          <div className="flex items-center justify-between text-lg w-full pb-5 ">
            <div className="font-semibold ">Delivery address</div>
            <button
              className="text-secondary font-medium"
              onClick={() => setStep(1)}
            >
              Change
            </button>
          </div>
          <div className="flex items-center justify-between ps-16">
            <div className="font-normal text-lg">
              <div className="font-semibold">Anish Kr.</div>
              <div className="">192/24,opposite bus stand,</div>
              <div className="">sadar bazar, meerut,</div>
              <div className="">Uttar Pardesh 250001</div>
            </div>

            <div className="flex items-end mt-auto gap-6 text-sm font-semibold text-gray1 ">
              <button onClick={() => setStep(2)}>Edit address</button>|
              <button className="">Delete</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddressComponent;
