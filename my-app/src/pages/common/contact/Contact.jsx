import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Contact.css"
import office1 from './office1.jpeg'
import office2 from './office2.jpeg'
import { Box, Typography } from "@mui/material"
import busyImage from './busy-image.png'

function Contact(){
  return (
    <div className='container'>
      <div className='left-column-contact'>
      <Box className='contact-window' flex={1}>
        <Box 
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backgroundRepeat: "no-repeat",
            boxShadow: 5,
            borderRadius: 2,
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
            <Typography variant="h1" fontWeight="bold">Kontakt</Typography>
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
            <Typography variant="h6" fontWeight="bold"><p>Besöksadress:</p></Typography>
            <Typography variant="subtitle1" fontWeight="medium"><p>Ölandsgatan 10, Falun</p></Typography>
            <Typography variant="body1">
              1 tr upp. Parkering i kvarteret eller allmän parkering på Nybrogatan
            </Typography>
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
            <Typography variant="h6" fontWeight="bold">Telefon:</Typography>
            <Typography>070-699 12 05</Typography>
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
            <Typography variant="h6" fontWeight="bold">Mail:</Typography>
            <Typography>forsgren@samterapidalarna.se</Typography>
          </Box>
        </Box>
      </Box>

      </div>
      <div className='right-column-contact'>
        <div className='image-box-contact'>
          <img src={office1} alt="Ingång" className='office-img'/>
          <img src={office2} alt="Terapeut" className='office-img'/>
        </div>
      </div>
    </div>
  );
}

export default Contact;