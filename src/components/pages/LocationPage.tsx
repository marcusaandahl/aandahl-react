import styled from 'styled-components'

export default function LocationPage({}) {
    return (
        <>
            <LocationContainer className='px-[60px] tb:px-[80px]'>
                <LocationCard>
                    <LocationTitle>Where can you find me?</LocationTitle>
                    <WorldMap src="/assets/worldMap.png" />
                    <Contact>
                        <ContactTitle>Let's work together</ContactTitle>
                        {/* <ContactButton>CONTACT ME</ContactButton> */}
                    </Contact>
                </LocationCard>
            </LocationContainer>
        </>
    )
}

const ContactButton = styled.div`

`

const ContactTitle = styled.h4`
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 8px;
    color: #f2f2f2;
`

const Contact = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-end;
`

const WorldMap = styled.img`
    position: absolute;
    width: 65%;
    left: 0;
    bottom: 8px
`

const LocationTitle = styled.h3`
    white-space: nowrap;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #f2f2f2;
`

const LocationCard = styled.div`
    width: 100%;
    height: 111.48px;
    background: radial-gradient(71% 292.81% at 92.2% 80.75%, #242424 0%, #23884E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 39px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0;
    position: relative;
    overflow: hidden;
`

const LocationContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100vw;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 60px;
`