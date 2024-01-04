/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import hanstechLogoAnimation from "./assets/lottie/HansTechAnimatedSplash.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: hanstechLogoAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static profile
};

const greeting = {
  username: "Nathan Hansen",
  title: "Hi, I'm Nate",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  subTitleMusic: emoji(
    "A passionate Sax player 🎵 with professional experience in the tech industry. If I'm not on stage, I'm building websites using JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1YqXXcEZJtlpmwo_oPrl-dMs_KW3N_j-wXfKxnUGksbg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  instagram: "https://www.instagram.com/natechansen/",
  github: "https://github.com/trondrift",
  linkedin: "https://www.linkedin.com/in/nate-hansen-b2853243/",
  gmail: "nhansen.dev@gmail.com",
  gitlab: "https://gitlab.com/trondrift",
  facebook: "https://www.facebook.com/hansnath/",
  medium: "https://medium.com/@trondrift",
  stackoverflow: "https://stackoverflow.com/users/19997097/trondrift",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB DESIGN AND SOFTWARE SOLUTIONS",
  subTitleMusic: "MUSICIAN / WEB DESIGNER",
  skills: [
    emoji(
      "⚡ Development for highly interactive Front end / User Interfaces for web applications and websites"
    ),
    emoji("⚡ Web design for business, non-profits, and musicians"),
    emoji("⚡ Integration of branding and ecommerce strategies")
  ],
  skillsMusic: [
    emoji(
      "⚡ Development for highly interactive Front end / User Interfaces for web and mobile applications for musicians"
    ),
    emoji("⚡ Web design for recording studios, artists, and special events"),
    emoji("⚡ Integration of branding and ecommerce strategies for bands"),
    emoji("⚡ Tech stack improvement")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "far fa-keyboard"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "squarespace",
      fontAwesomeClassname: "fab fa-squarespace"
    },
    {
      skillName: "wix",
      fontAwesomeClassname: "fab fa-wix"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Grand Valley State University",
      logo: require("./assets/images/gv2full.png"),
      subHeader: "B.S. Computer Science",
      duration: "September 2009 - April 2012",
      descBullets: [
        "Selected to participated in national programming competitions to represent the school in 2011 and 2012"
      ]
    },
    {
      schoolName: "Interlochen Arts Academy",
      logo: require("./assets/images/interlochen.png"),
      subHeader: "Saxophone Performance",
      duration: "April 2008",
      descBullets: [
        "Studied under the instruction of John Nichol and composer Frank Ticheli"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Saxophone",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Gentex Corporation",
      companylogo: require("./assets/images/gentexblack.png"),
      date: "September 2012 – Present",
      desc: "Industry-leading global automotive tech supplier that optimizes driver vision and enhances driving safety and convenience",
      descBullets: [
        "Full stack software tools",
        "Managing projects for tester architecture and traceability",
        "Web app development in React.js",
        "Full stack software solutions in C++"
      ]
    },
    {
      role: "Owner",
      company: "Hanstech LLC",
      companylogo: require("./assets/images/Hanstech-final-logo-03.png"),
      date: "May 2020 – Present",
      desc: "Software solutions and consulting for business, non-profits, recording studios, and high profile musicians",
      descBullets: ["Web Design", "Ecommerce", "Web Frameworks", "Custom Tools"]
    }
    // {
    //   role: "Webmaster / Saxophonist",
    //   company: "The Soul Syndicate",
    //   companylogo: require("./assets/images/SSLogo.png"),
    //   date: "www.thesoulsyndicate.com",
    //   desc: "The Midwest's can't miss soul-infused entertainment experience"
    // },
    // {
    //   role: "Webmaster / Saxophonist",
    //   company: "Melophobix",
    //   companylogo: require("./assets/images/melo.png"),
    //   date: "www.melophobix.com",
    //   desc: "Cage-Free Punk Funk from Grand Rapids, MI",
    //   descBullets: [
    //     "Main support for artists like Sublime, Dirty Heads, [Bob Marley &] The Wailers, Less Than Jake, and Rusted Root"
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const artistProjects = {
  title: "Web Design",
  subtitle: "FOR ARTISTS, MUSICIANS, AND CREATIVES",
  projects: [
    {
      image: require("./assets/images/DCDetourProfile.png"),
      projectName: "Danielle Cosby",
      projectDesc:
        "Official website of Danielle Cosby Musician / Music Manager / Songwriter / Creative.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://daniellecosby.com/"
        }
      ]
    },
    {
      image: require("./assets/images/WHcombo.png"),
      projectName: "Nickolas Wheeler",
      projectDesc:
        "Official website of writer and producer Nickolas Wheeler, guitarist of the All-American Rejects and Wheelhouse Studios owner.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nickolaswheeler.com/"
        }
      ]
    },
    {
      image: require("./assets/images/SSLogo.png"),
      projectName: "The Soul Syndicate",
      projectDesc:
        "Official website of The Soul Syndicate, The Midwest's can't miss soul-infused entertainment experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thesoulsyndicate.com/"
        }
      ]
    },
    {
      image: require("./assets/images/melo.png"),
      projectName: "Melophobix Music",
      projectDesc:
        "Official website of Melophobix, cage-free punk funk from Grand Rapids, MI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://melophobix.com/"
        }
      ]
    }
    // {
    //   image: require("./assets/images/HRSmall6.png"),
    //   projectName: "Hannah Rose Graves",
    //   projectDesc: "Official website of Hannah Rose Graves, Music is Medicine!",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.hannahrosegraves.net/"
    //     }
    //   ]
    // }
    // {
    //   image: require("./assets/images/geoffprofile.png"),
    //   projectName: "Geoff Hansen",
    //   projectDesc:
    //     "Official website of Geoffrey Hansen, session vocalist and music educator.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.geoffhansen.squarespace.com/"
    //     }
    //   ]
    // }
    // {
    //   image: require("./assets/images/luckless.png"),
    //   projectName: "Luckless Pedestrian",
    //   projectDesc:
    //     "Official website of Geoffrey Hansen, session vocalist and music educator.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.geoffhansen.squarespace.com/"
    //     }
    //   ]
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "",
  subtitle: "MORE PROJECTS",
  projects: [
    {
      image: require("./assets/images/cwlogo.png"),
      projectName: "Cullowheegee Farms",
      projectDesc:
        " All Natural, Handmade Soaps, Lotions, Salves, Jewelry and Crafts from our farm in the heart of the Appalachian Mountains",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cullowheegeefarms.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/augieboneslogo1.png"),
    //   projectName: "Pet Toys",
    //   projectDesc:
    //     " Sustainable, Plant-Based Pet Toys. Made with love, for the health of our pets and planet",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://nhansendev.wixsite.com/website/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/HUChristmas.png"),
      projectName: "Hark Up Music",
      projectDesc:
        "Michigan faith based talent organization that provides a diverse collection of musical programming for both private and community centered events",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://harkup.com/"
        }
      ]
    },
    {
      image: require("./assets/images/LucklesSLIPWhite.png"),
      projectName: "Luckless Pedestrian",
      projectDesc:
        " A Steely Dan Experience. An event in honor of Charlie Royce.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.luckless-pedestrian.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hansenchartssq.png"),
      projectName: "HansenCharts LLC",
      projectDesc:
        "Premium musical arrangements for special events by request.", //"Hansencharts creates unique musical ensemble arrangements for special events",
      footerLink: [
        {
          name: "Email Request",
          url: "mailto:harkup@gmail.com" //"https://hansenchartsmusic.com/"
        }
      ]
    }
    // {
    //   image: require("./assets/images/NaplesUCC.png"),
    //   projectName: "Naples United Church of Christ",
    //   projectDesc: "Naples, FL",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "" //"https://hansenchartsmusic.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Hide for now. Eventually we can separate.
const nonProfits = {
  title: "",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/MooseNewLogoCrop.webp"),
      projectName: "Moose's March",
      projectDesc:
        "Moose's March funds public awareness and supports pets & their people impacted by pet cancer that strikes over 6 million cats and 6 million dogs each year",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.moosesmarch.com/"
        }
      ]
    },
    {
      image: require("./assets/images/AAPPCrop.webp"),
      projectName: "AAPP",
      projectDesc:
        "We bring lifesaving programs to underserved communities & families to keep pets healthy and out of our sheltering system",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://aapp-pets.org/"
        }
      ]
    },
    {
      image: require("./assets/images/SavingLifeCrop.webp"),
      projectName: "Saving-Life",
      projectDesc:
        "Our innovative pet identification products and technology connect to vast ecosystem of partners and pet parents to save animal lives",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.saving-life.com/"
        }
      ]
    },
    {
      image: require("./assets/images/TitanCrop.webp"),
      projectName: "Titan Bioplastics",
      projectDesc:
        "A sustainable material Engineering company focused on plant based materials for companies seeking solutions for manufacturing and beyond",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.titanbioplastics.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Goals 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards and Some Cool Stuff that I am working towards !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First saxophonist to be selected as Google Code-in Finalist.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: ""
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developing a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Complete Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://www.gentex.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy finding useful articles that can teach others about developing cool stuff.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interfaces. It is maintained by Facebook as well as a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("A Card With Links"),

  talks: [
    {
      title: "Twitch",
      subtitle: "Share, Build, Play, Learn",
      join_url: "https://discord.com",
      register_url: "mailto:nhansen.dev@gmail.com"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const discordSection = {
  title: "Discord",
  subtitle: emoji("HIVE MIND SERVER ADMIN"),

  info: {
    title: "Nullptr",
    subtitle: "Share, Build, Play, Learn",
    join_url: "https://discord.com",
    register_url: "mailto:nhansen.dev@gmail.com",
    src: "https://discord.com/widget?id=361602048975831040&theme=dark"
  },
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcasts & Tunage 🎙️"),
  subtitle: "", //"I LOVE TO PERFORM AND TALK ABOUT MUSIC",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1336460656&color=ff5500",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149600655&color=ff5500"
  ],

  display: true // Set false to hide this section, defaults to true
};

const videoSection = {
  title: emoji("Videos"),
  subtitle: "SOME CONTENT I'VE BEEN INVOLVED WITH",

  // Please Provide with Your Podcast embeded Link
  videos: [
    "https://www.youtube.com/embed/qdorwHWehIE",
    "https://www.youtube.com/embed/vlg94RX-7mg"
  ],

  display: true // Set false to hide this section, defaults to true
};

const audioSection = {
  title: emoji("Audio"),
  subtitle: "SOME OF MY MUSIC CAN BE FOUND HERE",

  // Please Provide with Your Spotify embeded Link
  audio: [
    "https://open.spotify.com/embed/playlist/6XK349Hvh2DuAkMqb6XyML?utm_source=generator&theme=0"
    // "https://open.spotify.com/embed/track/3wD3SwqMAyrd9no1KhEXKn?utm_source=generator&theme=0",
    // "https://open.spotify.com/embed/track/04GPbiEoU75QfLTjj3EBZa?utm_source=generator",
    // "https://open.spotify.com/embed/track/5lG6SU0Jt4J50eF5Q48S1f?utm_source=generator",
    // "https://open.spotify.com/embed/track/6aR8T8ZJJ2P6qg7Cx9zspU?utm_source=generator",
    // "https://open.spotify.com/embed/track/6DzHRiMEzc8WpYTEVHjPcl?utm_source=generator",
    // "https://open.spotify.com/embed/track/2rmzeIU64k9YnTkBBfzfAe?utm_source=generator",
    // "https://open.spotify.com/embed/track/69TAsYeIAUCWC4TZHHDiPr?utm_source=generator",
    // "https://open.spotify.com/embed/track/5sHkx2mL4YcaRpMzj4ZCFi?utm_source=generator",
    // //"https://open.spotify.com/embed/track/0RAbEA1Oy5yfrSEoPZu8mX?utm_source=generator&theme=0",
    // "https://open.spotify.com/embed/track/46zmfi8fZwmri9UQdkJzt3?utm_source=generator",
    // "https://open.spotify.com/embed/track/1qJ0JpbJ9IrUQ05OTWM6oJ?utm_source=generator",
    // "https://open.spotify.com/embed/track/5zCcW1AZ3DNzV6PiyUYNX3?utm_source=generator"
  ],

  display: true // Set false to hide this section, defaults to true
};

const twitchSection = {
  title: emoji("Games 🎮"),
  subtitle: "twitch.tv/danish_live",

  // Please Provide with Your Twitch channel
  channel: ["danish_live"],

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6162098014",
  email_address: "nhansen.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "melophobixmusic", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  artistProjects,
  nonProfits,
  achievementSection,
  blogSection,
  discordSection,
  talkSection,
  podcastSection,
  videoSection,
  audioSection,
  twitchSection,
  contactInfo,
  twitterDetails,
  isHireable
};
