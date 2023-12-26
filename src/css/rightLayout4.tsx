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
.second-side {
    height: 50%;
    justify-content: center;
    width: 75%;
    
    
    .container {
        display: flex;
        justify-content: center;
        margin: auto;
        flex-direction: column;
        padding: 0;
        .first {
            display: flex;
            justify-content: center;
            .card-1{
                transform: translateY(20%);
            }
        }
        .second {
            justify-content: center;
            display: flex;
            .card-3{
            transform: translateY(20%);
        }
       
         }
    }
}
@media (max-width: 1080px) {
    .container {
        transform: scale(0.9);
    }
    .first-side{
        width: 80%;
    }
}
@media (max-width: 1023px) {
    .container {
        transform: scale(0.8);
    }
    
}




`


export default Wrapper;

