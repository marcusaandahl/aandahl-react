import styled from 'styled-components'

interface IProps {
    align?: string
    imgSrc: string
}

export default function FeatProjectCardComponent({align = "left", imgSrc}: IProps) {
    if (align === "right") {
        return (
            <FeatProjectCardRight className='h-[20vh] tb:h-[40vh]'>
                <ImageRight src={imgSrc} className='w-[160px] h-[142.72px] tb:w-[340px] tb:h-[308.4px] lt:w-[400px] lt:h-[393.15px] right-[-40px] top-[-15px] tb:right-[-30px] tb:top-[-10px]'/>
                <ContentRight>
                    <TextRight>
                        <Title className='text-[24px] tb:text-[40px]'>App Title</Title>
                        <Description className='text-[8px] tb:text-[16px]'>Quick App Description</Description>
                    </TextRight>
                    <ButtonsRight>
                        <ViewCode className='text-[5px] mb:text-[6px] tb:text-[12px]'>View Code</ViewCode>
                        <TryDemo className='text-[5px] mb:text-[6px] tb:text-[12px]'>Try Demo</TryDemo>
                    </ButtonsRight>
                </ContentRight>
            </FeatProjectCardRight>
        )
    } else {
        return (
            <FeatProjectCardLeft className='h-[20vh] tb:h-[40vh]'>
                <ImageLeft src={imgSrc} className='w-[160px] h-[142.72px] tb:w-[340px] tb:h-[308.4px] lt:w-[400px] lt:h-[393.15px] left-[-40px] top-[-15px] tb:left-[-30px] tb:top-[-10px]'/>
                <ContentLeft>
                    <TextLeft>
                        <Title className='text-[24px] tb:text-[40px]'>App Title</Title>
                        <Description className='text-[8px] tb:text-[16px]'>Quick App Description</Description>
                    </TextLeft>
                    <ButtonsLeft>
                        <ViewCode className='text-[5px] mb:text-[6px] tb:text-[12px]'>View Code</ViewCode>
                        <TryDemo className='text-[5px] mb:text-[6px] tb:text-[12px]'>Try Demo</TryDemo>
                    </ButtonsLeft>
                </ContentLeft>
            </FeatProjectCardLeft>
        )
    }
}

const TryDemo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5% 6%;
    width: fit-content;
    height: fit-content;
    background: linear-gradient(88.3deg, #FF745B 1.65%, #E3398B 98.89%);
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
    line-height: 8px;
    color: #FFFFFF;
    cursor: pointer;
`

const ViewCode = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5% 6%;
    width: fit-content;
    height: fit-content;
    border: 1px solid #F2F2F2;
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
    line-height: 8px;
    color: #FFFFFF;
    cursor: pointer;
`

const ButtonsLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: fit-content;
`

const ButtonsRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: fit-content;
`

const Description = styled.p`
    font-family: 'DM Sans';
    font-weight: 400;
    line-height: 150%;
    color: rgba(242, 242, 242, 0.7);
`

const Title = styled.h3`
    font-family: 'DM Sans';
    font-weight: 700;
    line-height: 31px;
    color: #F2F2F2;
`

const TextRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 100%;
    height: fit-content;
`

const TextLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
    gap: 4px;
    width: 100%;
    height: fit-content;
`

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 17px;
    position: absolute;
    width: fit-content;
    height: 100%;
    right: 10%;
    top: 0px;
`

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 17px;

    position: absolute;
    width: fit-content;
    height: 100%;
    left: 10%;
    top: 0px;
`

const ImageLeft = styled.img`
    position: absolute;
`

const ImageRight = styled.img`
    position: absolute;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`

const FeatProjectCardRight = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;

    width: 100%;
    max-width: 650px;
    max-height: 417.2px;

    background: radial-gradient(71% 292.81% at 92.2% 80.75%, #242424 0%, #23884E 100%);
    border-radius: 32px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

const FeatProjectCardLeft = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;

    width: 100%;
    max-width: 650px;
    max-height: 417.2px;

    background: radial-gradient(82.1% 155.41% at 81.93% 13.98%,#1F8A4C 0%,#1D1F22 100%);
    border-radius: 32px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`