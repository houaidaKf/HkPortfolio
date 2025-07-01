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
  username: "Houaida Krifa",
  title: "Hi all, I'm Houaida",
  subTitle: emoji(
    "A passionate Backend Software Engineer 🚀 With over three years experience of building systems that actually work in production"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uoGrP7YuQq6c-3HhaQ8MuOfcOnHlEi0K/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/houaidaKf",
  linkedin: "https://www.linkedin.com/in/houaida-krifa/",
  gmail: "krifahouaida62@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE MODERN TECH STACK",
  skills: [
    emoji("⚡ Build robust and scalable RESTful APIs and backend services"),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Polytechnic School",
      logo: require("./assets/images/poly.png"),
      subHeader: "Engineering Degree in Computer Science​",
      duration: "September 2021 - June 2024",
      descBullets: ["Sousse, Tunisia"]
    },
    {
      schoolName: "Higher Institute of Technological Studies",
      logo: require("./assets/images/iset.jpeg"),
      subHeader:
        "Applied Bachelor's Degree in IT: Multimedia & Web Development​",
      duration: "September 2018 - June 2021",
      descBullets: ["Sousse, Tunisia"]
    },
    {
      schoolName: "Romana High School",
      logo: require("./assets/images/romania.jpg"),
      subHeader: "Baccalaureate in Experimental Sciences​​",
      duration: "September 2017 - June 2018",
      descBullets: ["Sousse, Tunisia"] 
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer ",
      company: "ITGATE GROUP",
      companylogo: require("./assets/images/itgate.png"),
      date: "Jan 2024 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Built/maintained shared components and backend services across multiple SaaS products",
        "Designed scalable backend architecture and database schemas.",
        "Integrated payment gateways and real-time communication features."
      ]
    },
    {
      role: "Full Stack Developer​ ",
      company: "PIXELIUM",
      companylogo: require("./assets/images/pixelium.png"),
      date: "Nov 2021 – Jun 2023",
      descBullets: [
        "Built secure and scalable systems for healthcare and education platforms",
        "Coordinated with cross-functional teams on architecture and performance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/unetp.png"),
      projectName: "UNETP",
      projectDesc: "A web app for managing private educational institutions.",
      footerLink: [
        {
          name: "Visit",
          url: "https://unetp.eu/"
        }
      ]
    },
    {
      image: require("./assets/images/payDay.png"),
      projectName: "PayDay Takaful (PDT) ",
      projectDesc:
        " A digital platform providing micro-insurance and interest-free salary loans to support workers without affecting employers.",
      footerLink: [
        {
          name: "Visit",
          url: "https://app.pdtakaful.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ahkili.png"),
      projectName: "AHKILI",
      projectDesc:
        "A web and mobile app providing psychological support with certified therapists.",
      footerLink: [
        {
          name: "Visit",
          url: "https://www.ahkili.com.tn/"
        }
      ]
    },
    {
      image: require("./assets/images/ecoshare.png"),
      projectName: "ECOSHARE",
      projectDesc:
        "A web and mobile application for school families to share daily commutes",
      footerLink: [
        {
          name: "Visit",
          url: "https://myecoshare.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/itcheck.png"),
      projectName: "ITCHECK",
      projectDesc:
        "A Mobile application linking users to experts in various fields.",
      footerLink: [
        {
          name: "Visit",
          url: "https://play.google.com/store/apps/details?id=com.itchek&hl=ln"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "ISTQB Foundation",
      subtitle:
        "Foundational certification in software testing validating core knowledge of testing principles and processes.",
      image: require("./assets/images/certif2.png"),
      imageAlt: "ISTQB Foundation",
      footerLink: []
    },
    {
      title: "Workplace Success",
      subtitle:
        "Participated in a professional training program focused on essential workplace skills, organized by EFE-Tunisie.",
      image: require("./assets/images/certif1.png"),
      imageAlt: "Workplace Success",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://brockherion.dev/blog/posts/why-i-use-nextjs/?utm_source=chatgpt.com",
      title: "Why I use Next.js",
      description:
        "A developer’s perspective on productivity wins, single-codebase simplicity, ecosystem benefits, and deployment ease."
    },
    {
      url: "https://www.ignek.com/blog/why-choose-nestjs-over-plain-node-js-for-enterprise-level-applications/?utm_source=chatgpt.com",
      title:
        "Why You Should Consider NestJS for Developing Server‑Side Applications",
      description:
        "A detailed overview of how NestJS empowers backend development with TypeScript, modular architecture, and powerful built-in features for scalability and maintainability."
    }
  ],
  display: true
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
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 53499468",
  email_address: "krifahouaida22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
