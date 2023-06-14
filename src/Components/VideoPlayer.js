import React, { useState } from 'react'
import style from "../styles/videoplayer.module.css"
import Modal from 'react-modal';
import ClickButton from './ClickButton';
const videoImage = process.env.PUBLIC_URL + "/video.png";
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#010101',
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    border: 'none',
    outline: 'none',
    padding: '0'
  }
}
const popupImage = process.env.PUBLIC_URL + '/popupImage.png'
export default function VideoPlayer({ openModal, modalIsOpen }) {
  function closeModal() {
    openModal(false);
  }
  return (
    <div className={style.videoPlayerContainer}>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <div
          className={style.playerDIV}
          onClick={(e) => {
            if (e.target.classList[0]) {
              if (!e.target.classList[0].includes('popupImage')) openModal(false)
            }
            else openModal(false)

          }
          }
        >
          <svg className={style.playerBackgorundSVG} width="1704" height="546" viewBox="0 0 1704 546" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1703.5 520.447V25.559C1703.5 23.4347 1702.68 21.3968 1701.21 19.8855L1684.67 2.85387C1683.21 1.34831 1681.23 0.500002 1679.15 0.500002L24.85 0.5C22.7741 0.5 20.7882 1.3483 19.3261 2.85386L2.77992 19.8919C1.31832 21.397 0.5 23.435 0.5 25.559L0.5 520.447C0.5 522.571 1.31832 524.609 2.77992 526.115L19.3261 543.146C20.7882 544.652 22.7741 545.5 24.85 545.5L1679.16 545.5C1681.23 545.5 1683.22 544.652 1684.68 543.146L1701.22 526.115C1702.68 524.609 1703.5 522.571 1703.5 520.447Z" stroke="white" stroke-opacity="0.3" stroke-miterlimit="10" />
          </svg>

          <img className={style.popupImage} src={popupImage} alr="popup image" />
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
      </Modal>
      <div  >
        <div className={style.maskSVG}>
          <svg width="351" height="394" viewBox="0 0 351 394" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="clip" >
              <path d="M335.246 1.00003L284.62 1.00003C282.23 1.00003 279.936 1.94255 278.237 3.62309L257.637 23.9995C255.249 26.3616 252.025 27.6868 248.664 27.6868L116.318 27.6868C112.958 27.6868 109.733 26.3615 107.345 23.9995L88.4054 5.26537C85.6428 2.53271 81.9125 1 78.0253 1L16.6202 1C8.4729 1 1.86658 7.59858 1.86658 15.7404L1.86657 94.4813L1.86657 94.4849L1.86648 94.5319L1.8665 378.26C1.8665 386.401 8.47282 393 16.6201 393L77.5652 393C81.7421 393 85.7235 391.231 88.5211 388.132L107.307 367.321C109.725 364.642 113.167 363.113 116.778 363.113L248.204 363.113C251.815 363.113 255.257 364.642 257.675 367.321L278.334 390.207C279.939 391.985 282.224 393 284.62 393L335.246 393C343.394 393 350 386.401 350 378.26L350 282.371L350 282.335L350 15.7404C350 7.5986 343.394 1.00003 335.246 1.00003Z" stroke="url(#paint0_linear_1_13179)" strokeWidth="2" />
            </clipPath>
          </svg>
        </div>
        <img className={style.videoPlayer} src={videoImage} alt="video Image" />

      </div>
      <svg onClick={() => openModal(true)} className={style.borderOverlay} width="351" height="394" viewBox="0 0 351 394" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M335.246 1.00003L284.62 1.00003C282.23 1.00003 279.936 1.94255 278.237 3.62309L257.637 23.9995C255.249 26.3616 252.025 27.6868 248.664 27.6868L116.318 27.6868C112.958 27.6868 109.733 26.3615 107.345 23.9995L88.4054 5.26537C85.6428 2.53271 81.9125 1 78.0253 1L16.6202 1C8.4729 1 1.86658 7.59858 1.86658 15.7404L1.86657 94.4813L1.86657 94.4849L1.86648 94.5319L1.8665 378.26C1.8665 386.401 8.47282 393 16.6201 393L77.5652 393C81.7421 393 85.7235 391.231 88.5211 388.132L107.307 367.321C109.725 364.642 113.167 363.113 116.778 363.113L248.204 363.113C251.815 363.113 255.257 364.642 257.675 367.321L278.334 390.207C279.939 391.985 282.224 393 284.62 393L335.246 393C343.394 393 350 386.401 350 378.26L350 282.371L350 282.335L350 15.7404C350 7.5986 343.394 1.00003 335.246 1.00003Z" stroke="url(#paint0_linear_1_13179)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_1_13179" x1="90.9796" y1="420.811" x2="299.625" y2="-9.00245" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="0.535192" />
            <stop offset="0.963542" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <svg className={style.playOverlay} width="105" height="104" viewBox="0 0 105 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_145_13309)">
          <circle cx="52.4684" cy="51.828" r="30.9012" fill="white" fillOpacity="0.1" />
          <ellipse cx="52.2923" cy="51.7138" rx="38.1909" ry="37.6122" fill="white" fillOpacity="0.1" />
          <ellipse cx="52.8796" cy="50.9921" rx="47.0041" ry="46.292" fill="white" fillOpacity="0.1" />
          <path d="M104.412 51.7045C104.412 79.9273 81.1789 102.822 52.5 102.822C23.8211 102.822 0.587552 79.9273 0.587552 51.7045C0.587552 23.4818 23.8211 0.587552 52.5 0.587552C81.1789 0.587552 104.412 23.4818 104.412 51.7045Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.1751" />
          <path d="M47.6297 63.2307C47.0134 63.6313 46.3898 63.6547 45.7587 63.301C45.1277 62.9473 44.8115 62.4 44.8103 61.6593V42.5243C44.8103 41.7848 45.1264 41.2375 45.7587 40.8826C46.391 40.5276 47.0147 40.551 47.6297 40.9528L62.6974 50.5203C63.252 50.8901 63.5293 51.4139 63.5293 52.0918C63.5293 52.7697 63.252 53.2935 62.6974 53.6633L47.6297 63.2307Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_b_145_13309" x="-23.5021" y="-23.5021" width="152.004" height="150.413" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.751" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_145_13309" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_145_13309" result="shape" />
          </filter>
        </defs>
      </svg>
      <svg className={style.crossSVG} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </div>
  )
}
