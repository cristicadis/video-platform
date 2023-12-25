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
.second-side {
    width: 65%;
    overflow: hidden; 
    .container {
        display: flex;
        justify-content: center;
        margin: auto;
        flex-direction: column;
        padding: 0;
        .first {
            display: flex;
            justify-content: flex-start;
            .card-1{
                transform: translateY(20%);
            }
        }
        .second {
            display: flex;
            .card-3{
            transform: translateY(20%);
        }
        }
        
        
    }
    
}

`


export default Wrapper;

