// app/invest-in-talent/data/profiles.ts
import { type Profile } from '../components/ProfileCarousel/types';

export const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Alan Hernández',
    role: 'CEO & CO. FOUNDER',
    company: 'OF BIOGRIP',
    image: {
      src: '/invest-in-talent/alan.webp',
      alt: 'Alan Hernandez profile picture'
    },
    description: {
      paragraph1: 'Driven by Chihuahua&apos;s entrepreneurial ecosystem, Alan Hernandez actively supports the growth of local startups and is deeply committed to social causes. His passion for using technology to restore independence to individuals with disabilities is truly inspiring.',
      paragraph2: 'Alan&apos;s impactful work has received global recognition, including awards like Best Technology at the Entrepreneurship World Cup 2022, as well as appearances at Forbes Forum 2023 and Startup Battlefield 200 in 2024.',
      paragraph3: 'With a mission to eliminate physical disability, BioGrip has developed an interface that connects muscle systems to the human body. Using artificial intelligence, it translates brain signals into complex movements, allowing people with disabilities to regain mobility.'
    }
  },
  {
    id: '2',
    name: 'María González',
    role: 'LEAD RESEARCHER',
    company: 'AT TECHSOLUTIONS',
    image: {
      src: '/invest-in-talent/alan.webp',
      alt: 'María González profile picture'
    },
    description: {
      paragraph1: 'With over a decade of experience in AI and machine learning, María has been instrumental in developing cutting-edge solutions for sustainable technology. Her work focuses on creating accessible technologies for communities in need.',
      paragraph2: 'She has led numerous successful projects and mentored dozens of young professionals in the field. Her commitment to diversity in tech has opened doors for many underrepresented groups in the industry.',
      paragraph3: 'María&apos;s work has contributed to breakthrough developments in renewable energy optimization and smart city planning, making technology work for everyone.'
    }
  }
];