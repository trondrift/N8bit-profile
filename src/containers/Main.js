import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import ArtistProfileProject from "./StartupProjects/ArtistProfileProject";
import NonProfitProject from "./StartupProjects/NonProfitProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Discord from "./discord/Discord";
import Podcast from "./podcast/Podcast";
import Video from "./video/Video";
import Audio from "./audio/Audio";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Twitch from "./twitch/Twitch";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useLocation} from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const musicPath = useLocation().pathname === "/music";
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isMusicianMode, setIsMusicianMode] = useLocalStorage(
    "isMusicianMode",
    false
  );
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeProfession = () => {
    setIsMusicianMode(!isMusicianMode);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider
        value={{
          isDark: isDark,
          changeTheme: changeTheme,
          isMusicianMode: isMusicianMode || musicPath,
          changeProfession: changeProfession
        }}
      >
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            {!musicPath ? <StackProgress /> : <div></div>}
            <WorkExperience />
            <Education />
            <ArtistProfileProject />
            <StartupProject />
            {/* <NonProfitProject /> */}
            {!musicPath ? <Projects /> : <div></div>}
            {!musicPath ? <Achievement /> : <div></div>}
            {!musicPath ? <Blogs /> : <div></div>}
            <Talks />
            <Podcast />
            <Video />
            <Audio />
            {/* <Twitter /> */}
            {/*<Discord /> */}
            <Twitch />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
