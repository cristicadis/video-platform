import React, { useState } from "react";
import Icons from "../icons";
//@ts-ignore
import Flip from 'react-reveal/Flip';
const SignUpForm = () => {
  const [isAgree,setisAgree] = useState(false);

    return (
    <Flip right>
      <div className="kjjfds-janwkea">
      <div className="jhjij-sanwe jhjij-sanwe21">
        <h3>Some final details...</h3>
        <h4 className="ksajdsd-sjad">
        If you don’t have a company, just leave it blank
        </h4>

        <div className="njskakd-kawmed">
          <div className="emailRowDiv sadhasdn-we">
          <div className="jksd-kosaeknae">
              <Icons iconNumber={58} />
              <input placeholder=" Birth Date" />
            </div>
            <div className="jksd-kosaeknae active-asdkjd">
              <Icons iconNumber={12} />
              <input placeholder="Location" />
              <div className="asjdssads">
                <Icons iconNumber={78}/>
              </div>
            </div>
            <div className="jksd-kosaeknae">
              <Icons iconNumber={13} />
              <input placeholder="Company" />
            </div>
          </div>
          <div className="jdaskfjnas-ajaied">
            <div onClick={()=>{
                  setisAgree(!isAgree)
              }} className={` sandka-jwe ansks-adn ${isAgree==true?"asfajea0dwnmd":""}`}>
              <Icons iconNumber={isAgree?75:14} />
              <h5>Remember me</h5>
            </div>
            <div className="ansks-adn">
              <button className="no-shadow">Log in</button>
            </div>
          </div>
          <div className="continueBtnDiv snasdj-sawdne">
          <button    
          onClick={()=>{
              
            }} className="btn kjlsjadm-kdmsd">
              COMPLETE SIGNUP
              <Icons iconNumber={77}  />
            </button>
            
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64}/>
        </div>
    </div>
    
    </Flip>);
  };

  export default SignUpForm;