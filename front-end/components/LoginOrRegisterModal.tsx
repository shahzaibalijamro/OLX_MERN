import React from 'react'
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

interface LoginOrRegisterModal {
    setIsLoginModalOpen: (value: boolean) => void;
    isRegisterOpen: boolean;
    setIsRegisterOpen: (value: boolean) => void;
}

const LoginOrRegisterModal = ({setIsLoginModalOpen, isRegisterOpen, setIsRegisterOpen}:LoginOrRegisterModal) => {
    return (
        <>
        {isRegisterOpen ? <RegisterModal setIsLoginModalOpen={setIsLoginModalOpen} setIsRegisterOpen={setIsRegisterOpen} /> : <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} setIsRegisterOpen={setIsRegisterOpen} />}
        </>
    )
}

export default LoginOrRegisterModal