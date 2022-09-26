import styled from 'styled-components'

export default function LandingPage({}) {
    return (
        <Landing>
            <div className='w-6 h-6 opacity-0' />
            <Content className='px-[80px] mb:px-[100px]'>
            <TitlesContainer>
                <Titles>
                <Title className='text-[28px] lt:text-[52px]'>Hi, I am<br/>Marcus Aandahl</Title>
                <SubTitle className='text-[12px] lt:text-[15px]'>I am a Software Developer</SubTitle>
                </Titles>
                <CTAButtons>
                <ContactButton className='text-[8px] py-[8px] px-[6px] mm:py[10px] mm:px-[25px] lt:text-[14px] lt:py-[19px] lt:px[42px]'>Contact Me</ContactButton>
                <SeeWorkButton className='text-[8px] py-[8px] px-[6px] mm:py[10px] mm:px-[25px] lt:text-[14px] lt:py-[19px] lt:px[42px]'>See My Work</SeeWorkButton>
                </CTAButtons>
            </TitlesContainer>
            <ProfileImageContainer className='hidden tb:flex w-[250px] h-[250px] lt:w-[350px] lt:h-[350px] ml-[64px]'>
                <ProfileImage />
            </ProfileImageContainer>
            </Content>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-gray5">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
        </Landing>
    )
}

const ProfileImage = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`

const ProfileImageContainer = styled.div`
  border-radius: 100%;
  background-color: rgba(79, 79, 79, 0.5);
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin-left: auto;
`

const SeeWorkButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  border: 1px solid #F2F2F2;
  border-radius: 8px;

  font-family: 'DM Sans';
  font-weight: 500;
  line-height: 10px;
  color: #F2F2F2;
  cursor: pointer;
`

const ContactButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  background: #27AE60;
  border-radius: 8px;

  font-family: 'DM Sans';
  font-weight: 500;
  line-height: 10px;
  color: #F2F2F2;
  cursor: pointer;
`

const CTAButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`

const SubTitle = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  color: #828282;
`

const Title = styled.h1`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  /* Linear */

  background: linear-gradient(88.3deg, #FF745B 1.65%, #E3398B 98.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Landing = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 61px;
`