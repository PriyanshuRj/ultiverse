import React from 'react'
import ClickButton from './SVGs/ClickButton';
import style from "../styles/modal.module.css";

const popupImage = process.env.PUBLIC_URL + '/popupImage.png'
export default function ModalContent({ openModal }) {
    return (
        <div
            className={style.playerDIV}
            onClick={(e) => {
                console.log(e.target.classList[0])
                if (e.target.classList[0]) {
                    if (!e.target.classList[0].includes('backgroundImage')) openModal(false)
                }
                else openModal(false)

            }
            }
        >
            <svg className={style.playerBackgorundSVG} width="1704" height="546" viewBox="0 0 1704 546" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1703.5 520.447V25.559C1703.5 23.4347 1702.68 21.3968 1701.21 19.8855L1684.67 2.85387C1683.21 1.34831 1681.23 0.500002 1679.15 0.500002L24.85 0.5C22.7741 0.5 20.7882 1.3483 19.3261 2.85386L2.77992 19.8919C1.31832 21.397 0.5 23.435 0.5 25.559L0.5 520.447C0.5 522.571 1.31832 524.609 2.77992 526.115L19.3261 543.146C20.7882 544.652 22.7741 545.5 24.85 545.5L1679.16 545.5C1681.23 545.5 1683.22 544.652 1684.68 543.146L1701.22 526.115C1702.68 524.609 1703.5 522.571 1703.5 520.447Z" stroke="white" stroke-opacity="0.3" stroke-miterlimit="10" />
            </svg>
            <div  className={style.popupImage}>

            <img className={style.backgroundImage} src={popupImage} alr="popup image" />
      
       
            </div>

            <svg className={style.closeSVG} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9_81)">
                    <path d="M36.6087 1.3916H1.3916V36.6087H36.6087V1.3916Z" stroke="#00FFE6" stroke-width="1.39143" stroke-miterlimit="10" />
                    <path d="M36.6093 32.6429V36.6085H32.9637" stroke="#00FFE6" stroke-width="2.78286" stroke-miterlimit="10" />
                    <path d="M1.3916 5.35718V1.3916H5.05107" stroke="#00FFE6" stroke-width="2.78286" stroke-miterlimit="10" />
                    <path d="M32.643 1.54407H36.6086V5.20353" stroke="#00FFE6" stroke-width="2.78286" stroke-miterlimit="10" />
                    <path d="M5.35718 36.4549H1.3916V32.7954" stroke="#00FFE6" stroke-width="2.78286" stroke-miterlimit="10" />
                    <path d="M5.35791 5.35706L32.6439 32.643" stroke="#00FFE6" stroke-width="1.04357" stroke-miterlimit="10" />
                    <path d="M5.35791 32.643L32.6439 5.35706" stroke="#00FFE6" stroke-width="1.04357" stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_9_81">
                        <rect width="38" height="38" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className={style.clickButton} onClick={() => openModal(false)}>


                <ClickButton />
            </div>
        </div>
    )
}
