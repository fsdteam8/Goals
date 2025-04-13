
import React from "react";

const DashboardNavbar = async () => {
  return (
    <div className="h-[86px] flex items-center bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] pr-[32px]">
      <div className="w-full flex items-center justify-end gap-8">
        <div className="flex items-center gap-3">
          <div>
            <h4 className="text-sm font-medium leading-[20px] text-black">
              Splurjj
            </h4>
            <p className="text-xs font-medium leading-[18px] text-black">
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;