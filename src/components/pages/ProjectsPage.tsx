import styled from 'styled-components'
import FeatProjectCardComponent from '../projects/FeatProjectCard'
import OtherProjectCardComponent from '../projects/OtherProjectCardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function ProjectsPage({}) {

    return (
        <>
            <NotableProjectsContainer className='px-20 tb:px-[100px]'>
                <Title className='text-[18px] mm:text-[26px] mb:text-[32px] ltl:text-[48px]'>Notable Projects</Title>
                <FeaturedProjects>
                    <FeatProjectCardComponent align='left' imgSrc="/assets/phone.png" />
                    <FeatProjectCardComponent align='right' imgSrc="/assets/phone.png" />
                </FeaturedProjects>
            </NotableProjectsContainer>
            <OtherProjectsContainer className='px-20 tb:px-[100px]'>
                <Title className='text-[18px] mm:text-[26px] mb:text-[32px] ltl:text-[48px]'>Other Projects</Title>
                <OtherProjectsBox>
                    <div>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            modules={[Autoplay]}
                            autoplay={true}
                            centeredSlides={true}
                            grabCursor={true}
                            loop={true}
                        >
                            <SwiperSlide className='w-auto h-auto'>
                                <OtherProjectCardComponent focused={true} title="Example 1"/>
                            </SwiperSlide>
                            <SwiperSlide className='w-auto h-auto'>
                                <OtherProjectCardComponent focused={true} title="Example 2"/>
                            </SwiperSlide>
                            <SwiperSlide className='w-auto h-auto'>
                                <OtherProjectCardComponent focused={true} title="Example 3"/>
                            </SwiperSlide>
                            <SwiperSlide className='w-auto h-auto'>
                                <OtherProjectCardComponent focused={true} title="Example 4"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </OtherProjectsBox>
            </OtherProjectsContainer>
        </>
    )
}

const OtherProjectsBox = styled.div`
    width: 100vw;
    padding: 26px 0;
    height: auto;
`

const OtherProjectsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 60px;
    width: 100vw;
    padding: 32px 0;
`

const FeaturedProjects = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 26px 0px;
    gap: 24px;
    width: 100%;
    height: fit-content;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    flex-wrap: wrap;
    justify-content: center;
`

const Title = styled.div`
    font-family: 'DM Sans';
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    color: #f2f2f2;
`

const NotableProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    gap: 24px;

    width: 100%;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`