import React, { useState } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import faqData from "../../assets/faqData";

const Footer = () => {
  const [isopenIndex, setIsOpenIndex] = useState(null);

  const toggleDropDown = (index) => {
    setIsOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_faq">
          <h3>Frequently Asked Questions</h3>
          <ul className="faq_list">
            {faqData?.map((item, index) => (
              <li
                key={index}
                className="faq_item"
                onClick={() => toggleDropDown(index)}
              >
                <div className="faq_question">
                  {item.question}
                  <span className="faq_toggle">
                    {isopenIndex === index ? "➖" : "➕"}
                  </span>
                </div>

                {isopenIndex === index && (
                  <p className="faq_answer">{item.answer}</p>
                )}
              </li>
            ))}
       
          </ul>
        </div>

        {/* Email Subscription  */}
        <div className="footer_email">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="email_input">
            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer_links_container">
          <div className="footer_links">
            <ul>
              <li>Questions? Contact us.</li>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
            </ul>
            <ul>
              <li>Media Center</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
            </ul>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer_socials">
          <span>
            <FacebookIcon />
          </span>
          <span>
            {" "}
            <InstagramIcon />{" "}
          </span>
          <span>
            {" "}
            <YouTubeIcon />{" "}
          </span>
        </div>

        {/* Copyright  */}
        <div className="footer_copy">
          <p>© 2025 Netflix Clone | Built by Amanuel Wubneh</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
