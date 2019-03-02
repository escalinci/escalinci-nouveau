import React from 'react';

import Layout from 'components/Layout';

export default () => (
  <Layout>
    <header>Live Performance - Music/Dance/Theatre</header>

    <article>
      We've all seen terrible-looking footage of gigs or plays - this is because
      live performance throws up unique challenges. With cameras and lenses that
      are capable in low-light, and setups that work in small venues, I am
      ideally placed to capture your performance without taking anything away
      from it.
    </article>

    <figure className="video-container">
      <iframe
        src="https://player.vimeo.com/video/58795237"
        frameborder="0"
        allowFullScreen
      />
    </figure>

    <article>
      This is a short trailer, built from a 15-minute recording of a dance
      piece. On the whole, this is a complete marvel, of what can be achieved
      with modern cameras in near darkness. If you want me to do something like
      this for you, yours will look even better ;) It is a combination of the
      last two rehearsals of this dance one one camera in order to get different
      shots, which works, but was very tricky, modern dance is not big on
      continuity!
    </article>
  </Layout>
);
