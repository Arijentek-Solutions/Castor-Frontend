"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReservationForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1280px] mx-auto mb-20 bg-white relative"
      id="reservation-section"
    >
      <div className="w-full h-[1800px] bg-white relative">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center pt-[400px] bg-white z-10"
            >
              <div className="w-12 h-12 border-4 border-[#20a9ad] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-[#0e1b33] font-medium animate-pulse">Loading Reservation Form...</p>
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          id="JotFormIFrame-261122620065040"
          title="Transport Reservation Form"
          onLoad={handleLoad}
          allowTransparency={true}
          allowFullScreen={true}
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/261122620065040"
          frameBorder="0"
          style={{
            minWidth: "100%",
            height: "100%",
            border: "none",
            backgroundColor: "#ffffff",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.5s ease-in-out"
          }}
          scrolling="no"
        />
      </div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var ifr = document.getElementById("JotFormIFrame-261122620065040");
            if (ifr) {
              var src = ifr.src;
              var iframeParams = [];
              if (window.location.href && window.location.href.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
              }
              if (src && src.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                src = src.substr(0, src.indexOf("?"))
              }
              iframeParams.push("isIframeEmbed=1");
              ifr.src = src + "?" + iframeParams.join('&');
            }
          `,
        }}
      />
    </motion.div>
  );
};

export default ReservationForm;
