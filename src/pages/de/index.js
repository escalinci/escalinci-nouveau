import React from 'react';

import { Layout } from 'components/Layout';
import { Article } from 'components/Article';
import { Header } from 'components/Header';
import { VideoWrapper } from 'components/VideoWrapper';

export default () => (
  <Layout>
    <br />

    <Header>Videographer and Editor - Based in Hamburg/UK</Header>

    <VideoWrapper>
      <iframe
        title="Showreel"
        src="https://www.youtube.com/embed/6KBAcoj1Jlw"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      Hello there. I&#39;m Ethan Duffy, if you click on the video above, you can
      have a look at some clips from videos I&#39;ve produced. It&#39;s quite a
      variety, so if you&#39;re interested in something specific, hopefully the
      different categories on this site have something relevant for you. I also
      work as a runner, having a wide range of experience on a lot of good
      shows, and I&#39;ve been part of the camera team on some scripted shows.{' '}
    </Article>
  </Layout>
);
