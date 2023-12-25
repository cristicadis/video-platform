import Wrapper from '../css/rightLayout5';
import Icons from './icons';
import styled from 'styled-components'


const RightLayout5=()=>{
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
            <img src={require("../images/img.svg").default} alt="image" />
        </div>    
    </Wrapper>
    
    </div> 
}






export default RightLayout5;

