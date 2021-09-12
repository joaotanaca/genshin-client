import styled from "styled-components"
import HeadComponent from "../../../components/Head"

const StarsBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(0, #11c2aa, #1c544b);

  div.stars {
    width: 3px;
    height: 3px;
    color: #000000;
    border-radius: 50%;
  }
`

const TestText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: Poppins;
    font-size: 30px;
    color: #f5f5f5;
  }
`

function Index() {
  return (
    <>
    <HeadComponent 
    title="Character"
    />
    <StarsBackground>
      <div className="stars" />
      <TestText>
        <p>Hello App!</p>
      </TestText>
    </StarsBackground>
    </>

  )
}

export default Index
