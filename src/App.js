import styled from 'styled-components'
import {useState , useEffect} from 'react';
function App() {

  
  const initialDelay=2000;
  const [colorIndex, setColorIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, initialDelay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isStarted) {
      return;
    }
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, 20000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <Container>
        <GreenContainer>
          <GreenBox>
            <LightY></LightY>
            <YellowLight></YellowLight>
            <GreenLight  inputColor='#0c0' active={colorIndex === 0}></GreenLight>
          </GreenBox>
          <TextGreen>This Light is green</TextGreen>
        </GreenContainer>
        <YellowConatiner>
          <YellowBox>
            <LightR></LightR>
            <YellowLight  inputColor='#ff0' active={colorIndex === 1}></YellowLight>
            <LightG></LightG>
          </YellowBox>
          <TextYellow>This Light is yellow</TextYellow>
        </YellowConatiner>
        <RedContainer>
          <RedBox>
            <RedLight  inputColor='#f00' active={colorIndex === 2}></RedLight>
            <LightY></LightY>
            <LightG></LightG>
          </RedBox>
          <TextRed>This Light is red</TextRed>
        </RedContainer>
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

const GreenContainer = styled.div `
height: 306px;
width: 360px;
border-radius: 6px;
background-color:#DDFFE4;
border:1px solid #00D12E
`
const YellowConatiner = styled.div `
height: 306px;
width: 360px;
border-radius: 6px;
background-color:#FFF2C5;
border:1px solid #FFCD1B;
`
const RedContainer = styled.div `
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
const RedLight = styled.div `
height: 24px;
width: 24px;
left: 25px;
top: 20px;
border-radius: 0px;
background-color: ${props => props.inputColor || "#bbb"};
filter: drop-shadow(0 0 10px #FF1B1B);
border-radius: 50%;
position:relative;
`
const YellowLight = styled.div `
height: 24px;
width: 24px;
left: 25px;
top: 40px;
position:relative;
background-color: ${props => props.inputColor || "#bbb"};
filter: drop-shadow(0 0 10px #FFCD1B);
border-radius: 50%;


`
const GreenLight = styled.div `
position:relative;
height: 24px;
width: 24px;
left: 25px;
top: 60px;
background-color: ${props => props.inputColor || "#bbb"};
filter: drop-shadow(0 0 10px #00D12E);
border-radius: 50%;
`

const TextGreen = styled.p `
position:relative;
height: 35px;
width: 232px;
left: 64px;
top: 60px;
font-family: Roboto;
font-size: 27px;
font-style: normal;
font-weight: 300;
line-height: 35px;
letter-spacing: 0em;
text-align: center;
color:#005012;

`
const TextYellow = styled.p `
position:relative;
height: 35px;
width: 232px;
left: 64px;
top: 60px;
font-family: Roboto;
font-size: 27px;
font-style: normal;
font-weight: 300;
line-height: 35px;
letter-spacing: 0em;
text-align: center;
color: #8E7004;
`

const TextRed = styled.p `
position:relative;
height: 35px;
width: 232px;
left: 64px;
top: 60px;
font-family: Roboto;
font-size: 27px;
font-style: normal;
font-weight: 300;
line-height: 35px;
letter-spacing: 0em;
text-align: center;
color:#930101;
`

const LightG = styled.div `
position:relative;
height: 24px;
width: 24px;
left: 25px;
top: 60px;
background-color: #bbb;
border-radius: 50%;
`

const LightY = styled.div `
height: 24px;
width: 24px;
left: 25px;
top: 40px;
position:relative;
background-color:#bbb;
border-radius: 50%;
`
const LightR = styled.div `
height: 24px;
width: 24px;
left: 25px;
top: 20px;
border-radius: 0px;
background-color:#bbb;
border-radius: 50%;
position:relative;
`

export default App;
