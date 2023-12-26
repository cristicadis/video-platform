import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 90%;
align-content: center;

 

.first-side{
    display: flex;
    flex-direction: column;
    width: 65%;
    gap:10px;
    justify-content: center;
    height: 100%;
    align-content: center;
    height: 50%;
   
h3{
    font-weight: 900;
    font-size: 14px;
    line-height: 21.8px;
    color:#7685FE4D;
    text-transform: uppercase;
    letter-spacing: 0.7px;
} 
h2{
    font-weight: 700;
    font-size: 32px;
    color: #000;
    letter-spacing: 0.5px;
}   
p{
    font-weight: 400;
    font-size:14px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    span{
        font-weight: 700;    
    }
}
}
.second-side {
    position: relative;
    width: 100%;
    height: 50%;
  img{
    position: absolute;
    width: 70%;
    height: auto;
    right: -10%;
    top:-80px;
    }
}

@media (max-width: 1080px) {
    
    .first-side{
        width: 80%;
    }
}
@media (max-width: 1023px) {
  .second-side img {
    top: 0;
  }
    
}

`



export default Wrapper