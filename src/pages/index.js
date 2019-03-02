import React from 'react';

import Layout from 'components/Layout';

export default () => (
  <Layout>
    <br />

    <header>Videographer and Editor - Based in Hamburg, Germany</header>

    <figure className="video-container video-container__youtube">
      <iframe
        src="https://www.youtube.com/embed/6KBAcoj1Jlw"
        frameborder="0"
        allowfullscreen
      />
    </figure>

    <article>
      Hello there. I'm Ethan Duffy, if you click on the video above, you can
      have a look at some clips from videos I've produced. It's quite a variety,
      so if you're interested in something specific, hopefully the different
      categories on this site have something relevant for you. I also work as a
      runner, having a wide range of experience on a lot of good shows, and I've
      been part of the camera team on some scripted shows.{' '}
    </article>
  </Layout>
);
