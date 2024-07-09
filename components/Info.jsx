import React from "react";
import Avatar from "./images/ai1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className="info">
            <img src = {Avatar} className="avatar"></img>
            <h1>Berk Bakkaloğlu</h1>
            <p className="job-desc">Frontend Developer</p>
            <p className="website">berkbakkaloglu.website</p>
            <div className="button-section">
                <button className="email-btn"><FontAwesomeIcon className="envelope" icon={faEnvelope} />Email</button>
                <button className="linked-btn"><FontAwesomeIcon className="linkedin"icon={faLinkedin} />LinkedIn</button>
            </div>

        </div>
    )
}

