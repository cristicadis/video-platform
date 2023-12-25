import Wrapper from '../css/rightLayout6';
import Icons from './icons';
import styled from 'styled-components'


const RightLayout6=()=>{
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
                <a href="#"><img className='question-icon' src={require("../images/questionicon.svg").default} alt="question-icon" /></a>
                <a href="#"><img className='play-icon' src={require("../images/play.svg").default} alt="play-icon" /></a>
                <a href="#"><img className='share-icon' src={require("../images/share.svg").default} alt="share-icon" /></a>        
                <img className='arrow-1' src={require("../images/arrow1.svg").default} alt="arrow-1" />
                <img className='arrow-2' src={require("../images/arrow2.svg").default} alt="arrow-2" />
                <img className='play-text' src={require("../images/playtext.svg").default} alt="play-text" />
                <img className='share-text' src={require("../images/sharetext.svg").default} alt="share-text" />
                <img className='create-text' src={require("../images/createtext.svg").default} alt="create-text" />

            </div>     
            
        </div>    
    </Wrapper>  
    </div> 
}







export default RightLayout6;

