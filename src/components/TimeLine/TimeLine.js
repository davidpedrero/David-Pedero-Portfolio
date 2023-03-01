import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, Img, Column, Row } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider />
      <br/>
      <SectionTitle>About Me</SectionTitle>
      <br/>
      <SectionText>
        I am a completely self-taught full-stack web developer specializing in the MERN stack. I graduated from CUNY Hunter College with a Bachelors degree in Human Biology. 
        <br/><br/>
        While working in the medical field during the pandemic, I started teaching myself how to code in my spare time. I soon discovered that I had a passion for building projects and solving problems. 
        <br/><br/>
        While working as an operations associate at a start-up tech company called Lotto.com, I built Javascript-based automation scripts and dashboards using Google Apps scripts that optimized workflows. 
        <br/><br/>
        I also agreed to provide contracted front end development services to Le Pale Shadow LLC for a period of six months while still working my full-time job.
        <br/><br/>
        I have a diverse set of skills, ranging from QA testing and UX design, to front-end and back-end development. My interests lie in innovation, automation and solving problems related to large scale distributed software systems.
      </SectionText>
        <br/><br/>
        <SectionDivider />
        <br/>
        <SectionTitle>Timeline</SectionTitle>
        <br/><br/>
        <Row>
          <Column>
            <Img src='/images/me-at-work.png'/>
          </Column>
          <Column>
            <Img src='/images/me.png'/>
          </Column>
          <Column>
            <Img src='/images/me-at-hike.png'/>
          </Column>
        </Row>
        <br/><br/>
        <br/><br/>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>
                  {item.text}
                </CarouselItemText>
                <br></br>
                <CarouselItemText>
                  {item.text2}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type='button'
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        })}
      </CarouselButtons>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;
