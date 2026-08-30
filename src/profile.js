// Single source of truth for personal details used across the site.

export const profile = {
  name: 'Tanjima Abbas Pinke',
  title: 'CSE Student | AI/ML & Research Enthusiast',
  tagline:
    'Building intelligent, explainable solutions at the intersection of AI, healthcare, and software engineering.',
  location: 'Dhaka, Bangladesh',
  email: 'pinke2305101811@diu.edu.bd',
  phone: '01793227886',
  phoneHref: '+8801793227886',
  linkedin: 'https://www.linkedin.com/in/tanjima-abbas-pinke-a2b556432',
  github: 'https://github.com/tanjimapinke',
}

// Files live in /public, so they must be prefixed with Vite's base URL
// ("/tanjima-portfolio/" in production, "/" during local development).
export const assets = {
  photo: `${import.meta.env.BASE_URL}tanjima.png`,
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
}

export const about = [
  `I am an undergraduate Computer Science and Engineering student at Daffodil International University, currently maintaining a CGPA of 3.88 out of 4.00. Most of my time outside coursework goes into machine learning: reading papers, cleaning messy datasets, and testing whether a model's decisions can actually be explained.`,
  `My focus sits at the meeting point of AI/ML, natural language processing and explainable AI, applied mainly to healthcare problems. My undergraduate thesis builds a feature-weighted risk scoring system for dengue hemorrhagic fever, and my ongoing research applies explainable ensemble learning to early epileptic seizure prediction from EEG signals. Alongside research, I work on software engineering fundamentals - databases, networks, graphics and system design - through academic projects.`,
  `I am preparing for higher studies abroad and hope to keep working in research long term, eventually in teaching and academia. I care about work that is careful, reproducible and honest about its limits.`,
]

export const careerDirection = [
  {
    title: 'AI/ML',
    body: 'Deepen my practical machine learning skills - feature engineering, ensemble methods and model evaluation - on problems where the data is imperfect and the stakes are real.',
  },
  {
    title: 'Software engineering',
    body: 'Keep building complete systems, not just notebooks: databases, backends and interfaces that other people can actually use.',
  },
  {
    title: 'Research',
    body: 'Continue working on explainable AI for healthcare, and grow into writing and reviewing research properly rather than only running experiments.',
  },
  {
    title: 'Higher studies abroad',
    body: 'Pursue a graduate degree in computer science or artificial intelligence with a research-focused supervisor and lab.',
  },
  {
    title: 'Teaching and academia',
    body: 'Longer term, I would like to teach. Explaining a concept until it becomes obvious is the part of studying I enjoy most.',
  },
]

export const achievements = [
  {
    title: 'Take Off Programming Contest - Final Round',
    term: 'Spring 2023',
    note: 'Certificate of Participation',
    certificate: '/takeof.pdf',
  },
  {
    title: 'Unlock the Algorithm Programming Contest',
    term: 'Spring 2024',
    note: 'Certificate of Appreciation',
    certificate: '/unlock.pdf',
  },
]

export const hobbies = [
  { name: 'Photography', note: 'Mostly light, streets and quiet frames.' },
  { name: 'Reading', note: 'An avid reader of novels, poems, and stories.' },
  { name: 'Portrait drawing', note: 'Graphite studies of faces and expressions.' },
  { name: 'Writing', note: 'Short reflective pieces, kept for myself.' },
]
