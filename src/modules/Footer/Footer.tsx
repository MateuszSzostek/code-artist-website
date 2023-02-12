import React from "react";

import "./styles.css";

import SectionColored from "../../components/Section/Colored/SectionColored";
import CardCodeArtistTechnologies from "../../components/Card/Technologies";

import { followUsText, contactUsText } from "../../content";
import CTA from "../../components/CTA";
import Button from "../../components/Button";

import TwitterSVGIcon from "../../assets/images/vector/components/TwitterSVGIcon";
import LinkedInSVGIcon from "../../assets/images/vector/components/LinkedInSVGIcon";
import FacebookSVGIcon from "../../assets/images/vector/components/FacebookSVGIcon";
import InstagramSVGIcon from "../../assets/images/vector/components/InstagramSVGIcon";
import ButtonAppearance from "../../components/Appearance/CodeArtistButton";
import TextInput from "../../components/TextInput/TextInput";
import TextareaInput from "../../components/TextareaInput";

const Footer = () => {
  return (
    <SectionColored background="#000000">
      <footer className="footer__container flex flex-column ">
        <div className="footer__social-media flex flex-space-between">
          <div className="footer__info">
            <h2 className="text-left secondary-text-color">
              Follow <span>Us</span>
            </h2>
            <p className="w-max-820">{followUsText}</p>
          </div>
          <div className="footer__links">
            <CTA to="/">
              <TwitterSVGIcon width={64} height={64} />
            </CTA>
            <CTA to="/">
              <LinkedInSVGIcon width={64} height={64} />
            </CTA>
            <CTA to="/">
              <FacebookSVGIcon width={64} height={64} />
            </CTA>
            <CTA to="/">
              <InstagramSVGIcon width={64} height={64} />
            </CTA>
          </div>
        </div>
        <div id="contact-form" className="footer__contact">
          <h2 className="text-left secondary-text-color">
            Contact <span>Us</span>
          </h2>
          <p className="w-max-820">{contactUsText}</p>

          <form className="footer__contact-form">
            <div>
              <TextInput
                placeholder="Name"
                id="name"
                name="name"
                label="Name"
              />
              <TextInput
                placeholder="Email"
                id="email"
                name="email"
                label="Email"
              />
              <TextInput
                placeholder="Phone Number (optional)"
                id="phone"
                name="phone"
                label="Phone Number"
              />
            </div>
            <div>
              <TextareaInput
                placeholder="Message"
                id="message"
                name="message"
                label="Message"
              />
            </div>
            <div>
              <Button>
                <ButtonAppearance>SEND MESSAGE</ButtonAppearance>
              </Button>
            </div>
          </form>
        </div>
        <div className="footer__links">
          <h2 className="text-left secondary-text-color">
            Usefull <span>Links</span>
          </h2>
          <div className="footer__links-grid">
            <CTA to="/services" className="brand-text-color">
              Services
            </CTA>
            <CTA to="/case-study" className="brand-text-color">
              Case Study
            </CTA>
            <CTA to="/technologies" className="brand-text-color">
              Technologies
            </CTA>
            <CTA to="/products" className="brand-text-color">
              Products
            </CTA>
            <CTA to="/about-us" className="brand-text-color">
              About Us
            </CTA>
            <CTA to="/demos" className="brand-text-color">
              Demos
            </CTA>
            <CTA to="/tips" className="brand-text-color">
              Tips
            </CTA>
            <CTA to="/projects" className="brand-text-color">
              Projects
            </CTA>
            <CTA to="/articles" className="brand-text-color">
              Articles
            </CTA>
            <CTA to="/facebook" className="brand-text-color">
              Facebook
            </CTA>
            <CTA to="/instagram" className="brand-text-color">
              Instagram
            </CTA>
            <CTA to="/twitter" className="brand-text-color">
              Twitter
            </CTA>
            <CTA to="/linkedin" className="brand-text-color">
              LinkedIn
            </CTA>
          </div>
        </div>
      </footer>
    </SectionColored>
  );
};

export default Footer;
