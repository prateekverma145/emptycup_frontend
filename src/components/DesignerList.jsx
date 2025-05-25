import React, { useState, useEffect } from "react";
import DesignerCard from "./DesignerCard";
import { fetchDesigners } from "../services/api";

export default function DesignerList({ showShortlisted }) {
  const [designers, setDesigners] = useState([]);
  const [shortlistedDesigners, setShortlistedDesigners] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDesigners();
        setDesigners(data);

        // Optionally initialize some shortlist IDs:
        // setShortlistedDesigners(new Set(data.slice(0,2).map(d => d._id)));
      } catch (err) {
        console.error("Error fetching designers:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
if(designers.length === 0){
  return <div className=" w-full h-[50px] font-chivo text-[20px] font-bold flex justify-center">No designers found</div>;
}
  return (
    <div className="flex flex-col">
      {
       !loading?( showShortlisted ? (
          <div className="flex flex-col ">
            {shortlistedDesigners.map((designer,index) => {
              
                return (
                  <DesignerCard
                    key={designer._id}
                    designer={designer}
                    shortlistedDesigners={shortlistedDesigners}
                    setShortlistedDesigners={setShortlistedDesigners}
                   
                    color={index % 2 === 0 ? "lightyellow" : "white"}
                  />
                );
              
            
            })}
          </div>
        ) : (
          <div className="flex flex-col ">
            {designers.map((designer,index) => {
              return (
                <DesignerCard
                  key={designer._id}
                  designer={designer}
                  shortlistedDesigners={shortlistedDesigners}
                  setShortlistedDesigners={setShortlistedDesigners}
                  color={index % 2 === 0 ? "lightyellow" : "white"}
                />
              );
            })}
          </div>
        )
):<div className=" w-full h-[50px] font-chivo text-[20px] font-bold flex justify-center">Fetching data...</div>
      }
    </div>
  );
}
