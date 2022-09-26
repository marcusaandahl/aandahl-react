import styled from 'styled-components'

interface IProps {
    title: string,
    focused?: boolean
}

export default function OtherProjectCardComponent({title, focused = false}: IProps) {
    return (
        <OtherProjectCard>
            <CardPic src="https://picsum.photos/800/800" />
            <Content>
                <Title>{title}</Title>
                <Desc>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consect etur adipiscing elit. Bibendum </Desc>
                <Buttons>
                    <ViewCode>View Code</ViewCode>
                    <TryDemo>Try Demo</TryDemo>
                </Buttons>
            </Content>
        </OtherProjectCard>
    )
}

const TryDemo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4% 8%;
    gap: 10px;
    width: 100%;
    height: fit-content;
    background: linear-gradient(88.3deg, #FF745B 1.65%, #E3398B 98.89%);
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 6px;
    line-height: 8px;
    color: #f2f2f2;
    white-space: nowrap;
`

const ViewCode = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4% 8%;
    gap: 10px;
    width: 100%;
    height: fit-content;
    border: 1px solid #F2F2F2;
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 6px;
    line-height: 8px;
    color: #F2F2F2;
    white-space: nowrap;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 6px;
    width: 100%;
`

const Desc = styled.p`
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: rgba(242, 242, 242, 0.3);
`

const Title = styled.h5`
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #f2f2f2;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    width: 100%;
    height: 100%;
    justify-content: space-around;
`

const CardPic = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px 0px 0px 20px;
`

const OtherProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 0px 0px;
    gap: 16px;
    width: fit-content;
    height: 120px;
    background: radial-gradient(71% 292.81% at 92.2% 80.75%, #242424 0%, #23884E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 20px;
    @media only screen and (min-width: 1024px) {
        width: 300px;
        height: 180px;
    }
`