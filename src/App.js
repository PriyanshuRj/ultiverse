import React, {useState} from 'react'

import style from "./app.module.css";
import BackgroundLine from './backgroundLine.js';
import Header from './Components/Header';
import Title from "./Components/Title/index"
import Sidebar from './Components/Sidebar';
import Satelite from './Components/Satelite';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
const background = process.env.PUBLIC_URL + "/background.svg";


const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  // margin : '2rem 4rem',
  overflow: 'hidden'
};
export default function App() {
  const [modalIsOpen, openModal] = useState(false);
  return (

    <div style={styles}>
      <div className={style.backgroundLines}>
        <BackgroundLine />
        <BackgroundLine />
        <BackgroundLine />
      </div>
      <Header />
      <Satelite />
     
      <Sidebar />
      <div className={style.titleVideoContainer}>

      <Title />
      <VideoPlayer openModal={openModal} modalIsOpen={modalIsOpen} />
      </div>
      <Footer modalIsOpen={modalIsOpen}/>
    </div>
  )
}
