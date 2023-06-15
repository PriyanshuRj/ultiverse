import React from 'react'
import style from "../styles/footer.module.css"
export default function Footer({modalIsOpen}) {
    console.log(modalIsOpen)
    return (
        <div className={`${style.footer} ${modalIsOpen ? style.footerFullWindth : undefined}`  }>
          
            <div className={style.audioVector}>
        <span className={style.audioVectorLineOne}></span>
        <span className={style.audioVectorLineTwo}></span>
        <span className={style.audioVectorLineThree}></span>
        <span className={style.audioVectorLineFour}></span>
        <span className={style.audioVectorLineFive}></span>
  

            </div>
            <div className={modalIsOpen ? style.singleLine : style.multiLine}>
                <p className={style.upperLine}>
                UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO
                </p>
                <p className={` ${modalIsOpen ? style.lowerLineModal : style.lowerLine}` }>
                CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.
                </p>
            </div>

        </div>
    )
}
