import Image from "next/image";

const communityData = {
  benefits: {
    items: [
      {
        id: "1",
        icon: "/Together/web.webp",
        title: "Strengthen Ecosystem",
        description:
          "STRENGTHEN CHIHUAHUAS ECOSYSTEM OF ENTREPRENEURSHIP AND INNOVATION",
        order: 1,
      },
      {
        id: "2",
        icon: "/Together/cohete.webp",
        title: "Support Entrepreneurs",
        description: "SUPPORT ENTREPRENEURS IN REACHING THEIR GOALS.",
        order: 2,
      },
      {
        id: "3",
        icon: "/Together/altavoz.webp",
        title: "Give Visibility",
        description:
          "GIVE VISIBILITY TO YOUR PROGRAMS OR CALLS FOR APPLICATIONS",
        order: 3,
      },
      {
        id: "4",
        icon: "/Together/grupo.webp",
        title: "Give Back",
        description: "GIVE BACK TO THE COMMUNITY THAT HAS SUPPORTED YOU.",
        order: 4,
      },
      {
        id: "5",
        icon: "/Together/foco.webp",
        title: "Provide Financial Support",
        description: "PROVIDE FINANCIAL SUPPORT FOR THE INITIATIVE.",
        order: 5,
      },
      {
        id: "6",
        icon: "/Together/mano1.webp",
        title: "Share Expertise",
        description: "SHARE YOUR EXPERTISE THROUGH MENTORSHIPS",
        order: 6,
      },
    ],
  },
};

const Grid = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center gap-y-[5rem]">
        {communityData.benefits.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center w-[290px] h-[250px] relative" 
          >
            <div className="bg-white group hover:bg-ColorPrincipal border-[.4rem] border-ColorPrincipal w-full h-full rounded-[3rem] flex flex-col justify-between transition-colors duration-300">
              <div className="absolute top-[-5rem] left-0 right-0 flex justify-center">
                <div className="icon-container p-[1rem] rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-[8rem] h-[8rem]"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="font-pragmatica text-ColorPrincipal group-hover:text-white px-[2rem] py-[3.5rem] text-[1.2rem] text-center transition-colors duration-300">
                <p className="main-Tipography">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Grid;
