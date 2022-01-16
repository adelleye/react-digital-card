import React from "react";
//import App from "../App";
//import "../style.css";
import EmailIcon from "../icons/Email-Icon.jpg";
import LinkedInIcon from "../icons/LinkedIn-Icon.jpg";
import TwitterIcon from "../icons/Twitter-Icon.jpg";
import FacebookIcon from "../icons/Facebook-Icon.jpg";
import InstagramIcon from "../icons/Instagram-Icon.jpg";
import GithubIcon from "../icons/Github-Icon.jpg";

export default function MainContent() {
  return (
    <main>
      <div className="digital-card-bg">
        <div className="digital-card">
          <div className="digital-card-img"></div>
          <div className="digital-card-main">
            <h1>Tobi Adeleye</h1>
            <h5>Frontend Developer</h5>
            <p className="website">tobiadeleye.com</p>
            <div className="digital-card-buttons">
              <button className="emailButton">
                <div className="icon-wrapper">
                  <img src={EmailIcon} alt="EmailIn" />
                </div>
                Email
              </button>
              <button className="linkedinButton">
                <div className="icon-wrapper">
                  <img
                    className="linkedinIcon"
                    src={LinkedInIcon}
                    alt="LinkedIn"
                  />
                </div>
                LinkedIn
              </button>
            </div>
            <h3>About</h3>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and I am always looking for new
              things to learn.
            </p>
            <h3>Interests</h3>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
          <div className="digital-card-footer">
            <a href="https://github.com/adelleye">
              <img className="social-links" src={GithubIcon} alt="Github" />
            </a>
            <a href="https://twitter.com/adelleye">
              <img className="social-links" src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.w3schools.com/">
              <img className="social-links" src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.w3schools.com/">
              <img
                className="social-links"
                src={InstagramIcon}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
