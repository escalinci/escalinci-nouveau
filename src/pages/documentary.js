import React from 'react';

import { Layout } from 'components/Layout';
import { Article } from 'components/Article';
import { VideoWrapper } from 'components/VideoWrapper';

export default () => (
  <Layout>
  <Header>Documentary</Header>
    <VideoWrapper>
      <iframe
        title="Building Brute"
        src="https://player.vimeo.com/video/66465915"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      Documentary film-making is an ideal way to test and expand your limits as
      a film-maker. The 15-minute documentary above was filmed in a day, with a
      single camera, and, as well as learning a lot about contemporary dance,
      I&#39;ve become a more reactive, resourceful filmmaker, better able to
      tell stories on the fly, and cover events as they happen. It was very
      important to me to make something the company could use to promote their
      dance works, but also to make something accessible to people who don&#39;t
      know a lot about dance (people like me!). Everybody can relate to the
      &#34;it&#39;s the big day&#34; storyline, and I try to delve into
      Tom&#39;s methodology, and use box pops with the audience to try and get
      across the feel and impact of the piece.
    </Article>

    <VideoWrapper>
      <iframe
        title="Retirement Age"
        src="https://www.youtube.com/embed/OVdLNIMY5B0"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      Made for the (now unfortunately defunct) Channel M, this is an example of
      me trying to articulate a story through the images shown. Whilst he talks
      about retirement, hopefully the images of him at work accentuate the
      viewer&#39;s understanding.
    </Article>
  </Layout>
);
