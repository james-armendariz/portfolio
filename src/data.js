// Everything the page says lives here, so an updated resume only touches this file.

export const links = {
    email: 'jamesarmenda1128@gmail.com',
    phone: '678-908-7223',
    github: 'https://github.com/james-armendariz',
    linkedin: 'https://www.linkedin.com/in/james-armendariz-b04a92220',
    instagram: 'https://www.instagram.com/james_armendariz'
};

export const workIndex = [
    { name: 'Rinse', href: '#rinse', picture: 'rinse' },
    { name: 'Packet Sniffer', href: '#sniffer' },
    { name: 'Buzz Blimps', href: '#blimp' },
    { name: 'Nova', href: '#nova', picture: 'nova' },
    { name: 'Local Launch', href: '#local-launch', picture: 'locallaunch' },
    { name: 'NGCC', href: '#ngcc', picture: 'ngcc' },
    { name: 'EduAlign', href: '#edualign' },
    { name: 'CollegeDate', href: '#collegedate' },
    { name: 'Cursor Overlay', href: '#cursor-overlay' },
    { name: 'Hire Map', href: '#hire-map', picture: 'hiremap' },
    { name: 'Pipe', href: '#pipe' },
    { name: 'Data-Driven Circuitry', href: '#circuitry' }
];

export const ledger = [
    {
        id: 'nova',
        name: 'Nova',
        date: '2026',
        role: 'HackGT, front end',
        body: 'Pick the songs that matter, say how each one feels, and meet people who listen for the same reason. I built the 3D galaxy where everyone appears as a star, plus sign-up and the Messages and Profile screens, on a team of four.',
        stack: 'Next.js, Three.js, Supabase, pgvector, Gemini',
        href: 'https://song-galaxy-nu.vercel.app',
        cta: 'Open Nova'
    },
    {
        id: 'local-launch',
        name: 'Local Launch',
        date: '2026',
        role: 'Co-founder',
        body: 'A studio building custom websites for local businesses. Our own site takes the intake: a form with photo uploads stored in Cloudflare R2, running on Workers through OpenNext.',
        stack: 'Next.js, Cloudflare Workers, R2',
        href: 'https://local-launch.local-launch.workers.dev',
        cta: 'Visit Local Launch'
    },
    {
        id: 'ngcc',
        name: 'NGCC',
        date: '2026',
        role: 'Creative director, developer',
        body: 'The site for North Georgia Cameras and Cabling, a low-voltage contractor. Quote and bid-package requests go through server actions, with bid PDFs uploaded and served over signed links.',
        stack: 'Next.js, React, Tailwind, Resend',
        href: 'https://ngcc-gamma.vercel.app',
        cta: 'Visit NGCC'
    },
    {
        id: 'collegedate',
        name: 'CollegeDate',
        date: 'In progress',
        role: 'Solo build',
        body: 'A college dating app where affiliation can only be proven, never claimed. A .edu mailbox is checked against a university registry before a magic link is issued, and again when it is clicked. Sign-in and verification are done; profiles and the feed come next.',
        stack: 'Next.js, Postgres, Drizzle, Auth.js'
    },
    {
        id: 'cursor-overlay',
        name: 'Cursor Overlay',
        date: '2026',
        role: 'Solo build',
        body: 'A desktop app that draws a cursor ring and click effects across every monitor, for recording and teaching. The ring chasing your pointer on this page is ported from it. Alt+Shift+O turns it off, same as the app.',
        stack: 'Electron, Canvas',
        href: 'https://github.com/james-armendariz/Cursor-Overlay',
        cta: 'Read the source'
    },
    {
        id: 'hire-map',
        name: 'Hire Map',
        date: 'Aug to Dec 2025',
        role: 'Six-person Scrum team',
        body: 'A Django job search with role-based workflows, a Leaflet map with live radius filtering, and a five-stage drag-and-drop application tracker. Three sprints, 144 commits and 30 migrations.',
        stack: 'Django, Python, JavaScript, Leaflet',
        href: 'https://github.com/CS2340-CJLADS/HireMap',
        cta: 'Read the source'
    },
    {
        id: 'pipe',
        name: 'Pipe',
        date: 'Nov 2025',
        role: 'Solo build',
        body: 'A terminal interface for browsing the commits and branches of a Git repository.',
        stack: 'Rust, Cursive',
        href: 'https://github.com/james-armendariz/RustTUI-App',
        cta: 'Read the source'
    },
    {
        id: 'circuitry',
        name: 'Data-Driven Circuitry',
        date: 'Oct 2023',
        role: 'Student developer',
        body: 'Hardware sensors read from Python, exported to Google Sheets, and fitted with regression models to forecast trends from what they measured.',
        stack: 'Python, Pandas, Matplotlib'
    }
];

export const experience = [
    {
        role: 'Teaching Assistant',
        org: 'Georgia Institute of Technology',
        place: 'Atlanta, GA',
        dates: 'May 2026 to now',
        points: [
            'Moderate Ed Discussion, the primary technical support forum, for 600+ undergraduate, graduate and high school dual-enrollment students.',
            'Guide students through object-oriented Python, recursion, I/O, conditionals, loops and string manipulation, and hold virtual help desk sessions to build their problem solving.'
        ]
    },
    {
        role: 'Peer Tutor',
        org: 'Knack Tutoring',
        place: 'Atlanta, GA (hybrid)',
        dates: 'Feb 2026 to now',
        points: [
            '4.98 stars across 53 reviews, from 73 sessions and 74 hours of instruction with 46 Georgia Tech students.',
            'Tutor Introduction to Computing and Computer Organization & Programming, with occasional Calculus II; qualified across 7+ courses by demonstrated mastery.',
            'Adapt explanations of complex technical concepts to how each student learns.'
        ]
    },
    {
        role: 'Team Member',
        org: 'Gusto',
        place: 'Atlanta, GA',
        dates: 'May to Aug 2025',
        points: [
            'Completed orders accurately and on time through peak hours in a high-volume kitchen, and coordinated inventory and workflow across line, grill, prep and drive-thru.'
        ]
    }
];

export const education = {
    role: 'B.S. Computer Science',
    org: 'Georgia Institute of Technology',
    place: 'GPA 3.52',
    dates: 'Est. May 2028',
    points: [
        'Concentrations in Cybersecurity & Privacy and Systems & Architecture.',
        'Coursework: Design of Operating Systems, Systems & Networks, Data Structures & Algorithms, Computer Organization & Programming, Objects & Design, Human Dimensions of Cybersecurity.'
    ]
};

export const skills = [
    { label: 'Languages', items: 'Java, Python, C/C++, TypeScript, JavaScript, HTML/CSS, Assembly' },
    { label: 'Frameworks', items: 'React, React Native/Expo, Next.js, Django, FastAPI, SQLAlchemy, Pandas, scikit-learn, Matplotlib' },
    { label: 'Tools', items: 'Git/GitHub, ROS 2, PocketBase, Processor Design, Scrum/Agile, SOLID/GRASP' }
];

// The nine real states of auto_state_ in BlimpCore's CatchingBlimpStateMachine.cpp, in flight order.
export const blimpStates = [
    { id: 'searching', says: 'Yaw and hunt. A ball in view hands off to approach; once it holds enough catches, it heads for goalSearch.' },
    { id: 'approach', says: 'Close on the ball. A timeout falls back to searching, so a lost target cannot trap it here.', guard: 'bbox_area >= BALL_CATCH_TRIGGER' },
    { id: 'catching', says: 'Slow down, stop yawing, grabber open, and pull the ball in.' },
    { id: 'caught', says: 'Count the catch, then decide: another ball, or go and score.' },
    { id: 'goalSearch', says: 'Pick a random yaw direction and scan for the goal.' },
    { id: 'approachGoal', says: 'Hold the goal in frame with PID on height. Losing it falls back to goalSearch.', guard: 'bbox_area >= GOAL_SCORE_TRIGGER' },
    { id: 'scoringStart', says: 'A timed yaw and translation to line up with the goal.' },
    { id: 'shooting', says: 'Fire the ball, back away and rotate clear.' },
    { id: 'scored', says: 'Reset the catch counter and go looking for the next ball.' }
];

// Decoded on the hero wall, byte by byte. Plain resume text, nothing else.
export const wallText = `James Armendariz. Atlanta, GA. Georgia Institute of Technology, B.S. Computer Science, est. May 2028, GPA 3.52. Cybersecurity & Privacy. Systems & Architecture. Design of Operating Systems. Systems & Networks. Data Structures & Algorithms. Teaching Assistant, 600+ students. Peer Tutor, 4.98 stars across 53 reviews. Rinse: 100 PocketBase collections, 191 API routes, tenant isolation on every push. Packet Sniffer: AF_PACKET, EWMA, 225K to 414K packets per second. Blimp: 9 states, 13 transitions, ROS 2. EduAlign: 48 REST endpoints, 3,700 institutions. Java, Python, C/C++, TypeScript, JavaScript, Assembly. `;
