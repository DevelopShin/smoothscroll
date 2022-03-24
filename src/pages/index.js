import React,{useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
function HomePage() {
  const smoothBox={
    smooth: true,
    duration:500,
    spy:true,
    exact:'true',
    offset:-79,
  }
    return (
        <div>
            <NavBar smoothBox = {smoothBox}/>
            <HeroSection smoothBox = {smoothBox}/>
            <InfoSection smoothBox = {smoothBox} {...homeObjOne}/>
            <InfoSection smoothBox = {smoothBox} {...homeObjTwo}/>
            <InfoSection smoothBox = {smoothBox} {...homeObjThree}/>
            <Services smoothBox = {smoothBox}/>
            <Footer smoothBox = {smoothBox}/>


        </div>
    )
}

export default HomePage
