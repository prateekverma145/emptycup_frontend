import React, { useState, useEffect } from "react";
import DesignerCard from "./DesignerCard";
import { fetchDesigners } from "../services/api";

export default function DesignerList({ showShortlisted }) {
  const [designers, setDesigners] = useState([]);
  const [shortlistedDesigners, setShortlistedDesigners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDesigners();
        setDesigners(data);
        // Optionally initialize some shortlist IDs:
        // setShortlistedDesigners(new Set(data.slice(0,2).map(d => d._id)));
      } catch (err) {
        console.error("Error fetching designers:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {
        showShortlisted ? (
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

      }
    </div>
  );
}
