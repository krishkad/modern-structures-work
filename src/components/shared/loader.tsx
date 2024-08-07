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
      <video src="/LOGO.mp4" muted autoPlay className='w-[80%] aspect-video lg:w-[60%]' />
    </motion.div>
  )
}

export default Loader