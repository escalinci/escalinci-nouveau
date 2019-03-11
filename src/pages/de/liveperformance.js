import React from 'react';

import { Layout } from 'components/de/Layoutde';
import { Article } from 'components/Article';
import { Header } from 'components/Header';
import { VideoWrapper } from 'components/VideoWrapper';

export default () => (
  <Layout>
    <Header>Live Performance - Music/Dance/Theatre</Header>

    <Article>
      We&#39;ve all seen terrible-looking footage of gigs or plays - this is
      because live performance throws up unique challenges. With cameras and
      lenses that are capable in low-light, and setups that work in small
      venues, I am ideally placed to capture your performance without taking
      anything away from it.
    </Article>

    <VideoWrapper>
      <iframe
        title="Brute Trailer"
        src="https://player.vimeo.com/video/58795237"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>

    <Article>
      This is a short trailer, built from a 15-minute recording of a dance
      piece. On the whole, this is a complete marvel, of what can be achieved
      with modern cameras in near darkness. If you want me to do something like
      this for you, yours will look even better ;) It is a combination of the
      last two rehearsals of this dance one one camera in order to get different
      shots, which works, but was very tricky, modern dance is not big on
      continuity!
    </Article>
  </Layout>
);
