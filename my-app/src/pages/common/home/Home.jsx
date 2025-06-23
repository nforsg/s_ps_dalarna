import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css"
import studioImage from './studio_image.jpeg';
import mammaBild from './mamma_bild.jpeg'
import therapySesison from './therapy-session.png'
import olandsGatan1 from './olandsgatan1.jpg'
import falun14 from './falun_014.jpg'

function Home(){
  return (
    <div className="container">
      <div className='left-column'>
        <div className='box'>
          <h1>Samtal och psykoterapi i Dalarna AB</h1>
          <p>är en samtalsmottagning för vuxna, ungdomar, par och familjer. 
            Mottagningen ligger i Falun, på Ölandsgatan 10. Fr o m sommaren 2022 finns mottagningen enbart i Falun.</p>
        </div>
        <div className='box'>
          <h1>Samtal <u>och</u> psykoterapi</h1>
          <p>
            Samtal för vi dagligen med varandra. Det som skiljer psykoterapeutiska samtal från våra vardagliga förtroliga samtal är att psykoterapeutiska samtal kräver en metod.
            Metoden ansvarar psykoterapeuten för, likaså en förutsättningslös förståelse
            och respekt för den eller de individer som terapeuten möter. Förtroende och allians med terapeuten är viktig. Det gemensamma samtalet utgör grunden och metoden den vitala delen för förändring i psykoterapi.
          </p>
        </div>
        <div className='box'>
          <h1>Om mig</h1>
          <p>
            Jag är socionom och legitimerad psykoterapeut. Jag har en integrativ psykoterapeutisk utbildning, vilket innebär att jag arbetar både med KBT (Kognitiv Beteende Terapi) och psykodynamiska metoder. 
            Jag har också en familjeterapeutisk- och en ungdomsterapeutisk utbildning. Detta innebär att jag har möjlighet att anpassa metod efter behov.
            Jag har en lång erfarenhet inom psykiatri och socialt arbete.
          </p>
        </div>
      </div>
      <div className='right-column'>
        <div className='img-box'>
          <img src={mammaBild} alt="Terapeut" className='img__therapist img-hover'/>
          <img src={studioImage} alt="Terapi-vistelse" className='img__studio img-hover'/>
          <img src={falun14} alt="Lokal_bild1" className='img__house img-hover'/>
        </div>

      </div>

    </div>
  );
}

export default Home;