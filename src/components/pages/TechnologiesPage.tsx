import styled from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import AWS from '../logos/AWS.svg'
import Docker from '../logos/Docker.svg'
import Figma from '../logos/Figma.svg'
import Firebase from '../logos/Firebase.svg'
import Github from '../logos/Github.svg'
import GraphQL from '../logos/GraphQL.svg'
import Java from '../logos/Java.svg'
import Kotlin from '../logos/Kotlin.svg'
import NextJS from '../logos/NextJS.svg'
import PSQL from '../logos/PSQL.svg'
import Python from '../logos/Python.svg'
import ReactLogo from '../logos/ReactLogo.svg'
import Redis from '../logos/Redis.svg'
import Ruby from '../logos/Ruby.svg'
import TailwindCSS from '../logos/TailwindCSS.svg'
import TypeScript from '../logos/TypeScript.svg'


export default function TechnologiesPage({}) {

    const logoClasses = 'h-[32px] mm:h-[36px] mb:h-[40px] tb:h-[50px] lt:h-[64px] ltl:h-[80px] 4k:h-[120px]'

    return (
        <TechContainer>
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                modules={[Autoplay]}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: false
                }}
                grabCursor={true}
                loop={true}
                speed={2000}
                loopedSlidesLimit={false}
                allowTouchMove={false}
                breakpoints={{
                    0: {
                        slidesPerView: 5
                    },
                    375: {
                        slidesPerView: 6
                    },
                    425: {
                        slidesPerView: 7
                    },
                    768: {
                        slidesPerView: 9
                    },
                    1024: {
                        slidesPerView: 10
                    },
                    1440: {
                        slidesPerView: 10
                    }
                }}
            >
                <SwiperSlide>
                    <AWS className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Firebase className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Docker className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Github className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <GraphQL className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <PSQL className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Redis className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <NextJS className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactLogo className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <TailwindCSS className={logoClasses} width='auto' height='auto' />
                </SwiperSlide> */}
                <SwiperSlide>
                    <TypeScript className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Kotlin className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Java className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Python className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Ruby className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Figma className={logoClasses} width='auto' height='auto' />
                </SwiperSlide>
            </Swiper>
        </TechContainer>
    )
}

const TechContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  padding-top: 60px;

  .swiper-wrapper {
    // display: flex;
    // justify-content: center;
    transition-timing-function : linear;
  }
`