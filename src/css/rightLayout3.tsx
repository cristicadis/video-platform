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
    
    width: 65%;
    .container{
        width: 295px;
        margin: 40px;
        position: relative;
        height: 219px;
        
        
    .lines {  
        width: 100%;  
        position: absolute;   
        margin: 0 auto;
        
    }
    .askerpic {   
        height: auto;
        position: absolute;
        width: 50%;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);     
    }
    .facebook-img {
        position: absolute;
        right: -5%;
        top:14%;   
    }
    .chart-img {
        position: absolute;
        top:-18%;
        right:11%;
    }
    .msg-img {
        position: absolute;
        top:38%;
        right: -19%;
    }
    .google-img{
        position: absolute;
        bottom:10%;
        right: -5%;
    }
    .share-img{
        position: absolute;
        bottom: -20%;
        right: 11%;
    }
    .linkedin-img {
        position: absolute;
        top:10%;
        left: -3%;
    }
    .share-blue-img {
        position: absolute;
        top: 38%;
        left: -11%;
    }
    .caminoc {
        position: absolute;
        top:70%;
        left: 1%;
    }
    }   
}
`
export default Wrapper