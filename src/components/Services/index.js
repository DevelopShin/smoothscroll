import React from 'react';
import ServiceData from './ServiceData'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services </ServicesH1>
      <ServicesWrapper>
        {ServiceData.production.map((data, index) => (

          <React.Fragment key={index}>
            <ServicesCard>
              <ServicesIcon src={data.image} />
              <ServicesH2>{data.product}</ServicesH2>
              <ServicesP>{data.description}</ServicesP>
            </ServicesCard>
          </React.Fragment>

          ))}

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
