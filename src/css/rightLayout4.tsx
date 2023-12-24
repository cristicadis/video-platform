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

