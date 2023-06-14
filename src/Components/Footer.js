import React from 'react'
import style from "../styles/footer.module.css"
export default function Footer() {
    return (
        <div className={style.footer}>
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.65845" y="21.0996" width="10.2" height="1.36" rx="0.68" transform="rotate(-90 3.65845 21.0996)" fill="white" />
                <rect x="9.98926" y="31.6396" width="31.28" height="1.36" rx="0.68" transform="rotate(-90 9.98926 31.6396)" fill="white" />
                <rect x="16.3201" y="26.1992" width="20.4" height="1.36" rx="0.68" transform="rotate(-90 16.3201 26.1992)" fill="white" />
                <rect x="22.6509" y="31.6396" width="31.28" height="1.36" rx="0.68" transform="rotate(-90 22.6509 31.6396)" fill="white" />
                <rect x="28.9814" y="26.1992" width="20.4" height="1.36" rx="0.68" transform="rotate(-90 28.9814 26.1992)" fill="white" />
            </svg>
            <div>
                <p className={style.upperLine}>
                UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO
                </p>
                <p className={style.lowerLine}>
                CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.
                </p>
            </div>

        </div>
    )
}
