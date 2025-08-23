import { Outlet } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [0, -28],
});


function Contact() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const form = useRef()

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'service_email',
            'template_sdo8do3',
            form.current,
            'Rbm-YZ3PzAWajutRA'
         )
         .then(
            () => {
               alert('Message successfully sent!')
               window.location.reload(false)
            },
            () => {
               alert('Failed to send the message, please try again')
            }
         )
   }
   return (
      <>
         <div className="page">
            <span className="tags top-html">&lt;/html&gt;</span>
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className="container contact-page">
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                     />
                  </h1>
                  <p>
                     I'm interested in freelance opportunities, especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form below.
                  </p>
                  <div className="contact-form">
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="ok">
                           <li className="half">
                              <input placeholder="Name" type="text" name="name" required />
                           </li>
                           <li className="half">
                              <input
                                 placeholder="Email"
                                 type="email"
                                 name="email"
                                 required
                              />
                           </li>
                           <li>
                              <input
                                 placeholder="Subject"
                                 type="text"
                                 name="subject"
                                 required
                              />
                           </li>
                           <li>
                              <textarea
                                 placeholder="Message"
                                 name="message"
                                 required
                              ></textarea>
                           </li>
                           <li>
                              <input type="submit" className="flat-button" value="SEND MESSAGE!" />
                           </li>
                        </div>
                     </form>
                  </div>
               </div>
               <div className='info-map'>
                  Bhuwan
                  <br />
                  NIT Durgapur, West Bengal
                  <br />
                  India <br />
                  <br />
                  <span>
                     @:
                     <span> engbhuwansk@gmail.com</span>
                  </span>
               </div>
               <div className="map-wrap">
                  <MapContainer
  center={[23.54909, 87.29093]}
  zoom={16}
  scrollWheelZoom={false}
  style={{ height: "100%", width: "100%", borderRadius: "12px", overflow: "hidden" }}
>
  {/* Dark basemap for modern look */}
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
    subdomains="abcd"
    maxZoom={20}
  />

  {/* Marker at Hall 1, NIT Durgapur */}
  <Marker
    position={[23.54909, 87.29093]}
    icon={new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [35, 35],
      iconAnchor: [17, 34],
      popupAnchor: [0, -28],
    })}
  >
    <Popup>
      <strong>Hall 1, NIT Durgapur</strong> <br />
      My current location
    </Popup>
  </Marker>
</MapContainer>
               </div>
            </div>

            <Outlet />
            <span className="tags bottom-tags">
               &lt;/body&gt;
               <br />
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </>
   )
}

export default Contact