import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
align-items: center;
flex-direction: column;
gap:20px;
justify-content: center;

    
.first-side{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    width: 65%;
    gap:10px;
   
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
    
  img{
    position: absolute;
    width: 60%;
    height: auto;
    right: -10%;
    top:-100px;
    }
}

`



export default Wrapper