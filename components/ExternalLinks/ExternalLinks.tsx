"use client";

import OpenLinkButton from "@/core/ui/Button/OpenLinkButton";

function ExternalLinks() {
  return (
    <div className="absolute flex flex-row justify-center items-center right-0 z-20 md:justify-end">
      <div className="flex flex-row gap-2 top-0 md:pr-4">
        <OpenLinkButton
          url="https://github.com/o6ris"
          name="Github"
          size={22}
        />
        <OpenLinkButton
          url="https://www.linkedin.com/in/tsiry-ralambosirofo/"
          name="Linkedin"
          size={22}
        />
      </div>
    </div>
  );
}

export default ExternalLinks;
