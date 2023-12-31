import React, { useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import SignInForm from "../components/Auth/signinform";
import AccountForm from "../components/Auth/accountform";
import SignupForm from "../components/Auth/signupform";
import BottomMenu from "../components/bottomMenu";
import BackButton from "../components/Auth/backButton";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";
import RightLayout3 from "../components/rightLayout3";
import RightLayout4 from "../components/rightLayout4";
import RightButtons from "../components/RightButtons";
import RightLayout5 from "../components/rightLayout5";
import RightLayout6 from "../components/rightLayout6";
import AnimationRightLayout from "../components/animationRightLayout";


 

function Auth({mainScreen,setMainScreen}:{mainScreen:number,setMainScreen:any}) {
  const [showScreen, setshowScreen] = React.useState(0);

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel over-hdn">
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen > 0 ? (
            <BackButton showScreen={showScreen} setshowScreen={setshowScreen} />
          ) : (
            <></>
          )}
        </div>
        {showScreen == 0 ? (
          <SignInForm setshowScreen={setshowScreen} />
        ) : showScreen == 1 ? (
          <AccountForm setshowScreen={setshowScreen} />
        ) :
        showScreen==3?<>
        <TestiMonials/>
        <div className="lkljdfsl-sifkmd">
          <Icons iconNumber={66}/>
          <Icons iconNumber={67}/>
            
        </div>
        <div className="dkfnmsd-awde">
          <div className="wh-100 l1">
          <VideoForm/>
          </div>
            <div className="wh-100 l2">
            <VideoForm/>  
            </div>
        </div>
        <div className="ldkf-kasmdaw"></div>
        </>:
        (
          <SignupForm />
        )}
        <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
      </div>
      <AnimationRightLayout />
    </div>
  );
}


export default Auth;
