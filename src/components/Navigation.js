import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { min } from 'breakpoints';
import emailIcon from 'images/shareicons/email_32.png';
import gPlusIcon from 'images/shareicons/google_plus_32.png';
import linkedInIcon from 'images/shareicons/linkedin_32.png';
import twitterIcon from 'images/shareicons/twitter_32.png';
import flags from 'images/flags.png';

export const NAVIGATION_WIDTH = '160px';

const NavigationWrapper = styled.div`
  background-color: #fff;

  ${min('tablet')} {
    position: fixed;
    top: 0;
    width: ${NAVIGATION_WIDTH};
    min-height: 100vh;
    overflow: hidden;
    float: left;
  }
`;

const Logo = styled(Link)`
  font-weight: 100;
  font-size: 37px;
  padding: 10px 20px 5px 20px;
  display: inline-block;

  ${min('tablet')} {
    padding: 20px 15px 0px 15px;
  }
`;

const NavigationLinks = styled.div`
  text-align: right;
  padding: 0px 5px 5px 5px;

  ${min('tablet')} {
    padding: 0px 10px 0px 0px;
  }
`;

const MainLink = styled(Link)`
  font-weight: 100;
  line-height: 1.4em;
  padding: 0 5px;
  font-size: 20px;

  ${min('tablet')} {
    font-size: 24px;
    padding: 0;
    display: block;
  }
`;

const SmallLink = styled(Link)`
  font-weight: 300;
  line-height: 1.6em;
  padding: 0 3px;
  font-size: 12px;

  ${min('tablet')} {
    font-size: 13px;
    padding: 0;
    display: block;
  }
`;

const Contact = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 7px 7px;
  justify-content: space-between;

  ${min('tablet')} {
    display: flex;
  }
`;

export const Navigation = () => (
  <NavigationWrapper>
    <Logo><a style="font-style: thin;" href="/">
      ETHAN <span css="letter-spacing: 1px;">DUFFY</span></a>	
<a href="/de/"><img src={flags} ALIGN="right"></img></a>
</Logo>
    <NavigationLinks>
      <MainLink to="/factual">factual</MainLink>
      <MainLink to="/scripted">scripted</MainLink>
      <MainLink to="/productions">productions</MainLink>
    </NavigationLinks>

    <NavigationLinks>
      <SmallLink to="/wedding">Wedding</SmallLink>
      <SmallLink to="/corporate">Corporate</SmallLink>
      <SmallLink to="/promotional">Promotional</SmallLink>
      <SmallLink to="/documentary">Documentary</SmallLink>
      <SmallLink to="/liveperformance">Live Performance</SmallLink>
    </NavigationLinks>

    <Contact>
      <a href="mailto:ethan.md@gmail.com">
        <img src={emailIcon} alt="e-mail" />
      </a>
      <a href="https://plus.google.com/u/0/101280860956527179760/">
        <img src={gPlusIcon} alt="google+" />
      </a>
      <a href="http://www.linkedin.com/pub/ethan-duffy/36/317/795">
        <img src={linkedInIcon} alt="linkedin" />
      </a>
      <a href="https://www.twitter.com/escalinci">
        <img src={twitterIcon} alt="twitter" />
      </a>
    </Contact>
  </NavigationWrapper>
);
