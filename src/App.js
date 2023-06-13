import React from 'react'
import background from "./background.svg";
import style from "./app.module.css";
import BackgroundLine from './backgroundLine.js';
import Header from './Components/Header';
const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width:'100%',
  minHeight: '100vh',
  display: 'flex'
};
export default function App() {
  return (
    
    <div style={styles}>
      <Header />
      <div className={style.backgroundLines}>
        <BackgroundLine />
        <BackgroundLine />
        <BackgroundLine />
      </div>
    </div>
  )
}
