import React from 'react'
import Immersive from './Immersive'
import Metaverse from './Metaverse'
import style from "../../styles/title.module.css"
export default function Title() {
    return (
        <div className={style.titleContainer}>
            
        <div className={style.title}>
            
            <Immersive />
            
            <Metaverse />
        </div>
        </div>

    )
}
