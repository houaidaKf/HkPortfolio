import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import TypingAnimation from "../../components/typingAnimation/typing-animation";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark ? "dark-mode greeting-text " : "greeting-text"
                }
              >
                <TypingAnimation
                  startOnView={true}
                  className="inline-block m-0"
                >
                  Hi, I&apos;m Houaida Krifa
                </TypingAnimation>
              </h1>

              <p className="profile-desc">
                a self-taught fullstack developer, specializing in building
                scalable and efficient backend systems.
              </p>

              <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
                Sousse, Tunisia
              </span>

              <div className="d-flex align-items-baseline ">
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Resume" />
                  </a>
                )}

                <SocialMedia />
              </div>

              <div>
                <h3 className="dark-mode mt-4"> ABOUT ME</h3>
                <div className="text-sm mb-4">
                  <p>
                    I&apos;m a passionate developer with a strong interest in
                    various technology fields, including web development (with a
                    primary focus on backend systems). I&apos;m also deeply
                    intrigued by the intersection of technology and innovation.
                    With over 3 years of experience, I&apos;ve honed my skills
                    through personal projects and enjoy continuously learning
                    and exploring new technologies to expand my expertise.
                  </p>
                </div>

                <div>
                  <p>
                    I hold an Engineering degree in Computer Science from the
                    Polytechnic School of Sousse. Over the past three years, I
                    have been actively working in the field while pursuing my
                    studies, driven by a strong passion for technology and
                    problem-solving. This hands-on experience, combined with my
                    academic background, has allowed me to build solid expertise
                    in modern computer science and emerging technologies.
                  </p>
                </div>
              </div>

              {/* <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
