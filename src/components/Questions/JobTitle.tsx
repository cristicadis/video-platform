import React, { useState } from "react";
import Icons from "../icons";

const JobTitle = ({ showMessage }: { showMessage: boolean }) => {
  const [selected,setselected] = useState(0);
    return (
      <div className="jobPositionDiv">
        <div className="kjsldk-jdansd">
          <img src={require("../../images/i10.png")} />
          <div className="kjnkodsa-jaddd">
            <div>
              <h5>Job Title</h5>
            </div>
            <div className="kjdlfksd-sdmks">
              <div className="kjdlfksd-sdmks">
                <Icons iconNumber={33} />
                <h6>Company Name </h6>
              </div>
              <div className="kjdlfksd-sdmks">
                <Icons iconNumber={34} />
                <h6>Location</h6>
                <h4>Posted 12 days ago</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          {selected>0 ? (
            <button onMouseLeave={() => setselected(0)} className={`jklsjdnsa-jdw ${selected==1?"a82":selected==2?"a83":"a84"}`}>
              <Icons iconNumber={selected==1?82:selected==2?83:84} />
              {selected==1?"Messages":selected==2?"Answers":"Questions"}
            </button>
          ) : (
            <div>
              <button onMouseEnter={()=>{
                setselected(3)
              }} className="njkajd-jendw no-shadow sjiadljsa-asdj">
                <Icons iconNumber={79}/> 
               
               </button>
               <button onMouseEnter={()=>{
                setselected(2)
              }}  className="njkajd-jendw no-shadow sjiadljsa-asdj">
                <Icons iconNumber={80}/> 
               
               </button>
               <button  onMouseEnter={()=>{
                setselected(1)
              }} className="njkajd-jendw no-shadow sjiadljsa-asdj">
               <Icons iconNumber={81}/> 
              
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default JobTitle