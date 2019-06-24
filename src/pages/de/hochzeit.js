import React from 'react';

import { Layout } from 'components/de/Layoutde';
import { Article } from 'components/Article';
import { Header } from 'components/Header';
import { VideoWrapper } from 'components/VideoWrapper';

export default () => (
  <Layout>
    <Header>Wedding Videography</Header>

    <VideoWrapper>
      <iframe
        title="Wedding Day"
        src="https://www.youtube.com/embed/hnhk6kEtHOg?"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      <p>
        Making a record of one of the most important days of someone&#39;s life-
        there can be nothing as sensitive and individual, and so it should never
        be assumed that any two weddings would be best filmed the same way.
      </p>
      <p>
        With this in mind, I can offer anything from a short video that gives an
        impression of the day, to a longer video, using two cameras, including
        all speeches and readings in full, and messages for the couple from
        guests.
      </p>
      <p>
        With my background in documentary work I am able to fit the environment
        rather than making the environment fit me. As good as you&#39;d want
        your record to be, it can&#39;t overshadow the day. Anyway, the happy
        couple from the video above can put it better than I can!
      </p>
    </Article>
    <Article>
      &#34;We really cannot express how much we love both videos - they are so
      fantastic and really show off the wonderful day we had! They have made us
      so happy and we are very very grateful.&#34; &#34;We are both so delighted
      that you have done this for us and cannot thank you enough, they are
      beautiful pieces of art but also mean so much more to us. We could not be
      everywhere at once on the day so it is positively thrilling to see the
      bits we missed as well as to remember the parts we enjoyed.&#34; - Dan and
      Elizabeth
    </Article>
  </Layout>
);
