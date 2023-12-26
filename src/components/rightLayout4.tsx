import Icons from './icons';
import Wrapper from '../css/rightLayout4';


const RightLayout4=()=>{
    return <div className="rightSideDiv1 kjdsfkn-ajdnkw">
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
                <div className='first'>
                    <img className='card-1' src={require("../images/Question_Card_1.svg").default} alt="Card_1" />
                    <img className='card-2' src={require("../images/Question_Card_2.svg").default} alt="Card_2" />
                </div>
                <div className="second">
                    <img className='card-3' src={require("../images/Question_Card_3.svg").default} alt="#card_3" />
                    <img className='card-4' src={require("../images/Question_Card_4.svg").default} alt="Card_4" />
                </div>    
            </div>     
        </div>    
    </Wrapper>
    
  </div> 
}

export default RightLayout4;

