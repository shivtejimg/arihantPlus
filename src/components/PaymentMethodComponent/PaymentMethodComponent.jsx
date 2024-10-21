import { useState } from "react";
import visa from "../../assets/img/visa.svg";
import masterCard from "../../assets/img/masterCard.svg";
import maestro from "../../assets/img/maestro.svg";
import rupay from "../../assets/img/rupay.svg";
import paypal from "../../assets/img/paypal.svg";

const cardData = [
  {
    id: 1,
    name: "Anish kr.",
    bank: "SBI Debit Card",
    short: "SBI",
    ending: "ending in xxxx",
    image: visa,
  },
  {
    id: 2,
    name: "Anish kr.",
    bank: "HDFC Bank Credit Card",
    short: "HDFC",
    ending: "ending in xxxx",
    image: maestro,
  },
];

const PaymentMethodComponent = () => {
  const [step, setStep] = useState(1);
  const [selectedCard, setSelectedCard] = useState("");
  const [anotherSelectedMethod, setAnotherSelectedMethod] = useState("");

  return (
    <>
      {step === 1 ? (
        <div className="flex items-center justify-between border-y border-slate-700 py-6">
          <div className="font-semibold text-base 2xl:text-lg ">
            Payment Method
          </div>
          <div className="   text-center text-[#353C41]">
            <button
              className="inline-block 2xl:text-base text-sm py-1 px-10 rounded-full bg-gray4 border-secondary border hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => setStep(2)}
            >
              + Add
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {step === 2 ? (
        <div className="border-y border-slate-900 py-6">
          <div className="font-semibold text-base 2xl:text-lg pb-4">
            Selected Payment Method
          </div>
          <div className="border-solid border-2 border-slate-700 rounded-lg pt-8">
            <div className="px-4">
              <div className="font-semibold text-base 2xl:text-lg  border-b border-slate-700 pb-2">
                Your availabe balance
              </div>
              <div className="py-4">
                <div className="px-2 flex flex-wrap gap-2  justify-between">
                  <div>
                    <input
                      type="radio"
                      id="arihantPlusDiscount"
                      className="accent-secondary"
                    />
                    <label
                      className="ps-1 sm:ps-2 text-gray1 text-xs sm:text-sm w-full"
                      htmlFor="arihantPlusDiscount "
                    >
                      Use your 00.00 Arihant Plus discount/Pay Balance
                    </label>
                  </div>
                  <div className="text-xs sm:text-sm order-2 max-sm:order-3">
                    Add balance
                  </div>
                  <div className="w-2/3 sm:w-1/2  order-3 max-sm:order-2 flex gap-2 items-center ps-4 text-xs sm:text-sm ">
                    {" "}
                    <span className="bg-gray1 size-4 sm:size-6 flex items-center justify-center rounded-full text-white ">
                      !
                    </span>{" "}
                    Insufficient balance
                  </div>
                </div>
              </div>

              <div className="py-4">
                <div className="px-2 flex gap-2 items-center">
                  <span className="text-xl sm:text-3xl text-gray1">+</span>
                  <input
                    type="text"
                    className="border border-slate-500 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 w-1/2 sm:w-1/4"
                    id="code"
                    placeholder="Enter Code"
                  />
                  <button className="rounded-3xl border-2 px-5 py-2 border-slate-700 font-semibold  text-sm">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="border-b border-slate-700 pb-1">
                <div className="font-semibold text-base sm:text-xl 2xl:text-lg">
                  CREDIT & DEBIT CARDS
                </div>
                <div className="text-sm font-semibold text-gray1 text-right px-5">
                  Nickname
                </div>
              </div>

              {cardData.map((item) => (
                <label
                  className={`${
                    selectedCard == item.id
                      ? "bg-[#fceaaf69] border-[#FCEAAF] border-2  rounded-lg"
                      : " border-2 border-transparent"
                  } my-2 p-3 w-full cursor-pointer block`}
                  key={item.id}
                  htmlFor={item.bank}

                >
                  <div className="flex gap-2 justify-between items-center text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center gap-1 min-w-40">
                      <input
                        type="radio"
                        id={item.bank}
                        name="bank"
                        className="accent-secondary cursor-pointer"
                        value={item.id}
                        onChange={(e) => setSelectedCard(e.target.value)}
                      />
                      <div
                        className="text-nowrap font-semibold cursor-pointer"
                      >
                        {item.bank}
                      </div>
                    </div>

                    <div className="text-nowrap">{item.ending}</div>
                    <div>
                      <img
                        className="size-full object-cover"
                        src={item.image}
                        alt="visa"
                      />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray1 text-right pe-2 text-nowrap sm:px-5">
                      {item.name}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="px-4 pb-5">
              <div className="font-semibold text-base sm:text-xl 2xl:text-lg  border-b border-slate-700 pb-2">
                Another payment method
              </div>

              <label className={`${anotherSelectedMethod==="creditOrDebit"?"bg-[#fceaaf69] border-[#FCEAAF] border-2":" border-2 border-transparent"} block rounded-lg mt-2 p-3 w-full`}>
                <div>
                  <input
                    type="radio"
                    id="creditOrDebit"
                    name="paymentMethod"
                    className="accent-secondary"
                    value="creditOrDebit"
                    onChange={() => setAnotherSelectedMethod("creditOrDebit")}
                  />
                  <div
                    htmlFor="creditOrDebit "
                    className="ps-3 inline font-semibold text-sm sm:text-base"
                  >
                    Credit or debit card
                  </div>
                </div>

                <div className="w-full ps-6">
                  <div className="flex gap-2 w-1/2 ">
                    <img
                      src={visa}
                      alt="visa"
                      className="object-cover w-full h-9"
                    />
                    <img
                      src={masterCard}
                      alt="masterCard"
                      className="object-cover w-full h-9"
                    />
                    <img
                      src={maestro}
                      alt="maestro"
                      className="object-cover w-full h-9"
                    />
                    <img
                      src={rupay}
                      alt="rupay"
                      className="object-cover w-full h-9"
                    />
                    <img
                      src={paypal}
                      alt="paypal"
                      className="object-cover w-full h-9"
                    />
                  </div>

                  <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full">
                    <div className="w-full">
                      <div className="flex w-full gap-2 items-center">
                        <label
                          className="font-medium text-xs sm:text-sm w-28 sm:w-36 text-nowrap"
                          htmlFor="cardNumber"
                        >
                          Card number
                        </label>
                        <input
                          id="cardNumber"
                          type="text"
                          className="border border-slate-500 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 w-full"
                        />
                      </div>

                      <div className="flex w-full gap-2 items-center">
                        <label
                          className="font-medium text-xs sm:text-sm w-28 sm:w-36 text-nowrap"
                          htmlFor="cardNumber"
                        >
                          Nickname
                        </label>
                        <input
                          id="cardNumber"
                          type="text"
                          className="border border-slate-500 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 w-full"
                        />
                      </div>

                      <div className="flex w-full gap-2 items-center">
                        <label
                          className="font-medium text-xs sm:text-sm w-28 sm:w-36 text-nowrap"
                          htmlFor="cardNumber"
                        >
                          Expiry Date
                        </label>
                        <div className="flex gap-3 w-full">
                          <select className="border border-slate-500 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 w-full bg-brown4">
                            <option value="1" key="1">
                              01
                            </option>
                            <option value="2" key="2">
                              02
                            </option>
                            <option value="3" key="3">
                              03
                            </option>
                          </select>

                          <select className="border border-slate-500 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 w-full bg-brown4">
                            <option value="1" key="1">
                              01
                            </option>
                            <option value="2" key="2">
                              02
                            </option>
                            <option value="3" key="3">
                              03
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray4 p-4 rounded-2xl flex flex-col justify-between">
                      <div className="text-gray1 text-xs sm:text-sm">
                        Please ensure that you enable your card for online
                        payments from your bank’s app.
                      </div>

                      <div className="flex items-center gap-3 mt-2">
                        <button className="bg-white rounded-lg px-3 py-1 text-xs sm:text-sm">
                          Cancel
                        </button>
                        <button className="bg-primary text-white rounded-lg px-3 xl:px-6 py-1 text-xs sm:text-sm">
                          Enter card details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </label>

              <label className={`${anotherSelectedMethod==="netBanking"?"bg-[#fceaaf69] border-[#FCEAAF] border-2":" border-2 border-transparent"} block rounded-lg mt-2 p-3 w-full`}>
                <div>
                  <input
                    type="radio"
                    id="netBanking"
                    name="paymentMethod"
                    className="accent-secondary"
                    value="netBanking"
                    onChange={() => setAnotherSelectedMethod("netBanking")}
                  />
                  <div
                    htmlFor="netBanking"
                    className="ps-3 inline font-semibold text-sm sm:text-base"
                  >
                    Net Banking
                  </div>
                </div>
                <div className="ps-6 mt-2">
                  <select className="border border-slate-500 rounded-md h-10 mt-1  text-sm focus-visible:outline-none ps-2 w-1/2 sm:w-1/3 bg-brown4">
                    <option value="1" key="1" className="text-sm">
                      1
                    </option>
                    <option value="2" key="2" className="text-sm">
                      2
                    </option>
                    <option value="3" key="3" className="text-sm">
                      3
                    </option>
                  </select>
                </div>
              </label>

              <label className={`${anotherSelectedMethod==="upiApps"?"bg-[#fceaaf69] border-[#FCEAAF] border-2":" border-2 border-transparent"} block rounded-lg mt-2 p-3 w-full`}>
                <div>
                  <input
                    type="radio"
                    id="upiApps"
                    name="paymentMethod"
                    className="accent-secondary"
                    value="upiApps"
                    onChange={() => setAnotherSelectedMethod("upiApps")}
                  />
                  <div
                    htmlFor="upiApps"
                    className="ps-3 font-semibold text-sm sm:text-base inline"
                  >
                    Other UPI Apps
                  </div>
                </div>
                <div className="ps-6 ">
                  <div className="flex w-full gap-1 sm:gap-3 items-end">
                    <div className="flex flex-col w-1/2 sm:w-1/3">
                      <label htmlFor="otherUpiId text-nowrap ">
                        <span className="text-xs sm:text-sm text-nowrap">
                          {" "}
                          Please enter your UPI ID
                        </span>
                      </label>
                      <input
                        type="text"
                        id="otherUpiId"
                        className="border border-slate-400 rounded-md h-10 mt-1 focus-visible:outline-none ps-2 text-sm"
                        placeholder="Enter UPI ID"
                      />
                    </div>
                    <div>
                      <button className="bg-primary text-white px-5 py-1 rounded-lg h-10 text-sm">
                        Verify
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <div>
                      The UPI ID is in the format of name/phone number@bankname
                    </div>
                  </div>
                </div>
              </label>

              <label className={`${anotherSelectedMethod==="cod"?"bg-[#fceaaf69] border-[#FCEAAF] border-2":" border-2 border-transparent"} block rounded-lg mt-2 p-3 w-full`}>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    className="accent-secondary"
                    value="cod"
                    onChange={() => setAnotherSelectedMethod("cod")}
                  />
                  <label
                    htmlFor="cod"
                    className="inline font-semibold text-sm sm:text-base"
                  >
                    Cash on Delivery/Pay on Delivery
                  </label>
                </div>
                <div className="ps-6">
                  <div className="text-sm">Cash, UPI and cards accepted.</div>
                </div>
              </label>

            </div>
            <div className="bg-gray4 rounded-b-lg py-5">
              <div className="mx-4">
                <button
                  className="font-semibold max-sm:w-full text-sm bg-primary px-5 py-3.5 rounded-full text-white"
                  onClick={() => setStep(3)}
                >
                  Use this payment method
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {step == 3 ? 
      <div className="py-7 border-y border-gray1">
           <div className="flex items-center justify-between text-lg">
           <div className="font-semibold">Payment Method</div>
           <button className="font-medium text-secondary" onClick={() => setStep(2)} >Change</button>
           </div>
           <div className="pt-5 ps-16">
           <div className="text-lg font-semibold">Paying With Visa xxxx</div>
            <div className="font-semibold text-lg">Billing address :
              <span className="font-normal">{" "}Same as delivery address</span></div>
           </div>
      </div> : ""}
    </>
  );
};

export default PaymentMethodComponent;
