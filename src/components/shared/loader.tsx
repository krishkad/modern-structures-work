"use client";

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Loader = ({ load, setLoad }: { load: boolean, setLoad: (value: boolean) => void }) => {

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3);
  }, [load])

  return (
    <motion.div
      initial={{ y: "0" }}
      animate={!load && { y: '-100%', transition: { duration: .5 } }}
      exit={{ y: '-100%', transition: { duration: .5 } }}
      className="overflow-hidden w-screen h-[100svh] absolute inset-0 bg-white z-50 flex items-center justify-center">
      <img src="/intro-logo.gif" alt="intro" className="w-full" />
    </motion.div>
  )
}

export default Loader