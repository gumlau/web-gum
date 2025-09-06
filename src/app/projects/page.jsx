import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      <mask
        id="mask0_408_134"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_408_134)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_134"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_134"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const projects = [
  {
    name: 'Lumilib: Curated Knowledge Community Platform',
    description: 'Founded and scaled knowledge curation platform serving 30,000+ active readers with daily, weekly, and monthly content delivery. Built sustainable community ecosystem with 600+ curated articles, focusing on "first-hand rather than retold, timeless rather than trending" content strategy.',
    link: { href: 'https://www.lumilib.com/main', label: 'Visit Lumilib' },
    icon: NextjsIcon,
  },
  {
    name: 'BotHub: P2P AI Chatbot Platform & Marketplace',
    description: 'Built comprehensive chatbot platform combining real-time conversation interface with P2P bot marketplace functionality. Features include multi-bot conversations, bot discovery, rating systems, and integrated payment workflows using Claude API and modern web technologies.',
    link: { href: '#', label: 'Platform Demo' },
    icon: NextjsIcon,
  },
  {
    name: 'Wego Travel Insights Dashboard',
    description: 'Led complete product lifecycle from stakeholder interviews to global deployment for enterprise strategic planning dashboard. Product successfully showcased at industry conferences and adopted company-wide, achieving 300% efficiency improvement in strategic planning.',
    link: { href: 'https://wego-strategy.vercel.app/', label: 'View Dashboard' },
    icon: NextjsIcon,
  },
  {
    name: 'AI-Powered 3D Visualization System for Ophthalmic Surgery',
    description: 'Designed system architecture balancing medical safety requirements with intuitive user experience for surgical environments. Led cross-disciplinary team coordination and delivered comprehensive technical documentation, securing 10,000 RMB innovation funding.',
    link: { href: '#', label: 'Technical Documentation' },
    icon: NextjsIcon,
  },
  {
    name: 'Next.js SEO Blog Starter Template',
    description: 'Built and deployed open-source blog template with comprehensive SEO optimization, gaining 53+ GitHub stars and community adoption. Features one-click Vercel deployment, markdown-based content management, and mobile-optimized interface using Next.js 14 and TypeScript.',
    link: { href: 'https://nextjs-seo-blog-starter.vercel.app', label: 'View Demo' },
    icon: NextjsIcon,
  },
  {
    name: 'Biomimetic AUV and Subsea Cable Recognition System',
    description: 'Developed biomimetic autonomous underwater vehicle integrated with vision-based cable detection and positioning capabilities. Created virtual underwater dataset and optimized recognition algorithms for complex subsea environments. Supervised by Academician Lin Jian, secured 15,000 RMB government funding.',
    link: { href: 'https://gumlau.github.io/RayVision/', label: 'View Project' },
    icon: NextjsIcon,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Product Experience',
  description: 'A comprehensive showcase of my product development projects, from AI platforms to community-driven applications.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Product Experience Portfolio"
      intro="From founding a knowledge curation platform serving 30,000+ readers to developing AI-powered surgical systems, here's a comprehensive showcase of my product development journey across various domains."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <project.icon />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
