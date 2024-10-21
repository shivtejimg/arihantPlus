import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const NewsMarqueeComponent = () => {
  return (
    <ErrorBoundary>

    <div className="bg-gray4/50 py-4">
    <div className="bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <marquee behavior="" direction="">
          <div className="flex gap-3 overflow-hidden overflow-x-auto no-scrollbar py-3 item-center">
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                JEE Main 2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                JEE Main 2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                JEE Main 2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                BITSAT 2025 Result
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                JEE Main 2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                2025 Admit Card Released
              </span>
            </div>
            <div className="flex gap-1 items-center flex-nowrap">
              <span className="size-3 border rounded-full border-secondary"></span>
              <span className="text-sm 2xl:text-lg font-normal text-black text-nowrap">
                2025 Admit Card Released
              </span>
            </div>
          </div>
        </marquee>
      </div>
    </div>
  </div>
    </ErrorBoundary>
  )
}

export default NewsMarqueeComponent;