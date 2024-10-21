import AppLayout from "../../components/AppLayout/AppLayout";
import AddressComponent from "../../components/AddressComponent/AddressComponent";
import PaymentMethodComponent from "../../components/PaymentMethodComponent/PaymentMethodComponent";
import ItemsAndDeliveryComponent from "../../components/ItemsAndDeliveryComponent/ItemsAndDeliveryComponent";

const OrderPage = () => {
  return (
    <AppLayout>
      <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto pt-36 lg:pt-20">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 relative items-end md:items-start">
          <div className="col-span-12 md:col-span-8">
            <div className="size-full ">
          <div className="address ">
            <div className=" font-semibold 2xl:text-xl text-lg pb-2 border-b w-full border-slate-500">
            Nitin Kumar
          </div>
            <AddressComponent />
            </div>
              

              <div className="payment">
                <PaymentMethodComponent />

                <ItemsAndDeliveryComponent />

                <div className="text-sm 2xl:text-base py-7 text-gray1">
                  Need help? Check our
                  <a className="text-secondary font-semibold"> help pages</a> or
                  <a className="text-secondary font-semibold"> contact us.</a>
                </div>
                <div className="text-sm 2xl:text-base text-gray1">
                  When your order is placed, we'll send you an e-mail message
                  acknowledging reciept of your order.If you choose to pay using
                  an electronic payment method (credit card,debit card or net
                  banking),You will be directed to your bank's website to
                  complete your payment.Your contract to purchase an item will
                  not be complete until you can pay cash/card/net banking when
                  you recieve your item.
                </div>
                <div className="text-sm 2xl:text-base py-7 text-gray1">
                  See Arihant Plus's
                  <a className="text-secondary font-semibold">
                    {" "}
                    Return Policy{" "}
                  </a>
                </div>
                <div className="text-sm 2xl:text-base text-gray1">
                  Need to add more items to your order? Continue shopping on the
                  <a className="text-secondary font-semibold">
                    {" "}
                    Arihant Plus homepage
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 sticky top-10">
            <div className="w-full sm:w-1/2 max-md:mx-auto md:size-full ">
              <div className="border mt-10 rounded-2xl">
                <div className="p-3 lg:p-5   w-full">
                  <div className="">
                    <button className="bg-primary text-white 2xl:text-base text-sm w-full inline-block text-center py-3 rounded-full">
                      Use this address
                    </button>
                  </div>
                  <div className="text-sm 2xl:text-base pt-5 pb-8 text-center">
                    Choose a payment to continue checking out. You'll still have
                    chance to review your order before it's final.
                  </div>
                  <div className="orderr ">
                    <div className="font-semibold pb-5 text-base 2xl:text-lg">
                      Order Summary
                    </div>
                    <div className="flex items-center justify-between text-sm 2xl:text-base">
                      <div className="">Items:</div>
                      <div className="">0.00</div>
                    </div>
                    <div className="flex items-center justify-between 2xl:text-base text-sm py-3">
                      <div className="">Delivery:</div>
                      <div className="">0.00</div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-secondary font-semibold border-y py-4">
                      <div className="text-base 2xl:text-lg">Order Total</div>
                      <div className="text-base 2xl:text-lg">0.00</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm 2xl:text-base text-[#6F757C] bg-[#DFE1E5] mt-5 text-center py-4 rounded-b-2xl">
                  How are delivery costs calculated?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderPage;
