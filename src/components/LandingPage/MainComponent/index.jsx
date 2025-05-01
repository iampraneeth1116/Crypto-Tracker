import React from "react";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import Button from "../../Common/Button";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import "./styles.css";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, scale: 0 , rotateY:"0deg"}}
          animate={{ opacity: 1, scale: 1 ,rotateY: "360deg"}}
          transition={{ duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard made using React JS.",
              url: "https://crypto-dashboard.com",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img src={gradient} className="gradient" alt="Gradient Background" />
        <motion.img
          src={iphone}
          className="iphone"
          alt="iPhone Mockup"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
