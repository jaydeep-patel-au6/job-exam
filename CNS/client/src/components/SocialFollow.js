import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="social-container mt-5">
            
            <a href="https://www.youtube.com"
                className="youtube social mx-4 text-danger">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com"
                className="facebook social mx-4 text-primary">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social mx-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com"
                className="instagram social mx-4">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}