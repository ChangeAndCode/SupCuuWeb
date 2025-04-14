// lib/invest-in-talent/data/index.ts
import { type Profile } from '@/types/invest-in-talent';

export const MOCK_PROFILES: Profile[] = [
  {
    id: "1",
    name: "Alan HERN\u00C1NDEZ",
    company: "BioGrip",
    role: "CEO & CO. FOUNDER",
    image: {
      src: "/invest-in-talent/alan.webp",
      alt: "Alan Hern\u00E1ndez - CEO & Co. Founder of BioGrip"
    },
    description: {
      paragraph1: "Alan Hern\u00E1ndez, driven by Chihuahua\u2019s entrepreneurial ecosystem, supports local startups and social causes. His passion for technology helps restore independence to people with disabilities.",
      paragraph2: "Alan\u2019s work has gained global recognition, with awards like Best Technology (EWC 2022) and appearances at Forbes Forum 2023 and Startup Battlefield 200 (2024).",
      paragraph3: "Biogrip aims to eliminate disability by connecting robotic systems to the human body. Using AI, it translates brain signals into movements, restoring mobility and revolutionizing healthcare, manufacturing, and remote surgery."
    }
  },
  {
    id: "2",
    name: "Alan HERN\u00C1NDEZ",
    company: "BioGrip",
    role: "CEO & CO. FOUNDER",
    image: {
      src: "/invest-in-talent/alan.webp",
      alt: "Alan Hern\u00E1ndez - CEO & Co. Founder of BioGrip"
    },
    description: {
      paragraph1: "Alan Hern\u00E1ndez, driven by Chihuahua\u2019s entrepreneurial ecosystem, supports local startups and social causes. His passion for technology helps restore independence to people with disabilities. (2)",
      paragraph2: "Alan\u2019s work has gained global recognition, with awards like Best Technology (EWC 2022) and appearances at Forbes Forum 2023 and Startup Battlefield 200 (2024).",
      paragraph3: "Biogrip aims to eliminate disability by connecting robotic systems to the human body. Using AI, it translates brain signals into movements, restoring mobility and revolutionizing healthcare, manufacturing, and remote surgery."
    }
  }
];