import React from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import { styled } from 'styled-components';
import lines from './../images/lines.png'


const RightLayout3=()=>{
    return <div className="rightSideDiv kjdsfkn-ajdnkw">
    <div className="d-flex justify-content-end">
      <button className="btn no-shadow">
        <Icons iconNumber={1} />
      </button>
    </div>
    <Wrapper>
        <div className='first-side'>
            <h3>Recruit</h3>
            <h2>Slick video onboarding for your recruitment workflow</h2>
            <p><span>VideoInterviews</span> provide a simple solution for incorporating video into your recruitment workflow. Simply create your Asker with a set of preset or customised questions and share!</p>
        </div>
        <div className='second-side'>
            <img className='lines' src={require("../images/lines.png")} alt="lines"/>
            <img className='askerpic' src={require("../images/askerpic.png")} alt="askerpic"/>
             
             <a href='#' className='facebook-img'>
                <img src={require("../images/i17.png")} alt="facebook" />
             </a>
            
            
        
        
           
            
        </div>
       
    </Wrapper>
    
  </div> 
}

const Wrapper = styled.section`
display: flex;
align-items: center;
flex-direction: column;
gap:20px;
justify-content: center;
  

.first-side{
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    width: 75%;
    gap:8px;
   
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
.second-side {
    
    height: 300px;
    position: relative;
    width: 75%;
    overflow: hidden; 
    .lines {  
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        position: absolute;   
    }
    .askerpic {   
        height: auto;
        position: absolute;
        top:50%;
        left:48%;
        transform:translate(-50%, -50%);     
    }
    .facebook-img{
        position: absolute;
        right: 20%;
        top:20%

    }
}
    
    


`
export default RightLayout3;

