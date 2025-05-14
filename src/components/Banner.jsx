import React from "react";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="flex justify-between items-center bg-[#E8C7C8] p-12">
      <div className="w-2/3">
        <h1 className="text-2xl">Mais do que lanches. Uma experiência!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          consectetur amet ullam. Qui cum, vero consequuntur suscipit, nesciunt
          saepe alias quibusdam officia esse magni nostrum, similique labore
          dolorum sunt quis.
        </p>
      </div>
      <div className="w-1/3 flex justify-center">
        <img src={banner} alt="Banner" className="w-80" />
      </div>
    </div>
  );
}
