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
    width: 65%;
    position: relative;
    display: flex;
    .container {
        height: 250px;
        width: 250px;
        position: relative;
        .share-icon {
            position: absolute;
            top: 10%;
            right: 7%;
        }
        .question-icon {
            position: absolute;
            top:16%;
            left: 7%;
        }
        .play-icon {
            position: absolute;
            bottom: 20%;
            left: 40%;
        }
        .arrow-1{
            position: absolute;
            right: 35%;
            top:12%
        }
        .arrow-2{
            position: absolute;
            right: 14%;
            top:30%;
        }
        .create-text {
            position: absolute;
            left: 5%;
            top:40%;
        }
        .share-text {
            position: absolute;
            right: 4%;
            top:35%;
        }
        .play-text {
            position: absolute;
            bottom:0%;
            left: 33%;
        }
       
    }
}


`


export default Wrapper