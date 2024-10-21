import React from 'react'

const SpecificationComponent = ({ data={} }) => {
  return (
    <div className="border-t border-black py-10">
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto ">
      
      {data?.publisher?<div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Publisher:
        </span>
        {data?.publisher}
      </div>:""}

      {data.language? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Language:
        </span>
        English
      </div>:""}

      {data?.pages?  <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Paperback:
        </span>
        {data?.pages} pages
      </div>:""}

      {data?.isbn_10 ? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          ISBN-10:{" "}
        </span>{" "}
        {data?.isbn_10}
      </div>:""}

      {data?.isbn_13? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          ISBN-13:{" "}
        </span>{" "}
        {data?.isbn_13}
      </div>:""}

      {data.item_weight? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Item Weight:
        </span>
        {data?.item_weight} Kg
      </div>:""}

      {data?.dimensions ? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Dimensions :
        </span>
        {data?.dimensions}
      </div>:""}

      {data?.country_of_origin? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Country of Origin
        </span>
        {data?.country_of_origin}
      </div>:""}

      {data?.net_quantity?<div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Net Quantity:
        </span>
        {data?.net_quantity} Kg
      </div>:""}

      {data?.importer? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Importer:
        </span>
        {data?.importer}
      </div>:""}

      {data?.packer ? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">Packer:</span>
        {data?.packer}
      </div>:""}

      {data?.generic_name ? <div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Generic Name:
        </span>
        {data?.generic_name}
      </div>:""}

      {data?.best_sellers_ranks?.length?<div className="text-gray1 text-sm font-normal 2xl:text-xl">
        <span className="font-semibold text-base text-black 2xl:text-xl">
          Best Sellers Rank:
        </span>
        {data?.best_sellers_ranks?.map((item)=>(`#${item?.best_seller_rank} in ${item?.best_seller_rank_category} (See Top 100 in Books)`))}
      </div>:""}
      
    </div>
  </div>
  )
}

export default SpecificationComponent