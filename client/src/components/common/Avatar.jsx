import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextManuVisible, setIsContextManuVisible] = useState(false);
  const [contextManuCordinates, setContextManuCordinates] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e) => {
    e.preventDefault();

    setIsContextManuVisible(true);
    setContextManuCordinates({ x: e.pageX, y: e.pageY });
  };

  return (
    <div className="flex items-center justify-center">
      {type === "sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "lg" && (
        <div className="relative h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
      )}
      {type === "xl" && (
        <div
          className="relative cursor-pointer z-0"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 z-10 ${
              hover ? "visible" : "hidden"
            }`}
            onClick={showContextMenu}
            id="context-opener"
          >
            <FaCamera
              onClick={showContextMenu}
              className="text-2xl"
              id="context-opener"
            />
            <span onClick={showContextMenu} id="context-opener">
              Change <br /> profile <br /> photo
            </span>
          </div>
          <div className="flex items-center justify-center h-60 w-60">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
