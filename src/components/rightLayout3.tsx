import React from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import { styled } from 'styled-components';
import lines from './../images/lines.png'
import Wrapper from '../css/rightLayout3';

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
            <div className='container'>
                <img className='lines' src={require("../images/lines.svg").default} alt="lines"/>
                <img className='askerpic' src={require("../images/askerpic.svg").default} alt="askerpic"/>
             
                <a href='#' className='facebook-img'>
                    <img src={require("../images/facebookicon.svg").default} alt="facebook" />
                </a>
                <a href='#' className='chart-img'>
                    <img src={require("../images/charticon.svg").default} alt="charticon" />
                </a>
                <a href='#' className='msg-img'>
                    <img src={require("../images/msgicon.svg").default} alt="msgicon" />
                </a>
                <a href='#' className='google-img'>
                    <img src={require("../images/googleicon.svg").default} alt="googleicon" />
                </a>
                <a href='#' className='share-img'>
                    <img src={require("../images/shareicon.svg").default} alt="shareicon" />
                </a>
                <a href='#' className='linkedin-img'>
                    <img src={require("../images/linkedinicon.svg").default} alt="linkedinicon" />
                </a>
                <a href='#' className='share-blue-img'>
                    <img src={require("../images/shareiconblue.svg").default} alt="shareiconblue" />
                </a>
                <a href='#' className='caminoc'>
                    <img src={require("../images/caminoc.svg").default} alt="caminoc" />
                </a>
            
            </div>     
        </div>    
    </Wrapper>
    
  </div> 
}

export default RightLayout3;

