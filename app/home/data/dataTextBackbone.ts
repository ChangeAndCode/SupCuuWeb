interface TextContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  emailText: string;
  email: string;
}

export const textBackboneData: TextContent[] = [
  {
    id: 0,
    title: "Hello, I'm Andres.",
    subtitle: "Director of Startup Chihuahua.",
    description: "Do you have a strategic project or are you looking to financially support the ecosystem?",
    emailText: "Let's schedule a meeting. Feel free to send us an email at",
    email: "hola@startupchihuahua.com"
  },
  {
    id: 1,
    title: "Hello, I'm Victoria.",
    subtitle: "Another Role at Startup Chihuahua.",
    description: "Do you have a strategic project or are you looking to financially support the ecosystem?",
    emailText: "Let's schedule a meeting. Feel free to send us an email at",
    email: "hola@startupchihuahua.com"
  },
  {
    id: 2,
    title: "Hello, I'm Estefania.",
    subtitle: "Another Role at Startup Chihuahua.",
    description: "Do you have a strategic project or are you looking to financially support the ecosystem?",
    emailText: "Let's schedule a meeting. Feel free to send us an email at",
    email: "hola@startupchihuahua.com"
  }
];
