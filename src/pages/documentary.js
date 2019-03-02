import React from 'react';

import Layout from 'components/Layout';

export default () => (
  <Layout>
    <figure className="video-container">
      <iframe
        src="https://player.vimeo.com/video/66465915"
        frameborder="0"
        allowFullScreen
      />
    </figure>

    <article>
      Documentary film-making is an ideal way to test and expand your limits as
      a film-maker. The 15-minute documentary above was filmed in a day, with a
      single camera, and, as well as learning a lot about contemporary dance,
      I've become a more reactive, resourceful filmmaker, better able to tell
      stories on the fly, and cover events as they happen. It was very important
      to me to make something the company could use to promote their dance
      works, but also to make something accessible to people who don't know a
      lot about dance (people like me!). Everybody can relate to the 'it's the
      big day' storyline, and I try to delve into Tom's methodology, and use box
      pops with the audience to try and get across the feel and impact of the
      piece.
    </article>

    <figure className="video-container video-container__youtube">
      <iframe
        src="https://www.youtube.com/embed/OVdLNIMY5B0?&"
        frameborder="0"
        allowfullscreen
      />
    </figure>

    <article>
      Made for the (now unfortunately defunct) Channel M, this is an example of
      me trying to articulate a story through the images shown. Whilst he talks
      about retirement, hopefully the images of him at work accentuate the
      viewer's understanding.
    </article>
  </Layout>
);
