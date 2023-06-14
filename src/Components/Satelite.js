import React from 'react'
import style from "../styles/satelite.module.css"
const satalite = process.env.PUBLIC_URL + '/satalite.png';
export default function Satelite() {
  return (
    <div className={style.satalite}>
       
    
        <img className={style.sataliteImage} src={satalite} alt="satalite" />
        
        <svg className={style.sataliteVector} width="962" height="405" viewBox="0 0 962 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="481" cy="481.098" r="480.298" stroke="#D9D9D9" />
          <circle cx="481" cy="481.098" r="480.298" stroke="url(#paint0_linear_1_13102)" />
          <defs>
            <linearGradient id="paint0_linear_1_13102" x1="481" y1="260.287" x2="481" y2="-89.5404" gradientUnits="userSpaceOnUse">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className={style.sataliteGlow} width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter-neon-glow)">
            <circle cx="127" cy="127" r="50" fill="#00FFE6" />
          </g>
          <defs>
            <filter id="filter-neon-glow" x="0" y="0" width="254" height="254" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="10" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_1_13123" />
            </filter>
          </defs>
        </svg>
        <svg className={style.sataliteBackgroundGlow} width="754" height="754" viewBox="0 0 754 754" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{mixBlendMode:"overlay",}} filter="url(#filter0_f_1_13182)">
            <circle cx="377" cy="377" r="281" fill="#00FFE6" />
          </g>
          <defs>
            <filter id="filter0_f_1_13182" x="0" y="0" width="754" height="754" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="48" result="effect1_foregroundBlur_1_13182" />
            </filter>
          </defs>
        </svg>
      </div>
  )
}
