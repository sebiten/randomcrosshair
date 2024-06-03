import Image from "next/image";
import React from "react";

interface MemeProps {
  url: string;
  title: string;
}

const Meme: React.FC<MemeProps> = ({ url, title }) => {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className=" p-4 rounded-lg">
        <p className="text-black">{url}{title}</p>
      </div>
    </div>
  );
};

export default Meme;
