/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nathan Hansen",
  title: "Hi all, I'm Nate",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks." +
      "  I am also an active musician and have created a business around helping other musicians establish themselves on the web."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1YqXXcEZJtlpmwo_oPrl-dMs_KW3N_j-wXfKxnUGksbg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
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
  subTitle: "FULL STACK DEVELOPER / MUSICIAN WHO WANTS TO DESIGN YOUR WEBSITE",
  skills: [
    emoji(
      "⚡ Development for highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡Web design for high profile musicians, recording studios, and non-profits"
    ),
    emoji(
      "⚡ Integration of branding and ecommerce strategies into existing web sites"
    )
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
    },
    
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
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2009 - April 2012",
      descBullets: [
        "Selected out of thousands of students to participated in national programming competitions to represent the school in 2011 and 2012"
      ]
    },
    {
      schoolName: "Interlochen Arts Academy",
      logo: require("./assets/images/interlochen.png"),
      subHeader: "Saxophone Performance",
      duration: "April 2008",
      descBullets: [
        "Studied for a summer under the instruction of John Nichol and world famous composer Frank Ticheli"
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
      Stack: "Backend",
      progressPercentage: "60%"
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
        "Designing and maintaining full stack software tool solutions",
        "Managing projects for various tester architecture and traceability strategies.",
        "Web app development in React.js using Azure DevOps for deployment cycles.",
        "Full stack software tool solutions in C++."
      ]
    },
    {
      role: "Owner",
      company: "Hanstech LLC",
      companylogo: require("./assets/images/hanstechLLC2.png"),
      date: "May 2020 – Present",
      desc: "Managing websites for high profile musicians, recording studios, and non-profits"
    },
    {
      role: "Webmaster / Saxophonist",
      company: "The Soul Syndicate",
      companylogo: require("./assets/images/SSLogo.png"),
      date: "www.thesoulsyndicate.com",
      desc: "The Midwest's can't miss soul-infused entertainment experience"
    },
    {
      role: "Webmaster / Saxophonist",
      company: "Melophobix",
      companylogo: require("./assets/images/melo.png"),
      date: "www.melophobix.com",
      desc: "Cage-Free Punk Funk from Grand Rapids, MI",
      descBullets: [
        "Main support for artists like Sublime, Dirty Heads, [Bob Marley &] The Wailers, Less Than Jake, and Rusted Root"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS, NON-PROFITS, AND ARTISTS THAT I HAVE HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/DCDetourProfile.png"),
      projectName: "Danielle Cosby",
      projectDesc: "Musician / Music Manager / Songwriter / Creative",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://daniellecosby.com/"
        }
      ]
    },
    {
      image: require("./assets/images/cwlogo.webp"),
      projectName: "Cullowheegee Farms",
      projectDesc: " All Natural, Handmade Soaps, Lotions, Salves, Jewelry and Crafts from our farm in the heart of the Appalachian Mountains",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://cullowheegeefarms.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/HULogo.png"),
      projectName: "Hark Up",
      projectDesc: "Michigan faith based talent organization that provides a diverse collection of musical programming well suited for both private and community centered events year round",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://harkup.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
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
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
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
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
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
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MUSIC AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "nhansen.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
