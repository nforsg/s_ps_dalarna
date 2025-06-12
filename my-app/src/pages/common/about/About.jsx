import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function About(){
  return (
    <div className='about'>
    <h1>Psykoterapi</h1>
      <p>Jag har försökt att på ett mycket förenklat sätt beskriva olika psykoterapeutiska arbetsmetoder för att Du som läser ska kunna få en översiktlig bild av vad en psykoterapeutisk metod innebär.</p>
      <h1>Psykodynamiskt arbetssätt</h1>
      <p>
        Psykoterapeutiska samtal som utgår från ett psykodynamiskt synsätt, innebär att individen genom samtalen lär känna sig själv och sin samvaro med andra utifrån tidiga mentala erfarenheter och hur dessa påverkat livet. Genom att öka förståelsen för och acceptansen av sig själv och de egna behoven, öppnas möjligheter till en förändring i livet.
      </p>
      <h1>KBT - Kognitiv Beteendeterapi</h1>
      <p>
        Psykoterapeutiska metoder enligt KBT innebär att individ och terapeut gemensamt undersöker hur tankar styr beteenden och känslor. Genom att gemensamt undersöka tankarnas relevans, kvalité och dominans över beteenden och därefter undersöka alternativa tankar, utvecklas förändring från dysfunktionellt beteende till en mer välfungerande tillvaro. KBT metoder innehåller en del praktiska övningar, b la så kallade exponeringar som sker stegvis. Exponeringarna sker tex inför sådant som väcker oro och som individen upplever ångestfyllt.
      </p>
      <h1>Parterapi</h1>
      <p>
        I parterapi lär sig individerna att vara närvarande lyssnande till varandra. Fokus i samtalen är respekt och förståelse för de egna och partnerns behov, svårigheter, styrkor och önskningar i relationen och hur dessa verkar för eller emot en hållbar relation. Parterapi innebär på så sätt att utvecklas tillsammans i en jämbördig relation med en balans mellan två vuxna.
      </p>
    </div>  
  );
}

export default About;