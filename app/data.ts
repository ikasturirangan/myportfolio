type Project = {
  name: string
  description: string
  link?: string
  video?: string
  id: string
  mediaAlt?: string
  highlights: string[]
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
  highlights: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type InstagramPost = {
  id: string
  image: string
  alt: string
  caption: string
  href: string
}

type InstagramProfile = {
  name: string
  handle: string
  bio: string
  image: string
}

type Activity = {
  id: string
  title: string
  description: string
}

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'High Speed Current Detection Circuit for GIS Flashover Detection',
    description:
      'Siemens Energy Ltd. - Built a fast-response current detection circuit for GIS flashover mitigation, improving operational efficiency and reducing downtime.',
    video: '/P1.webp',
    id: 'project-1',
    mediaAlt: 'High speed current detection circuit prototype',
    highlights: [
      'Developed a high-speed current detection circuit for GIS flashover detection.',
      'Designed and implemented a fast-response system to mitigate flashover effects.',
      'Improved operational efficiency and reduced downtime significantly.',
    ],
  },
  {
    name: 'Design and Analysis of Solar Ballast Mounting',
    description:
      'Structura Energy Pvt. Ltd. - Led development of a cost-effective, durable solar ballast mounting structure using CAD modeling, 3D printing, and FEA.',
    video: '/P2.webp',
    id: 'project-2',
    mediaAlt: 'Solar ballast mounting design model',
    highlights: [
      'Led development of a robust and efficient solar ballast mounting structure.',
      'Designed cost-effective and durable solutions for flat rooftop installations.',
      'Utilized CAD modeling, 3D printing, and FEA for design and testing.',
    ],
  },
  {
    name: 'Open Source Bio Printer Concept',
    description:
      'MGM University | Reverse Engineering and Additive Manufacturing Lab - Adapted a Voron V0 into a bio printer with a custom extrusion system, specialized nozzles, and bio-ink reservoirs.',
    video: '/P3.webp',
    id: 'project-3',
    mediaAlt: 'Open-source bio printer concept prototype',
    highlights: [
      'Used a Voron V0 as the base design for the bio printer.',
      'Configured and modified the Voron V0 to function as a bio printer.',
      'Designed a custom extrusion system for accurate bio-ink flow.',
      'Integrated specialized nozzles and bio-ink reservoirs for biological materials.',
      'Validated precision and reliability through extensive testing.',
    ],
  },
  {
    name: 'Design and Evaluation of Novel Finger Force Measurement Unit',
    description:
      'Toronto Metropolitan University - Designed a finger force measurement device using field-oriented control principles, with feasibility studies and experimental validation.',
    id: 'project-4',
    highlights: [
      'Designed a finger force measurement device using field oriented control principles.',
      'Applied design thinking methodology to develop the product from scratch.',
      'Conducted feasibility studies and experimental performance assessment.',
    ],
  },
  {
    name: 'Light to Medium Payload Delivery Quadcopter',
    description:
      'MGM University | Reverse Engineering and Additive Manufacturing Lab + Advanced Autonomous Aerial Vehicles Lab - Led the design of a lightweight quadcopter frame with a robust flight control system, achieving a 25-minute flight time.',
    video: '/p4.webp',
    id: 'project-5',
    mediaAlt: 'Light to medium payload delivery quadcopter',
    highlights: [
      'Led design and fabrication of a quadcopter for light to medium payload delivery.',
      'Engineered a lightweight yet durable frame using carbon fiber and 3D printed components.',
      'Optimized efficiency and reliability with a robust flight control system.',
      'Achieved a 25-minute flight time for delivery applications.',
    ],
  },
  {
    name: 'ICE to Electric Powertrain Conversion Analysis',
    description:
      'Mahatma Gandhi Missions Polytechnic, Aurangabad - Converted a 2011 TATA Nano from ICE to EV with a BLDC motor, 5 kWh battery, and custom adapter plates, achieving a 50 km range and 60 km/h top speed.',
    video: '/P5.webp',
    id: 'project-6',
    mediaAlt: 'ICE to electric powertrain conversion analysis',
    highlights: [
      'Led the conversion of a 2011 TATA Nano from ICE to an EV powertrain.',
      'Replaced the combustion engine with a high-torque BLDC motor and 5 kWh lithium-ion pack.',
      'Developed custom adapter plates and an electronic throttle control system.',
      'Achieved a 50 km range and 60 km/h top speed.',
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Eyemote Vision',
    title: 'Chief Product Officer',
    start: 'Jul 2023',
    end: 'Present',
    link: 'https://eyemote.vision',
    id: 'work1',
    highlights: [
      'Led cross-functional mechanical, electronics, and software teams to take a teleoperable robotic slit lamp from MVP to production prototype.',
      'Directed the design and rollout of an integrated EHR platform to streamline interoperability and clinical workflows.',
      'Managed investor, NGO, and legal stakeholder engagement to secure early-stage funding and partnerships.',
      'Oversaw iterative hardware and software testing cycles to improve performance and user experience.',
    ],
  },
  {
    company: 'Siemens Ltd. | Gas Insulated Switch-Gears',
    title: 'Engineering Intern',
    start: 'Apr 2023',
    end: 'May 2023',
    link: 'https://www.siemens.com',
    id: 'work2',
    highlights: [
      'Built an AR visualization library for 8DN8/8DN9/8DQ1 GIS to enhance onsite demos.',
      'Designed a 240 ns high-speed current detection module for localized GIS flashover.',
      'Projected to cut downtime by up to 70% and reduce maintenance costs.',
    ],
  },
  {
    company: 'Toronto Metropolitan University - Haptics and Telerobotics Lab',
    title: 'Research Intern',
    start: 'May 2022',
    end: 'Jul 2022',
    link: 'https://www.torontomu.ca',
    id: 'work3',
    highlights: [
      'Built a finger force and angle sensing device for a stroke rehabilitation study.',
      'Implemented FOC algorithms for precise tracking and control.',
      'Achieved 0.1 N force accuracy and 0.8 deg angular accuracy through testing.',
    ],
  },
  {
    company:
      'MGM University - Additive Manufacturing and Reverse Engineering Lab',
    title: 'Research Intern',
    start: 'Jan 2021',
    end: 'Mar 2022',
    link: 'https://www.mgmug.in',
    id: 'work4',
    highlights: [
      'Operated and maintained FDM 3D printers for reliable prototyping.',
      'Performed post-processing (sintering, finishing, machining, testing) to improve part performance.',
      'Evaluated prints using MSC Digimat, Simufact Additive, and Hexagon Absolute Arm 83 with RS5 laser scanner.',
    ],
  },
  {
    company: 'Dekson Castings LTD.',
    title: 'Engineering Intern',
    start: 'May 2019',
    end: 'Jun 2019',
    id: 'work5',
    highlights: [
      'Conducted metallurgical testing (hardness, tensile, spectroscopy) on cast components.',
      'Prepared and analyzed samples to study microstructure and grain morphology.',
      'Assessed strength, ductility, and corrosion resistance against relevant standards.',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why NYU',
    description: 'How NYU shaped my trajectory as an engineer and product leader',
    link: '/blog/why-nyu',
    uid: 'blog-1',
  },
  {
    title: 'Why 3D Printing Is The Next Trillion Dollar Market',
    description: 'How additive manufacturing will revolutionize industries and create massive economic opportunity',
    link: '/blog/why-3d-printing-is-next-trillion-dollar-market',
    uid: 'blog-2',
  },
  {
    title: 'Why Mechanical Engineers Should Be Product Leaders',
    description: 'The unique perspective mechanical engineers bring to building great products',
    link: '/blog/why-mechanical-engineers-should-be-product-leaders',
    uid: 'blog-3',
  },
  {
    title: 'Bioprinting: The Future of Medicine',
    description: 'How bioprinting will revolutionize healthcare and save lives',
    link: '/blog/bioprinting-the-future-of-medicine',
    uid: 'blog-4',
  },
  {
    title: 'Sustainability And The Role Of Engineering',
    description: 'Why engineers are key to solving climate change and building sustainable products',
    link: '/blog/sustainability-and-the-role-of-engineering',
    uid: 'blog-5',
  },
  {
    title: 'Responsible Use Of AI',
    description: 'Building AI systems with transparency, fairness, and accountability',
    link: '/blog/responsible-use-of-ai',
    uid: 'blog-6',
  },
  {
    title: 'How Product Development And Vibe Coding Have Empowered A New Generation Of Startup Founders',
    description: 'Why the barrier to building is lower than ever, and what it means for the future',
    link: '/blog/product-dev-and-vibe-coding-empowering-founders',
    uid: 'blog-7',
  },
  {
    title: 'Sales Solves Everything For Startup Founders',
    description:
      'Why even the best ideas fail without clear positioning, sharp ICP, and consistent founder-led sales',
    link: '/blog/sales-solves-everything-for-startup-founders',
    uid: 'blog-8',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ikasturirangan',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ikasturirangan',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ikasturirangan',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/caffeinatedchaosssss',
  },
]

export const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/caffeinatedchaosssss/'

export const INSTAGRAM_PROFILE: InstagramProfile = {
  name: 'Caffeinated Chaos',
  handle: '@caffeinatedchaosssss',
  bio: 'Open profile with project updates, social moments, and everyday activities.',
  image: '/avatar.jpeg',
}

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/0.png',
    alt: 'Engineering desk snapshot',
    caption: 'Prototype nights and build logs.',
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'ig-2',
    image: '/1.png',
    alt: 'Campus life moment',
    caption: 'Campus moments and weekend walks.',
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'ig-3',
    image: '/2.png',
    alt: 'Collaboration session',
    caption: 'Team sessions with builders and creators.',
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'ig-4',
    image: '/3.png',
    alt: 'Creative workshop setup',
    caption: 'Labs, workshops, and maker spaces.',
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'ig-5',
    image: '/4.png',
    alt: 'City snapshot',
    caption: 'City energy, coffee, and deep work.',
    href: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'ig-6',
    image: '/5.png',
    alt: 'Friends and events',
    caption: 'Events, friends, and fun side quests.',
    href: INSTAGRAM_PROFILE_URL,
  },
]

export const ACTIVITIES: Activity[] = [
  {
    id: 'activity-1',
    title: 'Maker Community',
    description:
      'I spend time in prototyping communities, sharing builds, and helping peers ship fast hardware experiments.',
  },
  {
    id: 'activity-2',
    title: 'Weekend Photo Walks',
    description:
      'I enjoy walking around the city with a camera and documenting everyday details that inspire product ideas.',
  },
  {
    id: 'activity-3',
    title: 'Build-and-Teach Sessions',
    description:
      'I run small sessions where we break down engineering concepts into practical mini-projects.',
  },
  {
    id: 'activity-4',
    title: 'Fitness and Recovery',
    description:
      'I keep a steady routine of mobility, workouts, and recovery to stay sharp for long product cycles.',
  },
]

export const EMAIL = 'ikasturirangan@gmail.com'

export const EDUCATION: Education[] = [
  {
    institution: 'New York University Tandon School of Engineering',
    degree: 'Master of Science - Mechanical Engineering (GPA: 3.8/4)',
    start: 'Aug 2025',
    end: 'May 2027',
    link: 'https://engineering.nyu.edu',
    id: 'edu1',
  },
  {
    institution:
      'MGM’s Jawaharlal Nehru Engineering College - Dr. Babasaheb Ambedkar Technological University',
    degree:
      'Bachelor of Technology - Mechanical Engineering (CGPA: 8.71/10)',
    start: 'Aug 2020',
    end: 'Aug 2023',
    link: 'https://www.jnec.org',
    id: 'edu2',
  },
  {
    institution: 'MGM’s Polytechnic, Aurangabad',
    degree:
      'Diploma in Engineering - Mechanical Engineering (Percentage: 89.90)',
    start: 'Jul 2017',
    end: 'Jul 2020',
    link: 'https://mgmpoly.org',
    id: 'edu3',
  },
]
