import htmlCssImage from "../assets/course-html-css.svg";
import javascriptImage from "../assets/course-javascript.svg";
import reactImage from "../assets/course-react.svg";
import nodeImage from "../assets/course-node.svg";
import gitImage from "../assets/course-git.svg";

export const developerCourses = [
  {
    image: htmlCssImage,
    title: "HTML + CSS Foundations",
    description: "Craft semantic layouts, responsive designs, and polished UI details.",
    duration: "4 Weeks",
    level: "Beginner",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design", "Accessibility"],
    roadmap: [
      {
        phase: "Phase 1",
        title: "Core HTML",
        topics: [
          "Document structure & DOCTYPE declaration",
          "Semantic elements: section, article, main, nav, header, footer",
          "Headings, paragraphs, links & images",
          "Lists, tables, forms & input types"
        ]
      },
      {
        phase: "Phase 2",
        title: "CSS Fundamentals",
        topics: [
          "Selectors, specificity & the cascade",
          "Box model: margin, padding, border, outline",
          "Colors, typography & Google Fonts",
          "CSS variables & custom properties"
        ]
      },
      {
        phase: "Phase 3",
        title: "Modern Layouts",
        topics: [
          "Flexbox: flex containers, alignment & ordering",
          "CSS Grid: rows, columns, template areas",
          "Responsive design & media queries",
          "Mobile-first development workflow"
        ]
      },
      {
        phase: "Phase 4",
        title: "Polish & Deployment",
        topics: [
          "Transitions & keyframe animations",
          "BEM naming methodology",
          "Accessibility: ARIA roles, color contrast",
          "Deploying a live site with Netlify / Vercel"
        ]
      }
    ]
  },
  {
    image: javascriptImage,
    title: "JavaScript for Product Builders",
    description: "Master functions, state handling, async flows, and browser APIs.",
    duration: "6 Weeks",
    level: "Intermediate",
    skills: ["ES6+", "DOM APIs", "Async/Await", "Fetch API", "localStorage", "Debugging"],
    roadmap: [
      {
        phase: "Phase 1",
        title: "Language Essentials",
        topics: [
          "Variables: let, const, var & scoping rules",
          "Data types, operators & type coercion",
          "Functions, arrow functions & default params",
          "Scope, hoisting & closures"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Structures & ES6+",
        topics: [
          "Arrays & higher-order methods: map, filter, reduce",
          "Objects, destructuring & optional chaining",
          "Spread / rest operators",
          "Template literals, modules & import/export"
        ]
      },
      {
        phase: "Phase 3",
        title: "DOM & Browser APIs",
        topics: [
          "DOM selection & manipulation",
          "Events & event delegation patterns",
          "Form handling & client-side validation",
          "Browser storage: localStorage & sessionStorage"
        ]
      },
      {
        phase: "Phase 4",
        title: "Async JavaScript",
        topics: [
          "Callbacks & the event loop",
          "Promises & Promise chaining",
          "async / await syntax",
          "Fetch API, REST calls & error handling"
        ]
      }
    ]
  },
  {
    image: reactImage,
    title: "React Frontend Engineering",
    description: "Build reusable components and scalable single-page applications.",
    duration: "6 Weeks",
    level: "Intermediate",
    skills: ["React 18", "JSX", "Hooks", "React Router", "Context API", "Custom Hooks"],
    roadmap: [
      {
        phase: "Phase 1",
        title: "React Basics",
        topics: [
          "JSX syntax & embedding expressions",
          "Functional components & props",
          "Conditional rendering & list rendering",
          "Component composition & children props"
        ]
      },
      {
        phase: "Phase 2",
        title: "State & Events",
        topics: [
          "useState hook & state updates",
          "Event handling in React",
          "Controlled forms & input binding",
          "Lifting state up between components"
        ]
      },
      {
        phase: "Phase 3",
        title: "Side Effects & Routing",
        topics: [
          "useEffect hook & dependency array",
          "Fetching data & loading/error states",
          "React Router v6: routes, links & navigation",
          "URL params, nested routes & protected routes"
        ]
      },
      {
        phase: "Phase 4",
        title: "Advanced Patterns",
        topics: [
          "useContext for global state management",
          "Building reusable custom hooks",
          "useReducer for complex state logic",
          "Performance: React.memo, useMemo, useCallback"
        ]
      }
    ]
  },
  {
    image: nodeImage,
    title: "Node.js API Development",
    description: "Create backend services, REST APIs, and practical auth patterns.",
    duration: "6 Weeks",
    level: "Intermediate",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "bcrypt"],
    roadmap: [
      {
        phase: "Phase 1",
        title: "Node Core",
        topics: [
          "Node.js runtime, event loop & non-blocking I/O",
          "Built-in modules: fs, path, http",
          "npm ecosystem, package.json & scripts",
          "Environment variables with dotenv"
        ]
      },
      {
        phase: "Phase 2",
        title: "Express.js",
        topics: [
          "Express setup, routing & controllers",
          "Middleware pipeline & custom middleware",
          "Request / response cycle & status codes",
          "Static files, CORS & body parsing"
        ]
      },
      {
        phase: "Phase 3",
        title: "Data & Authentication",
        topics: [
          "MongoDB Atlas setup & Mongoose schemas",
          "CRUD operations with ODM",
          "JWT-based authentication flow",
          "Password hashing with bcrypt"
        ]
      },
      {
        phase: "Phase 4",
        title: "Production Ready",
        topics: [
          "Input validation & error handling middleware",
          "Rate limiting & security headers (helmet)",
          "API documentation with Swagger / Postman",
          "Deployment to Railway / Render"
        ]
      }
    ]
  },
  {
    image: gitImage,
    title: "Git + Team Collaboration",
    description: "Ship features safely with version control, branches, and PR workflows.",
    duration: "3 Weeks",
    level: "Beginner",
    skills: ["Git", "GitHub", "Branching", "Pull Requests", "GitHub Actions", "Code Review"],
    roadmap: [
      {
        phase: "Phase 1",
        title: "Git Basics",
        topics: [
          "Init, add, commit & status commands",
          "Diff, log & inspecting history",
          ".gitignore patterns & best practices",
          "Writing meaningful commit messages"
        ]
      },
      {
        phase: "Phase 2",
        title: "Branching & Merging",
        topics: [
          "Creating, switching & deleting branches",
          "Merging strategies: fast-forward & 3-way",
          "Rebasing & interactive squashing",
          "Resolving merge conflicts confidently"
        ]
      },
      {
        phase: "Phase 3",
        title: "Remote & GitHub",
        topics: [
          "Push, pull, fetch & remote tracking",
          "Forking repos & opening pull requests",
          "Code review: comments, suggestions & approvals",
          "GitHub Issues, Projects & Milestones"
        ]
      },
      {
        phase: "Phase 4",
        title: "Team Workflows",
        topics: [
          "Git Flow vs trunk-based development",
          "Branch protection rules & required reviews",
          "GitHub Actions: automated CI/CD pipelines",
          "Semantic versioning & release tags"
        ]
      }
    ]
  }
];
