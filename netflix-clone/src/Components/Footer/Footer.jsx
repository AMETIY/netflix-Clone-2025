import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
const faqData = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service offering a wide variety of TV shows, movies, anime, documentaries, and more."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on your device."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. Cancel online anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more."
    }
  ];
  





  return (
    <>
      <div className="footer_outer_container">
      
          <div class="footer_faq">
            <h3>Frequently Asked Questions</h3>
            <ul class="faq_list">
              <li class="faq_item">
                <div class="faq_question">
                  What is Netflix?
                  <span class="faq_toggle">➕</span>
                </div>
                <p class="faq_answer">
                  Netflix is a streaming service offering a wide variety of TV
                  shows, movies, anime, and more.
                </p>
              </li>
              <li class="faq_item">
                <div class="faq_question">
                  How much does Netflix cost?
                  <span class="faq_toggle">➕</span>
                </div>
                <p class="faq_answer">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device for a fixed monthly fee.
                </p>
              </li>
              <li class="faq_item">
                <div class="faq_question">
                  Where can I watch?
                  <span class="faq_toggle">➕</span>
                </div>
                <p class="faq_answer">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web or on your device.
                </p>
              </li>
              <li class="faq_item">
                <div class="faq_question">
                How do I cancel?
                  <span class="faq_toggle">➕</span>
                </div>
                <p class="faq_answer">
                Netflix is flexible. There are no annoying contracts and no commitments. Cancel online anytime.
                </p>
              </li>
              <li class="faq_item">
                <div class="faq_question">
                What can I watch on Netflix?
                  <span class="faq_toggle">➕</span>
                </div>
                <p class="faq_answer">
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.
                </p>
              </li>
            </ul>
          </div>
       

        


   {/* Email Subscription  */}
  <div class="footer_email">
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
    <div class="email_input">
      <input type="email" placeholder="Enter your email" />
      <button>Get Started</button>
    </div>
  </div>

   {/* Footer Links */}
  <div class="footer_links_container">
    <div class="footer_links">
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
  <div class="footer_socials">
    <span><FacebookIcon /></span>
    <span> <InstagramIcon /> </span>
    <span> <YouTubeIcon /> </span>
  </div>

  {/* Copyright  */}
  <div class="footer_copy">
    <p>© 2025 Netflix Clone | Built by Amanuel Wubneh</p>
  </div>




       
      </div>
    </>
  );
};

export default Footer;
