import React, { Component } from 'react';

import "./footer.css";

import NavLogo from "../../assets/website_imgs/flat_logo.PNG"

import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


  export default class Footer extends Component {       
    render() {
      return (
      <div>
        <footer className="footer">
        <a href="https://www.facebook.com/brandsocialiteinc" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social_media_icons"/> 
        </a>
        <a href="https://www.instagram.com/brandsocialite" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social_media_icons"/> 
        </a>
        <a href="https://www.linkedin.com/company/brandsocialite" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social_media_icons"/> 
        </a>
        <div className="copyright">
          <h>
          © {new Date().getFullYear()}, Brand Socialite Inc.
          </h>
        </div>
        </footer>
      </div>
      );
  }
}