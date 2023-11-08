import React from "react";
import "./index.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContainer">
        <div className="footerLeft">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@projectpulse.com
          </p>
        </div>
        <div className="footerMiddle">
          <h3>Quick Links</h3>
          <ul>
            <li>Discover</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="footerRight">
          <h3>Connect with Us</h3>
          <div className="socialMediaIcons">
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2023 Project Pulse. All rights reserved.</p>
        <div className="footerLinks">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
