import type { NextPage } from 'next'
import styled from 'styled-components'
import HeadComponent from '../components/Head'


const StarsBackground = styled.div`
  height: 95vh;
  position: relative;
  background: linear-gradient(#00696B, #00BCAA);
  overflow: hidden;
  box-shadow: 0px 16px 24px rgba(0, 188, 170, 0.8);
`

const Stars = styled.div`
  width: 150vw;
  height: 200vh;
  position: absolute;
  background-size: cover;
  background-image: url('/Stars.svg');
  background-repeat: repeat-y;

  animation: anim-stars 60s linear infinite;

  @keyframes anim-stars {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-100vh);
    }
  }
`

const Nebula = styled.div`
  width: 110vw;
  height: 110vh;
  position: absolute;
  background-size: cover;
  background-image: url('/Nebula.svg');
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

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title="Genshin Impact Rolls" />
      <StarsBackground>
        <Stars />
        <Nebula />
        <TestText>
          <p>Genshin Impact Rolls</p>
        </TestText>
      </StarsBackground>
    </>
  )
}

export default Home
