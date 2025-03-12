const myProjects = [
  {
    name: "Grindpal",
    position: "Full stack Web developer",
    description:
      "Web application designed for seamless workout tracking. Log workouts effortlessly, monitor progress over time, and analyze performance through interactive charts, all in one platform.",
    image: "/grindpal.jpg",
    stack: ["Javascript", "Next.js", "Node.js", "MongoDB", "NextAuth"],
    duration: "4 months",
    company: "Personal Project",
    features: [
      "Workout Logging: Easily track sets, reps, and weights for each exercise.",
      "Progress Charts: Visualize strength progression over time using interactive graphs and track total volume.",
      "Exercise Database: Includes a list of exercises with muscles filtering options and search option.",
      "User Authentication: Secure login system using NextAuth and Oauth with Google provider.",
      "Customizable Workouts: User can Create, Edit or Delete personalized workout templates.",
      "Responsive Design: Optimized for mobile.",
    ],
    tasks: [
      "Built the entire web app from scratch using Next.js to maximize maintainability.",
      "Designed and implemented the database schema using MongoDB to efficiently store data like user workouts and progress.",
      "Created a fully functional authentication system with NextAuth to allow secure user login and registration.",
      "Set up middleware to restrict access to protected routes for authenticated users only",
      "Implemented interactive data visualization using Chart.js to help users analyze their workout trends over time.",
      "Integrated Supabase for image storage to store workout-related images.",
      "Enhanced state management by leveraging React Context API to maintain a smooth and responsive UI.",
      "Implemented a debounce function in search inputs to optimize performance when selecting exercises.",
      "Optimized API routes with Next.js API handlers to ensure fast and scalable backend performance.",
    ],
    nextSteps: [
      "Implement a guided workout session creator using a Q&A form to help users build personalized workouts.",
      "Introduce social features like sharing workouts and progress with friends.",
      "Develop a mobile app version to improve accessibility and usability.",
      "Integrate gamification to boost engagement, including rewards, challenges, and progress tracking.",
    ],
    externalLink: "https://grindpal.org/",
    internalLink: "/projects/grindpal"
  },
  {
    name: "LUO",
    position: "Full-Stack Web Developer",
    description:
      "A rental management web application that helps users track rentals, manage notifications, and visualize rental data with interactive charts.",
    image: "/luo.webp",
    stack: ["Typescript", "Next.js", "React.js", "MongoDB", "NextAuth"],
  },
  {
    name: "LSA",
    position: "Front-End Web Developer",
    description:
      "An insurance aggregator web app that streamlines contract creation, integrates a shopping cart system, and automates proposal generation via PDF export.",
    image: "/lsa.jpeg",
    stack: ["React.js", "Python", "Google Drive API"],
  },
  {
    name: "Portfolio",
    position: "Front-end Web developer",
    description:
      "An interactive showcase of my work, featuring a chatbot version of me that streams real-time responses and call booking. Includes smooth animations, projects showcase and more.",
    image: "/portfolio.jpg",
    stack: ["Typescript", "Next.js", "React.js", "AI"],
  },
];

export default myProjects;
