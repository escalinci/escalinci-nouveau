import React from 'react';

import { Layout } from 'components/Layout';
import { Article } from 'components/Article';
import { Header } from 'components/Header';
import camera from 'images/camera.jpg';

export default () => (
  <Layout>
    <Header>Camera Trainee - Drama/Comedy</Header>
    <Article>
      <img
        css="float: right; padding-left: 1em; padding-bottom: 1em;"
        src={camera}
        alt="programmes"
      />
      <p>
        I have worked on location as a camera trainee, and am hopeful to move up
        to working as a clapper/loader.
      </p>
      <p>
        My first on-set experience was working on Waterloo Road, shadowing the
        camera team. More recently, I worked on Stella Series 1, and ITV's
        Jambusters.
      </p>
      <p>
        As a result I can get to grips with a team very quickly. I'm well versed
        in the duties of a trainee, and the roles of the rest of the team, as
        well as set etiquette and the rest, but I also find the most productions
        work slightly differently, so I'm also quite flexible.
      </p>
      <p>
        I was very appreciative to get to the interview stage for the skillset
        camera trainee placement scheme. This was both encouraging and daunting.
        I'm based in the North West and London, if you'd like to test me out, My
        contacts are at the bottom left of the page.
      </p>
    </Article>
  </Layout>
);
