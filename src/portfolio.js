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
  username: "Francesca Rossi",
  title: "Hi all, I'm Francesca",
  subTitle: emoji(
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    "I'm Francesca, an enthusiastic Marketing expert 💻 dedicated to companies free to explore!"
    // I'm driven by a genuine curiosity for all things tech and a commitment to delivering high-quality, scalable software. Whether it's developing robust back-end systems, creating intuitive user interfaces, or diving deep into data analysis, I relish every opportunity to push the boundaries of what's possible in software development.
  ),
  resumeLink: "",
  // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/asdasd",
  linkedin: "https://www.linkedin.com/in/frarossi/",
  gmail: "fra.rossi.rm@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Koltin",
      fontAwesomeClassname: "fab fa-android"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Università ”La Sapienza” di Roma",
      logo: require("./assets/images/Sapienza-logo.png"),
      subHeader: "Bachelor Degree in Computer Science",
      duration: "2018 - 2021",
      desc: "Grade: 110 cum laude/110",
      descBullets: [
        "Operating Systems: Understanding of how operating systems work, including process management, memory management, file systems, and network protocols.",
        "Design, organisation, maintenance, including evolution, and management of software systems, application software, databases, information systems, client‑server networks, websites.",
        "Networking: Knowledge of computer networks, network architecture, and the ability to configure and troubleshoot network components.",
        "Web Development: Competence in building and maintaining websites and web applications using HTML, CSS, JavaScript, and web development frameworks like React, Angular, or Vue.js."
      ]
    },
    {
      schoolName: " IIS G. Marconi",
      logo: require("./assets/images/Marconi-logo.png"),
      subHeader: "Technical Diploma in Computer Science",
      duration: "2013 - 2018",
      desc: "Grade: 100/100",
      descBullets: [
        "Programming Proficiency: Students will learn programming languages such as Python, Java, C++, and more. They will gain hands-on experience in writing code, debugging, and problem-solving.",
        "Software Development: The program focuses on software development methodologies, including agile and waterfall approaches. Students learn how to design, develop, and test software applications.",
        "Database Management: Competence in working with databases, including designing and managing relational databases, querying data, and using database management systems (e.g., SQL)."
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
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Prometeia",
      companylogo: require("./assets/images/Prometeia-logo.png"),
      date: "May 2023 – Present",
      desc: "Wealth Asset Management Solutions, Customization and Scalability and Regulatory Compliance",
      descBullets: [
        "Developed and maintained high-performance, scalable software solutions in Java and Python, leveraging best practices in software engineering, design patterns, and clean code principles.",
        "Spearheaded projects to customize our wealth asset management platform to meet the unique requirements of individual clients.",
        "Ensured that our wealth asset management software adhered to evolving financial regulations and tax laws."
      ]
    },
    {
      role: "Data Engineer",
      company: "Iconsulting",
      companylogo: require("./assets/images/Iconsulting-logo.png"),
      date: "March 2022 – May 2023",
      desc: "Data Pipeline Optimization, Data Integration Expertise and Scalable Data Architecture",
      descBullets: [
        "Designed, implemented, and optimized data pipelines that processed and transformed large volumes of raw data into structured formats.",
        "Implemented ETL (Extract, Transform, Load) processes that harmonized data from various systems.",
        "Contributed to the design and implementation of scalable data architectures."
      ]
    },
    {
      role: "IT Support",
      company: "OnlyJob",
      companylogo: require("./assets/images/OnlyJob-logo.png"),
      date: "June 2018 – Sep 2020",
      desc: "Remote Work Enablement, Software Standardization and Knowledge Base Creation",
      descBullets: [
        "Led the deployment of remote work solutions, including Microsoft configurations and secure access protocols",
        "Standardized software installations across the organization, reducing software conflicts and compatibility issues.",
        "Established a comprehensive knowledge base of common IT issues and resolutions, empowering employees to troubleshoot minor problems independently."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/Gym-Logo.webp"),
      projectName: "Workout Recommendation",
      projectDesc:
        "This web app is built with Flask for backend with HTML, JavaScript, and CSS for the frontend and MongoDB for storing exercise data, uses machine learning to offer personalized workout recommendations by analyzing user preferences and a large fitness dataset with a resposive and user-friendly interface.",
      footerLink: [
        {
          name: "Try App",
          url: "https://prova.com/"
        },
        {
          name: "Go To GitHub Code",
          url: "https://github.com/prova.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Android-app.webp"),
      projectName: "Android App PanoRoma",
      projectDesc:
        "PanoRoma, an Android app developed in Kotlin, offers users a visually captivating experience to explore Rome's panoramic views. With features like detailed panorama information, search filters and an interactive map, PanoRoma provides both locals and tourists with an intuitive tool for discovering Rome's breathtaking vistas",
      footerLink: [
        {
          name: "Go To GitHub Code",
          url: "https://github.com/prova.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Withening.webp"),
      projectName: "Python - Whitening",
      projectDesc:
        "The Python Whitening Algorithm is a robust solution crafted to bolster attack and error detection across diverse applications. With meticulous development, this algorithm fortifies data streams against malicious attacks and transmission errors by imbuing them with randomness and statistical balance through whitening techniques.",
      footerLink: [
        {
          name: "Go To GitHub Code",
          url: "https://github.com/prova.com"
        }
      ]
    },
    {
      image: require("./assets/images/Notifier.webp"),
      projectName: "Python - Notifier",
      projectDesc:
        "This Python program offers a convenient solution for users to receive email notifications when specific articles become available on their chosen online marketplace. With features like continuous article monitoring, customizable settings, and direct email notifications with product links, the program caters to e-commerce enthusiasts, collectors, and price-sensitive shoppers alike",
      footerLink: [
        {
          name: "Go To GitHub Code",
          url: "https://github.com/prova.com"
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
  subtitle: "",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      subtitle:
        "Designing and deploying machine learning models, integrating cognitive services, and creating scalable AI solutions within the Azure ecosystem.",
      image: require("./assets/images/Microsoft-AI.png"),
      imageAlt: "Azure AI Engineer Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/it-it/41985899/49D246038EFA6FD0?sharingId=974DBE83B8042929"
        }
      ]
    },
    {
      title: "ISE II Reading & Writing CEFR Level B2",
      subtitle:
        "CEFR Level B2 Certification attests to strong language proficiency, validating the ability to comprehend and produce written English at an upper-intermediate level",
      image: require("./assets/images/Trinity-Logo.png"),
      imageAlt: "ISE II Reading & Writing CEFR Level B2",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1DCBX1Cs4SB5QghsjZ24Sy3fHspqcJMa8/view?usp=sharing"
        }
      ]
    },

    {
      title: "CISCO IT Essential",
      subtitle:
        "Install, configure, and troubleshoot computers and mobile devices. Identify common security threats like phishing and spoofing",
      image: require("./assets/images/Cisco-Logo.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jxZNl-NdhYloJbWX1W-mTBSiVUV_8Fb-/view?usp=sharing"
        }
      ]
    },
    {
      title: "Boolean Data Week, Tableau and Python",
      subtitle:
        "Showcasing the proficiency in handling Boolean data through a dedicated week-long program, supplemented by expertise in visual analytics using Tableau and data manipulation with Python.",
      image: require("./assets/images/Boolean-logo.png"),
      imageAlt: "Boolean Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jAv58JCe_R0q2m_-qWsl2Vj_iDdBWKsG/view?usp=sharing"
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "fra.rossi.rm@gmail.com"
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
  isHireable
};
