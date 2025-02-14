import Logo from '@/assets/Logo'
import React from 'react'

const InstallBanner = ({closeAppSuggestion}:{closeAppSuggestion: () => void}) => {
    return (
        <div className="installBanner">
            <div className='flex justify-start items-center'>
                <button onClick={closeAppSuggestion}>
                    <svg width="20" height="20" fillRule="evenodd" viewBox="0 0 1024 1024">
                        <path
                            d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z"
                            className="rui-22SD7"
                        ></path>
                    </svg>
                </button>
                <div className='ms-4'>
                    <Logo height={25} />
                    <span>Pakistan's no.1 Marketplace</span>
                </div>
            </div>
            <a href="https://olxpk.page.link/home?adExternalID=" className="openApp">
                Open app
            </a>
        </div>
    )
}

export { InstallBanner }