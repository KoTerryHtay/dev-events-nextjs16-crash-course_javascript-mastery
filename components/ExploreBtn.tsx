"use client";

import Image from "next/image";

export default function ExploreBtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7"
      onClick={() => console.log("click")}
    >
      <a href="#events">
        Explore Events
        <Image
          src={"/icons/arrow-down.svg"}
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
}
