import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MobileNavigationMenuProps {
    isOpen: boolean;
  }

const MobileNavigationMenu = ({ isOpen } : MobileNavigationMenuProps) => {
  return (
    <motion.div
      initial={{ height: "10vh", y: -10 }} // Start small
      animate={isOpen ? { height: "calc(100vh - 4rem)", y: 0 } : { height: "10vh", y: -10 }} // Expand gradually
      exit={{ height: "10vh", y: -10 }} // Collapse on exit
      transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
      className="w-full mobileNavigationMenu absolute z-10 top-16 bg-white overflow-hidden"
    >
      <div className="flex">
        <div>
          <Image src={'https://www.olx.com.pk/assets/iconProfilePictureLoggedOut.d9525941a90d138552056f9fec4fbd63.png'} width={64} height={64} alt="userLoggedOutProfilePicture"/>
        </div>
        <div>
          <h1>Enter to your account</h1>
          <h1>Login to your account</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavigationMenu;