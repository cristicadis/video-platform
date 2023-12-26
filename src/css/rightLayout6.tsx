import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
align-items: center;
flex-direction: column;
gap:30px;
justify-content: center;
height: 90%;
align-content: center;


  

.first-side{
    display: flex;
    flex-direction: column;
    width: 65%;
    gap:10px;
    height: 50%;
    justify-content: center;
   
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
    position: relative;
    display: flex;
    height: 50%;
    justify-content: center;
    
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
        .point {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            position: absolute;
        }

        .point-1 {
            background-color: #ADB8FA;
            top:10%;
            left:14%;
        }
        .point-2  {
           background-color: #AEB8FF;
           right: 16%;
           top:4%

        }
        .point-3 {
            background-color: #5468FFCC;
            right: 30%;
            top:18%
        }
        .point-4 {
            background-color: #ADB8FA;
            left: 47%;
            top:54%;
        }
        .point-5 {
            background-color: #5468FFCC;
            left: 33%;
            top:68%  
        }
        .point-6 {
            background-color: #01EBDE;
            top:68%;
            right:35%
        }
       
    }
}
@media (max-width: 1080px) {
    
    .first-side{
        width: 80%;
    }
}


`


export default Wrapper