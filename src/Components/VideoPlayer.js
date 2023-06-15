import React from 'react'
import style from "../styles/videoplayer.module.css"
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import CrossSVG from './SVGs/CrossSVG';
import { styles } from './helpers/modalStyle';
const videoImage = process.env.PUBLIC_URL + "/video.png";

export default function VideoPlayer({ openModal, modalIsOpen }) {
  function closeModal() {
    openModal(false);
  }
  return (
    <div className={style.videoPlayerContainer}>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <ModalContent openModal={openModal} modalIsOpen={modalIsOpen} />
      </Modal>
      <div  >
        {/* Mask for the video player Image */}
        <div className={style.maskSVG}>
          <svg width="351" height="394" viewBox="0 0 351 394" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="clip" >
              <path d="M335.246 1.00003L284.62 1.00003C282.23 1.00003 279.936 1.94255 278.237 3.62309L257.637 23.9995C255.249 26.3616 252.025 27.6868 248.664 27.6868L116.318 27.6868C112.958 27.6868 109.733 26.3615 107.345 23.9995L88.4054 5.26537C85.6428 2.53271 81.9125 1 78.0253 1L16.6202 1C8.4729 1 1.86658 7.59858 1.86658 15.7404L1.86657 94.4813L1.86657 94.4849L1.86648 94.5319L1.8665 378.26C1.8665 386.401 8.47282 393 16.6201 393L77.5652 393C81.7421 393 85.7235 391.231 88.5211 388.132L107.307 367.321C109.725 364.642 113.167 363.113 116.778 363.113L248.204 363.113C251.815 363.113 255.257 364.642 257.675 367.321L278.334 390.207C279.939 391.985 282.224 393 284.62 393L335.246 393C343.394 393 350 386.401 350 378.26L350 282.371L350 282.335L350 15.7404C350 7.5986 343.394 1.00003 335.246 1.00003Z" stroke="url(#paint0_linear_1_13179)" strokeWidth="2" />
            </clipPath>
          </svg>
        </div>
        <img className={style.videoPlayer} src={videoImage} alt="video Image" />

      </div>
      {/* Gradiant Border for the video player Image */}
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


      {/* Play button for video player Image */}
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
      <div className={style.crossSVG} >
        <CrossSVG />
      </div>
    </div>
  )
}
