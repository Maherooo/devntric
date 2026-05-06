// ── NAV PAGES ─────────────────────────────────────────────────────────────
export const PAGES = ["Home", "About", "Services", "Products", "Courses", "Contact"];

export const PAGE_LABELS = {
  Home:     "Home",
  About:    "About",
  Services: "Our Services",
  Products: "Our Products",
  Courses:  "Our Courses",
  Contact:  "Contact",
};

// ── HOME CARDS ────────────────────────────────────────────────────────────
export const HOME_CARDS = [
  {
    page: "Products",
    icon: "fas fa-shopping-bag",
    bg: "cb-orange",
    ic: "ic-orange",
    title: "Our Products",
    desc: "Powerful digital products built to speed up your development journey.",
  },
  {
    page: "Courses",
    icon: "fas fa-graduation-cap",
    bg: "cb-blue",
    ic: "ic-blue",
    title: "Our Courses",
    desc: "Structured learning paths for all levels. From basics to advanced.",
  },
  {
    page: "Services",
    icon: "fas fa-headset",
    bg: "cb-pink",
    ic: "ic-pink",
    title: "Our Services",
    desc: "We build, design, and solve real-world problems with modern solutions.",
  },
  {
    page: "About",
    icon: "fas fa-users",
    bg: "cb-green",
    ic: "ic-green",
    title: "About Us",
    desc: "Learn more about our mission, vision, and the team behind Devntric.",
  },
];

// ── TEAM ──────────────────────────────────────────────────────────────────
export const TEAM = [
  { init: "M", name: "Maher Ahmed", role: "Developer",  grad: "linear-gradient(135deg,#7c3aed,#a855f7)" },
  { init: "L", name: "Lazim Khandakar",   role: "UI/UX Designer",             grad: "linear-gradient(135deg,#f97316,#ec4899)" },
  { init: "S", name: "Sabbir Khan",  role: "Product Lead",           grad: "linear-gradient(135deg,#3b82f6,#06b6d4)" },
  { init: "O", name: "Mustafiz Ahmed Ovi",   role: "Seo Expert",     grad: "linear-gradient(135deg,#22c55e,#14b8a6)" },
];

// ── STATS ─────────────────────────────────────────────────────────────────
export const STATS = [
  { num: "", label: " " },
  { num: "",  label: ""    },
  { num: "",   label: ""  },
];

// ── SERVICES ──────────────────────────────────────────────────────────────
export const SERVICES = [
  { num: "01", icon: "fas fa-code",     bg: "cb-orange", ic: "ic-orange", color: "var(--orange)",       title: "Development (App / Web)",     desc: "Custom app and web development solutions tailored to your business needs using modern technologies.", wide: false },
  { num: "02", icon: "fas fa-bullhorn", bg: "cb-blue",   ic: "ic-blue",   color: "var(--blue)",          title: "Digital Marketing",           desc: "Boost your online presence and reach the right audience with data-driven digital marketing strategies.", wide: false },
  { num: "03", icon: "fas fa-pen-nib",  bg: "cb-pink",   ic: "ic-pink",   color: "var(--pink)",          title: "UI/UX Design Service",      desc: "Creative and eye-catching designs that communicate your brand and leave a lasting impression.", wide: false },
  { num: "04", icon: "fas fa-cog",      bg: "cb-green",  ic: "ic-green",  color: "var(--green)",         title: "Software / Automation Solutions", desc: "Automate workflows and optimize processes with smart software and automation solutions.", wide: false },
  { num: "05", icon: "fas fa-headset",  bg: "cb-purple", ic: "ic-purple", color: "var(--purple-light)", title: "Customer Support Service",    desc: "Reliable and friendly support to assist your customers and keep your business running smoothly.", wide: true  },
];

// ── PRODUCTS ──────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
   // icon: "fas fa-user-check",
    bg: "cb-blue",
    ic: "ic-blue",
    borderColor: "rgba(59,130,246,.3)",
    //title: "Attendance App"
    //desc: "Smart attendance management made simple. Track, manage, and analyze attendance in real-time from anywhere.",
    features: [
     // { color: "var(--blue)", text: "Real-time Attendance Tracking" },
     // { color: "var(--blue)", text: "Reports & Analytics" },
      //{ color: "var(--blue)", text: "Easy Leave Management" },
      //{ color: "var(--blue)", text: "Secure & Cloud Based" },
    ],
  },
  {
    //icon: "fas fa-map-marker-alt",
    bg: "cb-green",
    ic: "ic-green",
    borderColor: "rgba(34,197,94,.3)",
   // title: "Tracking App",
    //desc: "Track assets, vehicles, or field activities in real-time. Get full visibility and control at your fingertips.",
    features: [
     // { color: "var(--green)", text: "Real-time GPS Tracking" },
      //{ color: "var(--green)", text: "Route History & Playback" },
      //{ color: "var(--green)", text: "Geofencing & Alerts" },
      //{ color: "var(--green)", text: "Live Notifications" },
    ],
  },
];

// ── COURSES ───────────────────────────────────────────────────────────────
export const COURSES = [
  { icon: "fas fa-code",        bg: "cb-orange", ic: "ic-orange", color: "var(--orange)",       title: "Web Development",        desc: "Learn to build modern, responsive websites from scratch.",           lessons: 15, level: "Beginner"     },
  { icon: "fas fa-mobile-alt",  bg: "cb-blue",   ic: "ic-blue",   color: "var(--blue)",          title: "App Development",        desc: "Build powerful mobile apps for Android and iOS platforms.",          lessons: 18, level: "Intermediate" },
  { icon: "fas fa-paint-brush", bg: "cb-pink",   ic: "ic-pink",   color: "var(--pink)",          title: "UI/UX Design",           desc: "Design beautiful and intuitive user experiences.",                   lessons: 12, level: "Beginner"     },
 // { icon: "fas fa-database",    bg: "cb-green",  ic: "ic-green",  color: "var(--green)",         title: "Data Science",           desc: "Analyze data and build machine learning models.",                    lessons: 20, level: "Advanced"     },
  //{ icon: "fas fa-shield-alt",  bg: "cb-purple", ic: "ic-purple", color: "var(--purple-light)", title: "Cyber Security",         desc: "Protect systems and networks from digital threats.",                 lessons: 14, level: "Intermediate" },
 // { icon: "fas fa-cloud",       bg: "cb-red",    ic: "ic-red",    color: "var(--red)",           title: "Cloud Computing",        desc: "Learn cloud services and deploy scalable solutions.",                lessons: 16, level: "Intermediate" },
  //{ icon: "fas fa-chart-line",  bg: "cb-teal",   ic: "ic-teal",   color: "var(--teal)",          title: "Digital Marketing",      desc: "Grow your brand and reach your audience online.",                    lessons: 10, level: "Beginner"     },
 { icon: null,                 bg: "cb-yellow", ic: "ic-yellow", color: "var(--yellow)",        title: "Artificial Intelligence",desc: "Explore AI concepts and build smart applications.",                  lessons: 17, level: "Advanced"     },
];

// ── CONTACT SOCIAL LINKS ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/devntric",                          cls: "sc-fb", ic: "ic-fb", icon: "fab fa-facebook-f", label: "Facebook"  },
  { href: "https://www.instagram.com/devntric",                   cls: "sc-ig", ic: "ic-ig", icon: "fab fa-instagram",  label: "Instagram" },
  { href: "https://youtube.com/@devntric",                          cls: "sc-yt", ic: "ic-yt", icon: "fab fa-youtube",    label: "YouTube"   },
  { href: "mailto:devntric@gmail.com", cls: "sc-em", ic: "ic-em", icon: "fas fa-envelope",   label: "Email Us"  },
];

// ── CONTACT SUBJECTS ──────────────────────────────────────────────────────
export const SUBJECTS = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Software / Automation",
  "Course Inquiry",
  "Product Inquiry",
  "Other",
];
