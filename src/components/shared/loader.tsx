"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ load, setLoad }: { load: boolean, setLoad: (value: boolean) => void }) => {

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
      localStorage.setItem('load', 'true');
    }, 3000);
  }, [load])

  return (
    <motion.div
      initial={{ y: "0" }}
      animate={!load ? { y: '-100%', transition: { duration: .5 } } : {}}
      exit={{ y: '-100%', transition: { duration: .5 } }}
      className="overflow-hidden w-screen h-[100dvh] absolute inset-0 bg-white z-50 flex items-center justify-center">
      {/* <img src="/intro-logo.gif" alt="intro" className="w-full" /> */}
      <video src="/intro-video.mp4" muted autoPlay className='w-[400%] max-lg:scale-[2] aspect-video lg:w-full' />
    </motion.div>
  )
}

export default Loader