import React, { useState } from "react";
import RatingStars from "./RatingStars";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsEyeSlash, BsFillBookmarkHeartFill, BsBookmarkHeart, BsExclamationCircle } from "react-icons/bs";
import Exp from "./Experience";
import IconFont from "./IconFont";

export default function DesignerCard({
  designer,
  isShortlisted,
  shortlistedDesigners,
  setShortlistedDesigners,
  color,
}) {
  const [show, setShow] = useState(isShortlisted);

  const handleShortlist = () => {
    setShow(!show);
    if (show) {
      setShortlistedDesigners((prev) => prev.filter((d) => d._id !== designer._id));
    } else {
      setShortlistedDesigners((prev) => [...prev, designer]);
    }
  }

  return (
    <div
      className="w-full h-[284px] pl-6 py-7 flex"
      style={{ backgroundColor: color }}
    >
      <div className="w-[230px] border-r border-linegray flex-col pr-3">
        <div className="text-[18px] font-bold mb-1">{designer.name}</div>
        <div className="mb-4">
          <RatingStars Review_Count={designer.rating} Star_Size={20} />
        </div>
        <div className="text-[10px] max-h-[40px] overflow-hidden leading-3 pr-3">
          {designer.description}
        </div>
        <div className="flex justify-between items-center w-[170px] my-4">
          <Exp text="Projects" textColor="black">
            <span className="text-black text-[24px] font-bold">{designer.projects}</span>
          </Exp>
          <Exp text="Years" textColor="black">
            <span className="text-black text-[24px] font-bold">{designer.years}</span>
          </Exp>
          <Exp text="Price" textColor="black">
            <span className="text-black text-[24px] font-bold">{designer.price}</span>
          </Exp>
        </div>
        <div className="flex flex-col  gap-2 mt-4">
          {designer.phoneNumbers.map((num, i) => (
            <div key={i} className="text-black text-[16px] font-chivo">
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[76px] flex flex-col text-maroon items-center gap-5">
        <IconFont text="Details" textColor="maroon">
          <FaArrowRightLong />
        </IconFont>
        <IconFont text="Hide" textColor="maroon">
          <BsEyeSlash />
        </IconFont>
        <IconFont text="Shortlisted" textColor="maroon" onClick={handleShortlist}>
          {show ? <BsFillBookmarkHeartFill /> : <BsBookmarkHeart />}
        </IconFont>
        <IconFont text="Report" textColor="maroon">
          <BsExclamationCircle />
        </IconFont>
      </div>
    </div>
  );
}
