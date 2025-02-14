import React from "react";
import { motion } from "framer-motion";

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
      className="w-full mobileNavigationMenu absolute z-10 top-16 bg-black overflow-hidden"
    >
    </motion.div>
  );
};

export default MobileNavigationMenu;