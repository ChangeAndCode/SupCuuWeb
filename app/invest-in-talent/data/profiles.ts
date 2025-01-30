// app/invest-in-talent/data/profiles.ts
import { type Profile } from '../components/ProfileCarousel/types';

export const MOCK_PROFILES: Profile[] = [
  {
     id: "1",
    name: "Alan HERNÁNDEZ",
    company: "BioGrip",
    role: "CEO & CO. FOUNDER",
    image: {
      src: "/invest-in-talent/alan.webp",
      alt: "Alan Hernández - CEO & Co. Founder of BioGrip"
    },
    description: {
      paragraph1: "Driven by Chihuahua\'s entrepreneurial ecosystem, Alan Hernández actively supports the growth of local startups and is deeply committed to social causes. His passion for using technology to restore independence to individuals with disabilities is truly inspiring.",
      paragraph2: "Alan\'s impactful work has received global recognition, including awards like Best Technology at the Entrepreneurship World Cup 2022, as well as appearances at Forbes Forum 2023 and Startup Battlefield 200 in 2024.",
      paragraph3: "With a mission to eliminate physical disability, BioGrip has developed an interface that connects robotics systems to the human body. Using artificial intelligence, it translates brain signals into complex movements, allowing people with disabilities to regain mobility. This breakthrough is not only revolutionizing healthcare but also transforming the manufacturing and remote surgery industries, bridging the gap between humans and machines."
    }
  },
  {
    id: '2',
    name: 'María González',
    role: 'LEAD RESEARCHER',
    company: 'AT TECHSOLUTIONS',
    image: {
      src: '/invest-in-talent/alan.webp',
      alt: 'Mar\'ia Gonz\'alez profile picture'
    },
    description: {
      paragraph1: 'With over a decade of experience in AI and machine learning, Maria has been instrumental in developing cutting-edge solutions for sustainable technology. Her work focuses on creating accessible technologies for communities in need.',
      paragraph2: 'She has led numerous successful projects and mentored dozens of young professionals in the field. Her commitment to diversity in tech has opened doors for many underrepresented groups in the industry.',
      paragraph3: 'Maria\'s work has contributed to breakthrough developments in renewable energy optimization and smart city planning, making technology work for everyone.'
    }
  }
];
