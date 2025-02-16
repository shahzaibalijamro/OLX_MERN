import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MobileNavigationMenuProps {
  isOpen: boolean;
  isRegisterOpen: boolean;
  setIsLoginModalOpen: (value:boolean) => void;
  setIsRegisterOpen: (value:boolean) => void;
}

const MobileNavigationMenu = ({ isOpen,isRegisterOpen,setIsLoginModalOpen,setIsRegisterOpen }: MobileNavigationMenuProps) => {
  return (
    <motion.div
      initial={{ height: "fit-content", y: -10 }}
      animate={isOpen ? { height: "calc(100vh - 4rem)", y: 0 } : { height: "fit-content", y: -10 }}
      exit={{ height: "fit-content", y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full mobileNavigationMenu absolute z-10 top-16 left-0 right-0 bg-white"
    >
      <div className="flex border-b-[1px] border-[#ced6d7] p-4 w-full justify-start items-center h-fit">
        <div>
          <Image src={'https://www.olx.com.pk/assets/iconProfilePictureLoggedOut.d9525941a90d138552056f9fec4fbd63.png'} width={64} height={64} alt="userLoggedOutProfilePicture" />
        </div>
        <div className="ms-4">
          <h1 className="text-[14px]">Enter to your account</h1>
          <h1 className="text-[14px] underline cursor-pointer">Login to your account</h1>
        </div>
      </div>
      <div className="border-b-[1px] border-[#ced6d7]">
        <div className="flex min-h-[45px] cursor-pointer items-center">
          <div className="mx-4">
            <svg
              width={23}
              height={23}
              fillRule="evenodd"
              data-aut-id="icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M670.72 128l42.67 128h182.6l42.67 42.67v554.67L896 896H128l-42.67-42.66V298.67L128 256h182.6l42.67-128h317.44zm-61.44 85.33H414.72l-42.67 128H170.66v469.33h682.67V341.33H651.94l-42.66-128zm-97.28 128c117.63 0 213.33 95.7 213.33 213.33S629.63 768 512 768s-213.33-95.7-213.33-213.33S394.37 341.33 512 341.33zm0 85.34c-70.61 0-128 57.38-128 128s57.39 128 128 128 128-57.39 128-128-57.39-128-128-128z" />
            </svg>
          </div>
          <span>Start selling</span>
        </div>
        <div className="flex min-h-[45px] cursor-pointer items-center">
          <div className="mx-[16px]">
            <Image
              alt="My Ads"
              width={23}
              height={23}
              src="https://www.olx.com.pk/assets/iconMyAds_noinline.81f6b0cc8a3d16d363fb142e1489d035.svg"
            />
          </div>
          <span className="a1c1940e">My ads</span>
        </div>
        <div className="flex min-h-[45px] cursor-pointer items-center">
          <div className="mx-4">
            <Image
              alt="Chat link"
              width={23}
              height={23}
              src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg"
            />
          </div>
          <span className="a1c1940e">Chat</span>
        </div>
      </div>
      <div className="border-b-[1px] border-[#ced6d7]">
        <div className="flex min-h-[45px] cursor-pointer items-center">
          <div className="mx-4">
            <Image
              alt="Help"
              width={23}
              height={23}
              src="https://www.olx.com.pk/assets/iconHelp_noinline.f07d255148323e318808a50c52097d0c.svg"
            />
          </div>
          <span>Help</span>
        </div>
      </div>
      <div className="px-[8px] py-[16px]">
        <button onClick={() => setIsLoginModalOpen(true)} className="w-full rounded-sm h-12 px-[10px] flex justify-center items-center cursor-pointer bg-[#002f34] font-bold text-white max-h-full">
          Login
        </button>
      </div>
      <div className="px-[8px] pb-[16px]">
        <button onClick={() => setIsRegisterOpen(true)} className="w-full rounded-sm h-12 px-[10px] flex justify-center items-center cursor-pointer border-[2px] border-[#002f34] text-[#002f34] font-bold max-h-full">
          Create a new account
        </button>
      </div>
    </motion.div>
  );
};

export default MobileNavigationMenu;