"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function CareStorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "jqZLYknBlng";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-12 px-4 sm:px-8 bg-white">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full overflow-hidden rounded-[32px] shadow-2xl bg-[#0e1b33]"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
              >
                {/* Thumbnail Background with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${thumbnail})` }}
                />
                <div className="absolute inset-0 bg-[#0e1b33]/60 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-[#0e1b33]/40" />
                
                <div className="relative flex flex-col items-center gap-6">
                  {/* Play Button */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-[#20a9ad]/20 rounded-full blur-xl"
                    />
                    <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#20a9ad] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-[30px] w-[30px] fill-current" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-[18px] md:text-[22px] font-bold text-white tracking-wide drop-shadow-lg">
                    Watch Our Care Story
                  </h3>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Castor Care Story"
                  className="h-full w-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
