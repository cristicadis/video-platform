import React from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import { styled } from 'styled-components';

const RightLayout3=()=>{
    return <div className="rightSideDiv kjdsfkn-ajdnkw">
    <div className="d-flex justify-content-end">
      <button className="btn no-shadow">
        <Icons iconNumber={1} />
      </button>
    </div>
    <Wrapper>
        <div className='main'>
            <h3>Recruit</h3>
            <h2>Slick video onboarding for your recruitment workflow</h2>
            <p><span>VideoInterviews</span> provide a simple solution for incorporating video into your recruitment workflow. Simply create your Asker with a set of preset or customised questions and share!</p>
        </div>
       
    </Wrapper>
    
  </div> 
}

const Wrapper = styled.section`
display: flex;
justify-content: center;


.main{
    display: flex;
    flex-direction: column;
    width: 70%;
    gap:10px;
   
h3{
    font-weight: 900;
    font-size: 14px;
    line-height: 21.8px;
    color:#7685FE4D;
    text-transform: uppercase;
} 
h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 37.5px;
    color: #000;
}   
p{
    font-weight: 400;
    font-size:12px;
    line-height: 18.68px;
    span{
        font-weight: 700;
       
    }
}
}

`
export default RightLayout3;

