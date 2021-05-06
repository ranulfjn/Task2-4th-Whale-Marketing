import styled from 'styled-components'
import './index.css'

function App() {
  return (
    <div className='body'>
      <Container>
        <GreenLight>
          <GreenBox>
            <span></span>
          </GreenBox>
        </GreenLight>
        <YellowLight>
          <YellowBox>

          </YellowBox>
        </YellowLight>
        <RedLight>
          <RedBox>

          </RedBox>
        </RedLight>
      </Container>
      
    </div>
  );
}

const Container = styled.div `
margin-top:200px;
display:flex;
justify-content:space-around;
align-items: center;
`

const GreenLight = styled.div `
height: 306px;
width: 360px;
border-radius: 6px;
background-color:#DDFFE4;
border:1px solid #00D12E
`
const YellowLight = styled.div `
height: 306px;
width: 360px;
border-radius: 6px;
background-color:#FFF2C5;
border:1px solid #FFCD1B;
`
const RedLight = styled.div `
height: 306px;
width: 360px;
border-radius: 6px;
background-color: #FFD3D3;
border:1px solid #FF1B1B;
`

const GreenBox = styled.div `
position:relative;
height: 144px;
width: 74px;
left: 143px;
top: 50px;
border-radius: 6px;
padding: 20px, 25px, 20px, 25px;
background-color:#FFFFFF;
border:1px solid #005012;

span{
  border:1px solid;
  border-radius:50%;
}

`
const YellowBox = styled.div `
position :relative;
height: 144px;
width: 74px;
left: 143px;
top: 50px;
border-radius: 6px;
padding: 20px, 25px, 20px, 25px;
background-color:#FFFFFF;
border: 1px solid #8E7004;

`

const RedBox = styled.div `
position :relative;
height: 144px;
width: 74px;
left: 143px;
top: 50px;
border-radius: 6px;
padding: 20px, 25px, 20px, 25px;
background-color:#FFFFFF;
border:1px solid #930101


`

export default App;
