import React from 'react';

import { Layout } from 'components/Layout';
import { Article } from 'components/Article';
import { Header } from 'components/Header';
import { VideoWrapper } from 'components/VideoWrapper';

export default () => (
  <Layout>
    <Header>Promotional Video</Header>

    <Article>
      Smaller, cheaper cameras have enabled any business or organisation to get
      themselves on video. But often, to have the best impact, or to portray the
      organisation properly, the same skills that are used in broadcast
      television have to come into play. Below are some examples where I&#39;ve
      given organisations something they can use to easily communicate what
      they&#39;re about to newcomers.
    </Article>

    <VideoWrapper>
      <iframe
        title="Space for Cycling"
        src="https://www.youtube.com/embed/7wX_RiE9qZI"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      National charity CTC are running the space 4 cycling campaign, asking for
      5 basic objectives to enable everyday cycling. This is a video of the
      demonstration at the Labour party conference, summarising the points in a
      concise way and bringing through the fun and excitement of the gathering.
    </Article>

    <VideoWrapper>
      <iframe
        title="Means of Feedback"
        src="https://www.youtube.com/embed/l_3KXohyAI4"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      Mark Devereux was promoting his first collection of works. Starting off
      with a short 5 day gallery showing, he wanted to have something to show
      for it afterwards. This piece was filmed in short sessions over two days,
      giving the artists a little break from the build, and capturing the
      opening night.
    </Article>

    <VideoWrapper>
      <iframe
        title="Glycaemic Index"
        src="https://www.youtube.com/embed/x8scXmMPI3U"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      Part of a series of videos exploring healthy eating, the challenge was to
      try to make these videos as engaging and appealing as normal food
      programming. These were filmed to immensely tight deadlines, but I managed
      to work in the occasional shot that showed off the food.
    </Article>

    <VideoWrapper>
      <iframe
        title="ACS Rehearsal"
        src="https://www.youtube.com/embed/AR8x4w6pivI"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      I tried with this video to put across an impression of what it is like to
      be in this choir. Thankfully the Choir director was very articulate and
      passionate.
    </Article>
  </Layout>
);
