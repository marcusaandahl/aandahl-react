import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import SkillCardComponent from '../experience/SkillCardComponent'
import TimelineComponent from '../experience/TimelineComponent'

const SkillCards = () => {
    return (
        <>
            <SkillCardComponent
                icon='code'
                title='Fullstack Development'
                desc='I work professionally as a Backend Developer, where I develop complex systems with thousands of users. However, I also have an insight into Frontend Development, both professionally, and as a pastime activity.'
            />
            <SkillCardComponent
                icon='leader'
                title='Leadership'
                desc='With an exposure to leadership theory in the military, I have tried first hand leading groups of individuals in pressured scenarios. This experience is also one, which I use in my day to day life.'
            />
            <SkillCardComponent
                icon='product'
                title='Product Design'
                desc='Working at Shape has given me a deeper understanding of what it takes to design and develop a product for a client.'
            />
            <SkillCardComponent
                icon='team'
                title='Teamwork'
                desc='Having participated in sports on a national level, I have first hand experience with high levels of communication in stressful environments.'
            />
        </>
    )
}

export default function ExperiencePage({}) {
    const [timelineOpen, setTimelineOpen] = useState(false)
    const [innerWidth, setInnerWidth] = useState(0)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
    },[])

    return (
        <>
            <ExperienceContainer>
                {innerWidth >= 1024 &&
                    <Title className='text-[18px] mm:text-[26px] mb:text-[32px] ltl:text-[48px]'>Experience</Title>
                }
                <Navbar className='flex lt:hidden'>
                    <NavItem active={!timelineOpen} onClick={() => setTimelineOpen(false)}>Skills</NavItem>
                    <NavItem active={timelineOpen} onClick={() => setTimelineOpen(true)}>Timeline</NavItem>
                </Navbar>
                <Content className='px-[65px] mb:px-[75px] tb:px-[100px] lt:px-[120px] ltl:px-[150px]'>
                    {innerWidth >= 1024 ?
                        <>
                            <TimelineComponent className="hidden lt:block w-[2400px] h-full" />
                            <SkillsContainer>
                                <Row className='hidden tb:flex gap-[4%] 4k:gap-[2%]'>
                                    <SkillCards />
                                </Row>
                                <Col className='flex tb:hidden'>
                                    <SkillCards />
                                </Col>
                            </SkillsContainer>
                        </>
                    :
                        timelineOpen ?
                            <div className='w-full flex justify-center items-center'>
                                <TimelineComponent className="w-[200px] h-full" />
                            </div>
                        :
                            <SkillsContainer>
                                <Row className='hidden tb:flex gap-[4%] 4k:gap-[2%]'>
                                    <SkillCards />
                                </Row>
                                <Col className='flex tb:hidden'>
                                    <SkillCards />
                                </Col>
                            </SkillsContainer>
                    }
                </Content>
            </ExperienceContainer>
        </>
    )
}

const NavItem = styled("div")<{active?: boolean}>`
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #F2F2F2;
    padding: 6% 12%;
    border-radius: 8px;
    background-color: ${props => props.active ? '#27AE60' : 'none'}
    cursor: pointer;
`



const Navbar = styled.div`
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Col = styled.div`
    flex-direction: column;
    gap: 10px;
`

const Row = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const ExperienceContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100vw;
    padding-top: 32px;
`

const Title = styled.div`
    font-family: 'DM Sans';
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    color: #f2f2f2;
    margin-bottom: 60px;
`