import Image from 'next/image'
import React, { useState } from 'react'
import LoginModal from './LoginModal';

interface RegisterModalProps {
    setIsRegisterOpen: (value: boolean) => void;
    setIsLoginModalOpen: (value: boolean) => void;
}

const RegisterModal = ({ setIsRegisterOpen, setIsLoginModalOpen }: RegisterModalProps) => {
    const closeModal = () => {
        setIsLoginModalOpen(false);
        setIsRegisterOpen(false);
    }
    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <div className='flex justify-end'>
                    <div className='w-fit pt-4 ps-4 pe-4'>
                        <svg onClick={closeModal} width="25" height="25" className='cursor-pointer' data-aut-id="icon" viewBox="0 0 1024 1024"><path d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z"></path></svg>
                    </div>
                </div>
                <div className='px-6 py-4'>
                    <div className='mb-8'>
                        <div className='mb-8 flex justify-center items-center'>
                            <Image height={40} width={75} src={'https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg'} alt='OLX LOGO' />
                        </div>
                        <div className=''>
                            <h1 className='roboto-bold text-[24px] text-center'>
                                Create a new OLX account
                            </h1>
                        </div>
                    </div>
                    <div>
                        <button className="w-full rounded-sm h-12 px-[10px] flex justify-center items-center cursor-pointer border-[2px] border-[#002f34] text-[#002f34] font-bold max-h-full">
                            <img className='me-2' src="https://www.olx.com.pk/assets/iconGoogleLogin_noinline.633b1f5afb5219bedca01d2367642a28.svg" alt="" />Join with Google
                        </button>
                        <div className='w-full p-4 text-center leading-[18px]'>
                            OR
                        </div>
                        <button className="w-full rounded-sm h-12 px-[10px] flex justify-center items-center cursor-pointer border-[2px] border-[#002f34] text-[#002f34] font-bold max-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className='me-2'><path fill="currentColor" fill-rule="evenodd" d="M4 18V7.41l6.88 6.88h2.24L20 7.42V18H4zM18.59 6l-6.3 6.3h-.58L5.4 6H18.6zM21 4H3L2 5v14l1 1h18l1-1V5l-1-1z" clip-rule="evenodd"></path></svg>Join with Email
                        </button>
                    </div>
                    <div className='mt-4 roboto-regular'>
                        <span className="text-[14px] font-normal leading-[18px]">When creating a new account you agree to <a className='font-bold underline' rel="noopener noreferrer" target="_blank" href="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use-">OLX's <br /> Terms and conditions</a> and <a className='font-bold underline' rel="noopener noreferrer" target="_blank" href="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information">Privacy Policy</a></span>
                    </div>
                    <div className='mt-8'>
                        <div onClick={() => { setIsRegisterOpen(false) }} className='flex justify-center pb-4 px-[6px] pt-[1px] text-[#3a77ff] cursor-pointer text-[16px] font-bold leading-[20px] roboto-bold'>
                            Already have an account? Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal