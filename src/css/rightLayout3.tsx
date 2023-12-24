import styled from 'styled-components'

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
    width: 65%;
    gap:4px;
   
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
    width: 75%;
    overflow: hidden; 
    .container{
        width: 295px;
        margin: 40px 70px;
        position: relative;
        height: 219px;
        padding: 0;  
        
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
        left:47%;
        transform:translate(-50%, -50%);     
    }
    .facebook-img {
        position: absolute;
        right: -1%;
        top:14%;   
    }
    .chart-img {
        position: absolute;
        top:-18%;
        right:15%;
    }
    .msg-img {
        position: absolute;
        top:38%;
        right: -15%;
    }
    .google-img{
        position: absolute;
        bottom:10%;
        right: -5%;
    }
    .share-img{
        position: absolute;
        bottom: -20%;
        right: 15%;
    }
    .linkedin-img {
        position: absolute;
        top:10%;
        left: -7%;
    }
    .share-blue-img {
        position: absolute;
        top: 38%;
        left: -15%;
    }
    .caminoc {
        position: absolute;
        top:70%;
        left: -3%;
    }
    }   
}
`
export default Wrapper