import React, { useState } from 'react'
import MyVideo from '../../videos/video.mp4'
import { mainHome } from '../InfoSection/Data'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'
import { Button } from '../hoc/ButtonElement'




function HeroSection(props) {
    const [hover, sethover] = useState(false)
    const onHover = () => {
        sethover(!hover)
    }
    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={MyVideo} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        {mainHome.headLine}
                    </HeroH1>
                    <HeroP>
                        {mainHome.description}

                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='signup'
                            {...props.smoothBox}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary={'true'}
                            dark={'true'}
                        >
                            Get start {hover ? < ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>

            </HeroContainer>
        </>
    )
}

export default HeroSection
