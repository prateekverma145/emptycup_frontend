import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { fetchDesigners } from "./services/api";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import IconFont from "./components/IconFont";
import logo from "./assets/logo.png"
import { BsSortDownAlt } from "react-icons/bs";
import { BsClipboardHeart } from "react-icons/bs";
import { BsClipboardHeartFill } from "react-icons/bs";
// import DesignerCard from "./components/DesignerCard";
import DesignerList from "./components/DesignerList";
// import React,{ useState } from "react";

export default function App() {
  
  const [showShortlisted, setShowShortlisted] = useState(false);
  


  return (
    <div className=" max-w-[360px] mx-auto  min-h-screen font-chivo overflow-y-auto overflow-x-hidden ">
     <div className=" p-2 flex justify-between items-center mb-4 border-b-[0.25px] border-linegray">
      <img src={logo} className="w-[31px] h-[31px]"></img>
      <div className="font-chivo text-lightgray text-[24px] font-bold ">EmptyCup</div>
      <HiDotsVertical className="text-richblack-100 w-[24px] h-[24px] cursor-pointer" />
     </div>
    <div className=" px-2 flex justify-between items-center gap-1 mb-4">
      <div className=" flex justify-between items-center w-1/3 gap-5">
      <IconFont text="contacts" textColor="amber-500" >
        <RiContactsBook3Line className="text-amber-500" />
      </IconFont>
      <IconFont text="contacts" textColor="darkgray">
        <FaRegImage className="text-darkgray" />
      </IconFont>
      <IconFont text="contacts" textColor="darkgray">
        <FaMapMarkerAlt  className="text-darkgray" />
      </IconFont>
      </div>
      <div className="flex justify-between items-center w-1/3 pl-8">
      <IconFont text="Shortlisted" textColor="darkgray"  onClick={() => setShowShortlisted(!showShortlisted)}>
        {showShortlisted ? (
          <BsClipboardHeartFill className="text-darkgray" />
        ) : (
          <BsClipboardHeart className="text-darkgray" />
        )}
      </IconFont>
       
      <IconFont text="Sort" textColor="darkgray">
        < BsSortDownAlt className="text-darkgray"  />
      </IconFont>
      </div>
    </div>
      
        <div>
          <DesignerList showShortlisted={showShortlisted} />
        </div>


    </div>
  );
}
