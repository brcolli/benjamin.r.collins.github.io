module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://benjamin.r.collins.github.io`,
    // Your Name
    name: 'Benjamin Collins',
    // Main Site Title
    title: `Benjamin Collins Portfolio`,
    // Description that goes under your name in main bio
    description: `Software Engineering | Big Data Engineer`,
    // Optional: Twitter account handle
    author: `@strypi_`,
    // Optional: Github account URL
    github: `https://github.com/brcolli`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/benjamin-r-collins/`,	
	// Optional: Resume link
	resume: `https://drive.google.com/file/d/1877znQ6z6iEJPdEb_UAfF8bCdm8Gv0Hl/view?usp=sharing`,
    // Content of the About Me section
    about: `Welcome to my page! I'm an experienced Software Engineer with a specialization in Data Engineering, Machine Learning, and Backend Development.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
	  {
        name: 'CrowdSync',
        description:
          'CrowdSync is a mobile app that allows users to easily discover valuable connections. We enable friction-free networking at events through an intuitive interface allowing you to quickly find and connect with the ‘right’ attendees.',
        link: 'https://github.com/CrowdSyncApp/CrowdSync',
      },
      {
        name: 'Quordata',
        description:
          'Machine learning tools to collect social data across the internet, generate sentiment analysis, and produce actionable insights.',
        link: 'https://github.com/Quordata/Quordata',
      },
      {
        name: 'Quordata-Website',
        description:
          'Frontend web application for Quordata, interfacing with a MySQL database and an AWS cloud service backend to manage data.',
        link: 'https://github.com/Quordata/Quordata-Website',
      },
      {
        name: 'CLogs',
        description:
          'A logging system to integrate with a scalable distributed system using Google Pub/Sub to subscribe and submit logs to BigQuery, through a Google Cloud Dataflow for real-time analytics.',
        link: 'https://github.com/brcolli/CLogs',
      },
      {
        name: 'StockTools',
        description:
          'Tools for stock trading and analysis. Collects stock data and uses machine learning algorithms plus backtesting to deliver strategies.',
        link: 'https://github.com/brcolli/StockTools',
      },
	  {
        name: 'SpaceSim',
        description:
          'Space simulator written in Unity. Created physics and collision detection system from scratch.',
        link: 'https://github.com/brcolli/SpaceSim',
      },
	  {
        name: 'NLP-Disaster-Tweets',
        description:
          'Natural Language Processing project. Uses tweets and machine learning to track natural disasters.',
        link: 'https://github.com/brcolli/NLP-Disaster-Tweets',
      },
	  {
        name: 'Spherical-Collision-Detection',
        description:
          'An implementation of a spherical collision detection using a broad and narrow approach. The broad approach is an example from NVIDIA\'s Spatial Subdivision implementation.',
        link: 'https://github.com/brcolli/Spherical-Collision-Detection',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
	  {
        name: 'CrowdSync',
        description: 'Chief Technology Engineer, June 2023 - March 2024',
        link: 'https://crowdsync.net/',
      },
      {
        name: 'Quordata',
        description: 'Chief Technology Engineer, June 2020 - June 2023',
        link: 'https://www.quordata.com/',
      },
      {
        name: 'The Boeing Company',
        description: 'Flight Software Engineer, September 2018 - Present',
		link: '',
      },
      {
        name: 'The Boeing Company',
        description: 'Full-Stack Developer, September 2017 - September 2018',
		link: '',
      },
      {
        name: 'University of Illinois at Urbana Champaign',
        description: 'Support Developer, September 2013 - May 2017',
		link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C++, C\#, C, Java, MATLAB, R, Haskell, SQL, HTML/CSS, Bash, Rust, JavaScript, Verilog, Ruby, Assembly (MIPS, x86)',
      },
      {
        name: 'Frameworks/Libraries',
        description: 'Kubernetes, Keras, TensorFlow, PyTorch, React, React Native, Scikit-Learn, Hadoop, SciPy',
      },
      {
        name: 'Other',
        description:
          'AWS (KMS, Cognito, DynamoDB, Lambda), NLP, Kafka, GCP, Firebase, HuggingFace Transformers, BigQuery',
      },
      {
        name: 'Databases',
        description: 'MySQL, SQLite, MongoDB, DynamoDB',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
