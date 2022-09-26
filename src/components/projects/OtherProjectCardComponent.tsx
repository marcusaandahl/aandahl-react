import styled from 'styled-components'

interface IProps {
    title: string,
    focused?: boolean
}

export default function OtherProjectCardComponent({title, focused = false}: IProps) {
    return (
        <OtherProjectCard className='w-[200px] h-[120px] mm:w-[255px] mm:h-[130px] mb:w-[300px] mb:py-[10px] tb:w-[350px] tb:h-[170px] lt:w-[400px] ltl:w-[550px] ltl:h-[250px]'>
            <CardPic src="https://picsum.photos/800/800" className='w-[70px] h-[120px] mm:w-[100px] mm:h-[130px] tb:w-[150px] tb:h-[170px] lt:w-[170px] ltl:w-[230px] ltl:h-[250px]' />
            <Content>
                <Title className='text-[14px] mb:text-[17px] lt:text-[22px] ltl:text-[30px]'>{title}</Title>
                <Desc className='text-[8px] leading-[10px] mb:text-[10px] lt:text-[12px] lt:leading-[12px] ltl:text-[19px] ltl:leading-[21px]'>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consect etur adipiscing elit. Bibendum </Desc>
                <Buttons>
                    <ViewCode className='py-5% px-8% text-[6px] mb:text-[8px] lt:text-[12px] lt:py-6% ltl:text-[15px]'>View Code</ViewCode>
                    <TryDemo className='py-5% px-8% text-[6px] mb:text-[8px] lt:text-[12px] lt:py-6% ltl:text-[15px]'>Try Demo</TryDemo>
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
    gap: 10px;
    width: 100%;
    height: 100%;
    height: fit-content;
    background: linear-gradient(88.3deg, #FF745B 1.65%, #E3398B 98.89%);
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
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
    gap: 10px;
    width: 100%;
    height: 100%;
    border: 1px solid #F2F2F2;
    border-radius: 8px;

    font-family: 'DM Sans';
    font-weight: 500;
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
    line-height: 10px;
    color: rgba(242, 242, 242, 0.3);
`

const Title = styled.h5`
    font-family: 'DM Sans';
    font-weight: 700;
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
    height: 100%;
    border-radius: 20px 0px 0px 20px;
`

const OtherProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 0px 0px;
    gap: 16px;
    background: radial-gradient(71% 292.81% at 92.2% 80.75%, #242424 0%, #23884E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 20px;
`