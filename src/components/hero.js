import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import img from '../img/iceland-snae.jpg';
import mobile from '../img/mobile-iceland.jpg';
import tablet from '../img/tablet-iceland.jpg';

const HeroSection = styled.div`
  height: 100vh;
  background-image: url(${mobile});
  @media (min-width: 450px) and (max-width: 767px) {
    background-image: url(${tablet});
  }
  @media (min-width: 768px) {
    background-image: url(${img});
  }
`;

const FrontPageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const LogoWrapper = styled.div`
  color: #333;
  margin: 24px 0 0 0px;
  @media (min-width: 768px) {
    margin: 24px 0 0 24px;
  }
`;

const Name = styled.h1`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  @media (min-width: 500px) {
    font-size: 70px;
  }
  @media (min-width: 768px) {
    font-size: 80px;
    text-align: left;
  }
`;

const Role = styled.div`
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialIconWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const SocialIcon = styled.svg`
  margin: 0 4px 0 4px;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
  fill: #333;
  :hover {
    fill: #d74a41;
  }
`;

const SocialLink = styled.a``;

const ArrowWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 32px;
  @media (min-width: 500px) {
  }
  @media (min-width: 768px) {
    bottom: 32px;
  }
  width: 100%;
`;

const ArrowCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 200px;
  height: 200px;
`;

const ArrowLink = styled.a`
  display: block;
`;

const Arrow = styled.svg`
  visibility: visible;
  fill: #d74a41;
  cursor: pointer;
  :hover {
    fill: #fff;
  }
  @media (min-width: 500px) {
    visibility: visible;
  }
`;

export default class Hero extends React.Component {
  render() {
    return (
      <HeroSection>
        <FrontPageHeader>
          <LogoWrapper>
            <Name>Todd Matthews</Name>
            <Role>Web Developer</Role>
          </LogoWrapper>
          <SocialIconWrapper>
            <SocialLink href="https://twitter.com/gtodd876">
              <SocialIcon
                width="50"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.478 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.13-.477-4.402-1.292 1.524.18 3.045-.244 4.252-1.19-1.256-.022-2.317-.853-2.684-1.994.45.086.895.06 1.298-.05-1.38-.277-2.335-1.52-2.304-2.852.388.215.83.344 1.3.36-1.278-.856-1.64-2.545-.888-3.836 1.416 1.738 3.533 2.88 5.92 3-.42-1.795.944-3.526 2.8-3.526.824 0 1.57.35 2.095.907.654-.128 1.27-.368 1.824-.697-.214.67-.67 1.233-1.262 1.59.58-.07 1.135-.225 1.65-.454-.385.578-.87 1.084-1.434 1.49z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://github.com/gtodd876">
              <SocialIcon
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,0 C5.37304688,0 0,5.50887684 0,12.3033585 C0,17.7401454 3.438,22.3509011 8.20678125,23.9774195 C8.80664062,24.0900721 9.02564062,23.7100858 9.02564062,23.3856808 C9.02564062,23.0928032 9.01464844,22.1226161 9.00878906,21.0953337 C5.671875,21.8387498 4.96654688,19.6445227 4.96654688,19.6445227 C4.42017187,18.2237491 3.63426563,17.8452766 3.63426563,17.8452766 C2.54369531,17.0823242 3.717,17.097343 3.717,17.097343 C4.92182813,17.1829378 5.55614063,18.3649253 5.55614063,18.3649253 C6.62695312,20.2452726 8.36571094,19.7015939 9.04832813,19.3862002 C9.15740625,18.5932103 9.46795313,18.0495316 9.81004688,17.7431491 C7.14623438,17.4322731 4.344,16.376443 4.344,11.662046 C4.344,10.317856 4.81202344,9.2215114 5.578125,8.36018018 C5.45580469,8.04779022 5.04271875,6.79597155 5.69676563,5.10262571 C5.69676563,5.10262571 6.703125,4.77221325 8.99704688,6.36420056 C9.95357812,6.09011441 10.9797187,5.95494568 11.9999766,5.95042804 C13.0195078,5.95494568 14.0463516,6.09160427 15.0043828,6.36569042 C17.2939453,4.77221325 18.3017578,5.10411557 18.3017578,5.10411557 C18.9580078,6.7989753 18.5449219,8.04928008 18.421875,8.36018018 C19.1909063,9.2215114 19.6552734,10.31788 19.6552734,11.662046 C19.6552734,16.388458 16.8486328,17.4292453 14.1753047,17.7341379 C14.6074453,18.1156141 14.9897578,18.8635477 14.9897578,20.0109801 C14.9897578,21.6555451 14.9736328,22.9816885 14.9736328,23.3871947 C14.9736328,23.7146034 15.1918828,24.0975695 15.7998047,23.9774195 C20.5649531,22.3478973 24,17.7371416 24,12.3033585 C24,5.50887684 18.6269531,0 12,0 Z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
            <SocialLink href="mailto:gtmatthews@gmail.com">
              <SocialIcon
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.566 7.37L12 12.594 5.433 7.37h13.133zm.01 9.22H5.425V8.748L12 13.978l6.575-5.23v7.842z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
          </SocialIconWrapper>
        </FrontPageHeader>
        <ArrowWrapper>
          <ArrowCenter>
            <ArrowLink href="#about">
              <Arrow
                width="200"
                height="200"
                viewBox="-32 -40 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.647.064L-.01 5.72 18 23.73 36.01 5.72 30.352.065 18 12.417"
                  fillRule="nonzero"
                />
              </Arrow>
            </ArrowLink>
          </ArrowCenter>
        </ArrowWrapper>
      </HeroSection>
    );
  }
}
