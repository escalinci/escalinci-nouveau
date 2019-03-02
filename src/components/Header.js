import React from 'react';
import { Link } from 'gatsby';

import emailIcon from 'images/shareicons/email_32.png';
import gPlusIcon from 'images/shareicons/google_plus_32.png';
import linkedInIcon from 'images/shareicons/linkedin_32.png';
import twitterIcon from 'images/shareicons/twitter_32.png';

export default () => (
  <div id="sidebar">
    <div id="logo">
      <Link to="/">
        <span id="logo1" className="logoFont">
          ETHAN
        </span>
        <span id="logo2" className="logoFont">
          DUFFY
        </span>
      </Link>
    </div>
    <div id="navigation">
      <Link className="mainlink" to="/factual">
        factual
      </Link>
      <Link className="mainlink" to="/scripted">
        scripted
      </Link>
      <Link className="mainlink" to="/productions">
        productions
      </Link>
    </div>
    <div id="navigation2">
      <Link className="smalllink" to="/wedding">
        Wedding
      </Link>
      <Link className="smalllink" to="/corporate">
        Corporate
      </Link>
      <Link className="smalllink" to="/promotional">
        Promotional
      </Link>
      <Link className="smalllink" to="/documentary">
        Documentary
      </Link>
      <Link className="smalllink" to="/liveperformance">
        Live Performance
      </Link>
    </div>
    <div id="contact">
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
    </div>
  </div>
);
