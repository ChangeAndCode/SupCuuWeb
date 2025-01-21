import Image from "next/image";
import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

const ProgramShowCase = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex w-full border-b-4 border-black pb-5">
          <div className="flex w-[60%] border-black border-r-4 pr-5">
            <div className="flex justify-center w-[70%]">
              <Image
                src="/CT/primera.webp"
                alt="Entrepreneur"
                width={400}
                height={400}
              />
            </div>

            <div className="flex flex-col justify-between items-center w-[30%]">
              <Image
                src="/CT/segunda.webp"
                alt="segunda"
                width={150}
                height={150}
              />
              <Image
                src="/CT/tercera.webp"
                alt="tercera"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="flex w-[40%] pl-5 pr-5">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget arcu nisl. Pellentesque aliquet fringilla mauris, at faucibus
              magna tristique a. Nulla sit amet urna ut purus dignissim mollis
              et ut lectus. In gravida, leo ac vestibulum commodo, quam diam
              consectetur justo, eu tempus purus turpis eu nibh. Donec pulvinar
              scelerisque diam, in pharetra felis accumsan non.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramShowCase;
