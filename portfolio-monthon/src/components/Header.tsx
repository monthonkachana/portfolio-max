// tsrfc export func components **

// tsrfce  func components ***

//trfce *

import React from "react";
import Link from "next/link";



//framer-motion
import { motion } from "framer-motion";
// flex box react-social-icons
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Socuial Icons */}

        <SocialIcon
          url="https://www.instagram.com/max.monthon9750/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/czamax"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/max.xis.908"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/monthonkachana"
          fgColor="gray"
          bgColor="transparent"
        />
        
      </motion.div>

      {/* --------------------------------------------------------------------------------- */}

     
    </header>
  );
}
