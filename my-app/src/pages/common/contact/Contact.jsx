import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Contact.css"
import office1 from './office1.jpeg'
import office2 from './office2.jpeg'
import olandsGatan3 from './olandsgatan3.jpg'
import { Box, Typography } from "@mui/material"
import busyImage from './busy-image.png'
import olandsGatan1 from './olandsgatan1.jpg'

function Contact(){
  return (
    <div className='container'>
      <div className='left-column-contact'>
      <Box className='contact-window' flex={1}>
        <Box 
          sx={{
            backgroundColor: 'transparent'/*'rgba(255, 255, 255, 0.5)'*/,
            backgroundRepeat: "no-repeat",
            boxShadow: 5,
            borderRadius: 0,
            p: 2
          }}
        >
          <Box
            className='box-contact' 
            sx={{ mb: 2, p: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 5}}
          >
            <h1>Kontakt</h1>
          </Box>
          <Box
            className='box-contact' 
            sx={{ mb: 2, p: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 5,
              transition: 'transform 0.3s ease',
              transitionDelay: '0.1s',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <h2>Besöksadress:</h2>
            <p>Ölandsgatan 10, Falun</p>
            <p>1 tr upp. Parkering i kvarteret eller allmän parkering på Nybrogatan</p>
          </Box>

          <Box 
            className='box-contact' 
            sx={{ mb: 2, p: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 5,
              transition: 'transform 0.3s ease',
              transitionDelay: '0.1s',
              '&:hover': {
                transform: 'scale(1.1)'
              }}}
          >
            <h2>Telefon:</h2>
            <p>070-699 12 05</p>
          </Box>

          <Box 
            className='box-contact' 
            sx={{ p: 2, backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 5,
              transition: 'transform 0.3s ease',
              transitionDelay: '0.1s',
              '&:hover': {
                transform: 'scale(1.1)'
              } }}
          >
            <h2>Mail:</h2>
            <p>forsgren@samterapidalarna.se</p>
          </Box>
        </Box>
      </Box>

      </div>
      <div className='right-column-contact'>
        <div className='image-box-contact'>
          <img src={office1} alt="Ingång" className='img__office'/>
          <img src={office2} alt="Terapeut" className='img__office'/>
          <img src={olandsGatan3} alt="Terapeut" className='img__street img-hover'/>
        </div>
      </div>
    </div>
  );
}

export default Contact;