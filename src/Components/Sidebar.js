import React from 'react'
import style from "../styles/sidebar.module.css"
import ClickButton from './SVGs/ClickButton';
export default function Sidebar() {
    return (
        <div className={style.sidebarContainer}>
            <div className={style.sidebar}>
                <div className={style.link}>
                    <div className={style.side}>
                        <span className={style.first}></span>
                        <span className={style.second}></span>
                    </div>
                    <span className={style.linkText}>Map</span>
                </div>
                <div className={style.link}>
                    <div className={style.side}>
                        <span className={style.first}></span>
                        <span className={style.second}></span>
                    </div>
                    <span className={style.linkText}>MISSION</span>
                </div>
                <div className={style.link}>
                    <div className={style.side}>
                        <span className={style.first}></span>
                        <span className={style.second}></span>
                    </div>
                    <span className={style.linkText}>CHARACTERS</span>
                </div>
                <div className={style.link}>
                    <div className={style.side}>
                        <span className={style.first}></span>
                        <span className={style.second}></span>
                    </div>
                    <span className={style.linkText}>LOADOUTS</span>
                </div>
                <div className={style.link}>
                    <div className={style.side}>
                        <span className={style.first}></span>
                        <span className={style.second}></span>
                    </div>
                    <span className={style.linkText}>EVENTS</span>
                </div>
            </div>
            <ClickButton />
        </div>
    )
}
