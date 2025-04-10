
export const INNOVATION_FORM_CONTENT = {
  title: "Ready to join Chihuahua's Innovation Movement?",
  fields: {
    name: {
      label: "NAME",
      required: true
    },
    specialization: {
      label: "AREAS OF SPECIALIZATION",
      required: true,
      options: ["AREA 1", "AREA 2", "AREA 3"]
    },
    topics: {
      label: "TOPICS I WANT TO STAY UPDATED ON",
      required: true,
      options: ["Topic 1", "Topic 2", "Topic 3, Topic 4"]
    },
    supportType: {
      label: "HOW WOULD YOU LIKE TO SUPPORT?",
      required: true,
      options: ["METHOD 1", "METHOD 2", "METHOD 3"]
    },
    email: {
      label: "E-MAIL",
      required: true
    },
    phone: {
      label: "PHONE",
      required: true
    }
  },
  submitStates: {
    default: "SEND",
    sending: "SENDING...",
    success: "SUCCESS",
    error: "SOMETHING WENT WRONG..."
  },
  supportInfo: [
    "PROGRAM VISIBILITY",
    "FINANCIAL SUPPORT", 
    "MENTORSHIP",
    "COMMUNICATION PLATFORMS"
  ]
};