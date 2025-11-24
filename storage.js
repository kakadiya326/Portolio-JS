export const myData = {
    name: "Kakadiya Chiranj",
    title: "Web Developer | Programmer | Designer",
    description: "Hello! I'm Kakadiya Chiranj, a passionate web developer and programmer with a knack for creating engaging digital experiences. With a strong foundation in coding and design, I strive to build innovative solutions that make a difference. Welcome to my portfolio!"
};

//Education data
export const eduData = [
    {
        eduTitle: "Master of Computer Applications ( 2024 - Pursuing)",
        uniName: "RK University, Rajkot",
        per: 8.81,
    },
    {
        eduTitle: "Bachelor of Computer Applications ( 2020 - 2023 )",
        uniName: "Saurashtra University, Rajkot",
        per: 8.00,
    },
    {
        eduTitle: "H.S.C. (12th)(2018)",
        uniName: "Shree Sarasvsti Vidhyalaya - Jarakhiya",
        per: 59.14,
    },
    {
        eduTitle: "S.S.C. (10th) (2019)",
        uniName: "Shree Sarasvsti Vidhyalaya - Jarakhiya",
        per: 59.33,
    },
];

//Skills with soft and programming data
export const skillData = {
    softSkills: [
        {
            title: "Communication Skills",
            points: [
                "Clear and effective verbal communication",
                "Ability to explain technical concepts in simple terms",
                "Strong listening and interpersonal skills"
            ]
        },
        {
            title: "Problem Solving",
            points: [
                "Able to break complex problems into smaller steps",
                "Find logical and efficient solutions",
                "Quick decision-making under pressure"
            ]
        },
        {
            title: "Team Collaboration",
            points: [
                "Works effectively in cross-functional teams",
                "Helps teammates by sharing knowledge",
                "Positive and supportive communication"
            ]
        },
        {
            title: "Time Management",
            points: [
                "Completes tasks within deadlines",
                "Balances multiple projects effectively",
                "Strong prioritization and planning"
            ]
        },
        {
            title: "Adaptability",
            points: [
                "Learns new tools and technologies quickly",
                "Handles changing project requirements smoothly",
                "Flexible in working with different environments"
            ]
        },
        {
            title: "Creativity",
            points: [
                "Creates innovative UI/UX ideas",
                "Able to think beyond standard solutions",
                "Strong sense of design and presentation"
            ]
        },
        {
            title: "Leadership",
            points: [
                "Takes responsibility for tasks",
                "Encourages and guides teammates",
                "Provides constructive feedback"
            ]
        },
        {
            title: "Attention to Detail",
            points: [
                "Writes clean and structured code",
                "Detects UI inconsistencies and fixes them",
                "Ensures project quality before delivery"
            ]
        }
    ],

    proSkills: [
        {
            title: "Frontend Development",
            points: [
                "HTML5 (Semantic and SEO-friendly markup)",
                "CSS3 (Flexbox, Grid, Animations, Media Queries)",
                "JavaScript ES6+ (DOM, Events, Async Programming)",
                "Responsive UI Development"
            ]
        },
        {
            title: "Backend Basics",
            points: [
                "Node.js fundamentals",
                "REST API structure understanding",
                "Basic Express.js routing"
            ]
        },
        {
            title: "Database Knowledge",
            points: [
                "MongoDB CRUD operations",
                "NoSQL concepts",
                "Firestore basics (for Firebase)"
            ]
        },
        {
            title: "Version Control",
            points: [
                "Git branching & merging",
                "GitHub workflow",
                "Pull requests and code reviews"
            ]
        },
        {
            title: "API Integration",
            points: [
                "Fetch API & async await",
                "Handling JSON data",
                "Working with public APIs"
            ]
        },
        {
            title: "UI/UX Understanding",
            points: [
                "Clean layout structuring",
                "Color theory & spacing",
                "Mobile-first design approach"
            ]
        },
        {
            title: "Responsive Design",
            points: [
                "Fluid layouts",
                "Breakpoints for all screen sizes",
                "Touch-friendly interfaces"
            ]
        },
        {
            title: "Tools & Technologies",
            points: [
                "VS Code",
                "Chrome DevTools",
                "Postman",
                "GitHub Desktop"
            ]
        }
    ]
};


// projects Data
export const projectData = [
    {
        id: "p01",
        title: "Netlify Clone (Landing Page)",
        shortDescription: "A simple, responsive landing page inspired by Netlify — built with semantic HTML and CSS with smooth micro-interactions and animations.",
        bullets: [
            "Responsive hero section with animated gradient and CTA",
            "Feature cards with hover flip/scale animations",
            "Pricing section with CSS-only toggle for monthly/yearly plans",
            "Accessible semantic markup and mobile-first layout",
            "Lightweight (no JS required) — animations powered by CSS keyframes & transitions"
        ],
        tech: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "CSS Animations"],
        features: [
            "Animated hero gradient + CTA pulse",
            "Reusable CSS utility classes",
            "Accessible forms (aria labels + focus states)",
            "Smooth entrance animations using `@keyframes` and `transition`",
            "Email capture form (static / placeholder for backend)"
        ],
        role: "UI/Frontend Developer",
        duration: "1 week",
        date: "2025-10-05",
        liveLink: "https://example.com/netlify-clone", // replace with your live demo
        repoLink: "https://github.com/yourusername/netlify-clone", // replace
        thumbnail: "assets/projects/netlify-clone.png",
        tags: ["landing", "animation", "static"]
    },

    {
        id: "p02",
        title: "Shopper — Full E-commerce Website",
        shortDescription: "A full-featured e-commerce platform (Shopper) with product listing, cart, checkout, auth, admin panel and payment integration — built with modern frontend + backend stack.",
        bullets: [
            "Product catalogue with filters, search, and pagination",
            "Cart system with add/edit/remove and local+server sync",
            "User authentication (signup/login), profile & order history",
            "Checkout flow with address form, order summary and mock payment integration",
            "Admin dashboard for product CRUD, order management and analytics"
        ],
        tech: [
            "HTML5",
            "CSS3 (responsive + utility classes)",
            "JavaScript (ES6+)",
            "Node.js + Express",
            "MongoDB / Firestore (or your preferred DB)",
            "Stripe (or mock payment)",
            "JWT for authentication"
        ],
        features: [
            "Search, sort and category filters",
            "Product detail page with image gallery and reviews",
            "Persistent cart (localStorage + backend when logged in)",
            "Secure auth with hashed passwords & JWT",
            "Admin CRUD for products, image upload placeholder, order status updates",
            "Order confirmation emails (mocked) and invoice generation (PDF placeholder)"
        ],
        role: "Full-Stack Developer",
        duration: "4–6 weeks",
        date: "2025-08-20",
        liveLink: "https://example.com/shopper", // replace with your demo
        repoLink: "https://github.com/yourusername/shopper-ecommerce", // replace
        thumbnail: "assets/projects/shopper.png",
        tags: ["ecommerce", "fullstack", "payments", "auth"]
    },
    {
        id: "p03",
        title: "Voice-To-Text & Text-To-Voice Tool",
        shortDescription: "A browser-based speech recognition and speech synthesis tool built using HTML, CSS, and JavaScript with real-time voice processing.",
        bullets: [
            "Real-time voice-to-text conversion using Web Speech API",
            "Text-to-speech output with adjustable voice variants",
            "Supports multiple languages and accents",
            "Clean and responsive UI layout",
            "Error-handling + mic permission detection"
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
        features: [
            "Start/stop mic recognition with a single click",
            "Voice selection dropdown (Male/Female variations)",
            "Text playback with adjustable speed",
            "Live transcription display",
            "Mobile-friendly responsive design"
        ],
        role: "Frontend Developer",
        duration: "3 days",
        date: "2025-10-10",
        liveLink: "#",
        repoLink: "#",
        thumbnail: "assets/projects/voice-tts.png",
        tags: ["javascript", "speech", "api", "tool"]
    },

    {
        id: "p04",
        title: "Flutter Food Explorer",
        shortDescription: "A modern food discovery mobile app built using Flutter and Firebase with category browsing, authentication, and clean UI animations.",
        bullets: [
            "Firebase authentication (Email/Password)",
            "Firestore-based food categories and items",
            "Interactive UI with smooth animations",
            "Light/dark mode support",
            "Search and filter functionality"
        ],
        tech: ["Flutter", "Firebase Auth", "Firestore", "Dart"],
        features: [
            "Login/Signup system with Firebase",
            "Real-time food data fetch from Firestore",
            "Hero animations and smooth transitions",
            "Category-based filtering",
            "Saved items / favorites feature"
        ],
        role: "Flutter Developer",
        duration: "2 weeks",
        date: "2025-09-18",
        liveLink: "#",
        repoLink: "#",
        thumbnail: "assets/projects/food-explorer.png",
        tags: ["flutter", "firebase", "mobile", "food"]
    },

    {
        id: "p05",
        title: "QuickBite – Food Ordering App",
        shortDescription: "A complete food ordering and delivery app built with Flutter and Firebase including cart, checkout, order tracking, and user profile.",
        bullets: [
            "Full order flow: Browse → Add to cart → Checkout",
            "Firestore real-time updates",
            "User profile and order history",
            "Address management with validation",
            "Cart sync with Firebase"
        ],
        tech: ["Flutter", "Firebase Auth", "Firestore", "Firebase Storage", "Dart"],
        features: [
            "Cart system with quantity control",
            "Order tracking with status updates",
            "Image upload for user profile",
            "Secure login & signup",
            "Past order history and reorder option"
        ],
        role: "Flutter/Firebase Developer",
        duration: "3 weeks",
        date: "2025-08-28",
        liveLink: "#",
        repoLink: "#",
        thumbnail: "assets/projects/quickbite.png",
        tags: ["flutter", "firebase", "ecommerce", "food", "mobile"]
    }
];

export const achievementData = [
    {
        title: "Certified Web Developer",
        description: "Successfully completed a comprehensive web development course, earning a certification that validates my skills in HTML, CSS, JavaScript, and responsive design",
        url: "assests/images/certificates/Screenshot 2025-10-08 175326.png",

    },
    {
        title: "Certified Web Developer",
        description: "Successfully completed a comprehensive web development course, earning a certification that validates my skills in HTML, CSS, JavaScript, and responsive design",
        url: "assests/images/certificates/Screenshot 2025-11-08 101015.png",

    },
    {
        title: "Certified Web Developer",
        description: "Successfully completed a comprehensive web development course, earning a certification that validates my skills in HTML, CSS, JavaScript, and responsive design",
        url: "assests/images/certificates/Screenshot 2025-11-08 101256.png",

    },
    {
        title: "Certified Web Developer",
        description: "Successfully completed a comprehensive web development course, earning a certification that validates my skills in HTML, CSS, JavaScript, and responsive design",
        url: "assests/images/certificates/Screenshot 2025-11-08 102351.png",

    },
    {
        title: "Certified Web Developer",
        description: "Successfully completed a comprehensive web development course, earning a certification that validates my skills in HTML, CSS, JavaScript, and responsive design",
        url: "assests/images/certificates/Screenshot 2025-11-08 102703.png",

    },
];
