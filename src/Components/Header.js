import React from 'react'
import style from "../styles/header.module.css";
import { BsTwitter, BsDiscord } from 'react-icons/bs';
const logoPath = process.env.PUBLIC_URL + '/LogoSVG.svg';
export default function Header() {
    return (
        <div className={style.headerContainer}>
            <div className={style.logoAndLoader}>
                <div className={style.logoContainer}>

                <img src={logoPath} alt="logo" className={style.logo} />
                </div>
                <div className={style.loaderContainer}>
                    <span className={style.loader}></span>
                </div>
            </div>
            <div className={style.navbar}>
                <div className={style.navLink}>
                    <p className={style.navTitle}>ABOUT</p>
                    <p className={style.navNumber}>001</p>
                </div>
                <div className={style.socialLink}>
                    <BsDiscord className={style.navSocialLogo} />

                    <p className={style.navNumber}>002</p>
                </div>
                <div className={style.socialLink}>
                    <BsTwitter className={style.navSocialLogo} />
                    <p className={style.navNumber}>003</p>
                </div>
                <div className={style.navLink}>

                    <p className={style.navTitle}>LAUNCH ULTIVERSE</p>
                    <p className={style.navNumber}>004</p>
                </div>
                <div className={style.toggleMenuButton}>
                    <svg width="47" height="10" viewBox="0 0 47 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47 1H1.24513e-06M47 9H7.70988" stroke="white" strokeOpacity="0.5" strokeWidth="0.5" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
