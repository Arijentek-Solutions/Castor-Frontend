"use client";

import { MessageCircle } from "lucide-react";

export function NeedHelpCard() {
    return (
        <div
            className="relative h-[192px] w-full rounded-[32px] p-6"
            style={{
                background:
                    "linear-gradient(143.13deg, rgb(32, 169, 173) 0%, rgb(31, 166, 170) 9.0909%, rgb(31, 163, 167) 18.182%, rgb(30, 161, 165) 27.273%, rgb(30, 158, 162) 36.364%, rgb(29, 155, 159) 45.455%, rgb(29, 153, 157) 54.545%, rgb(28, 150, 154) 63.636%, rgb(28, 147, 151) 72.727%, rgb(27, 144, 148) 81.818%, rgb(27, 142, 146) 90.909%, rgb(26, 139, 143) 100%)",
            }}
        >
            {/* Heading */}
            <h3 className="mb-0 text-[18px] font-black leading-[28px] text-white not-italic">
                Need Help?
            </h3>

            {/* Description */}
            <p className="mt-2 w-full text-[14px] font-normal leading-[20px] text-white/90 not-italic">
                Not sure which equipment is right for you? Our specialists can help.
            </p>

            {/* Chat with Expert Button */}
            <button className="mt-6 flex h-[32px] w-full items-center justify-center rounded-full bg-white text-[14px] font-bold leading-[20px] text-[#20a9ad] transition-all duration-300 hover:shadow-lg active:scale-[0.98]">
                <MessageCircle size={14} className="mr-1.5" />
                Chat with Expert
            </button>
        </div>
    );
}
