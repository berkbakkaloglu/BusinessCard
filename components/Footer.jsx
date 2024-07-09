import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer">
        <FontAwesomeIcon className="footer-icon" icon={faSquareTwitter} />
        <FontAwesomeIcon className="footer-icon" icon={faSquareFacebook} />
        <FontAwesomeIcon className="footer-icon" icon={faSquareInstagram} />
        <FontAwesomeIcon className="footer-icon" icon={faSquareGithub} />
        </div>
    )
}