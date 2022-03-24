import React from 'react'
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
}from './InfoElements';
import { Button } from '../hoc/ButtonElement';

const InfoSection = (props) => {
    return ( 
        <>
            <InfoContainer id={props.id} lightBg={props.lightBg}>
                <InfoWrapper id="InfoWrapper">
                    <InfoRow imgStart={props.imgStart} id="InfoRow">
                        <Column1 id="Column1">
                            <TextWrapper>
                                <TopLine> {props.topLine}</TopLine>
                                <Heading lightText={props.lightText}> {props.headLine}</Heading>
                                <Subtitle lightText={props.lightText}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    to="home" 
                                    {...props.smoothBox}
                                    dark={'false'}
                                    primary={'true'}
                                    
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

