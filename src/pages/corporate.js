import React from 'react';

import Layout from 'components/Layout';

export default () => (
  <Layout>
    <header>Corporate Video</header>

    <article>
      If you need more effective communication across your organisation, or have
      parts of your workforce who don't feel listened to or valued, video can be
      a valuable tool to address those problems. Explaining new ideas in an
      engaging way and putting a face to them through a recording is the next
      best thing to sitting down with every employee and speaking to them
      personally. Where I can give a hand is making sure those on screen,
      wherever they come from in the organisation, are coming across in the best
      way, and to be succinct in editing while adding a little extra!
    </article>

    <figure className="video-container video-container__youtube">
      <iframe
        src="https://www.youtube.com/embed/_9XMSOYoXi4"
        frameborder="0"
        allowfullscreen
      />
    </figure>

    <article>
      Morecambe NHS Trust has thousands of employees across several sites, many
      in rural areas. This video, to kickstart an engagement project which has
      since shepherded dozens of improvement projects, puts people in touch with
      the sponsors of the project across the Trust's different hospitals, both
      demonstrating their enthusiasm and the connection across the whole Trust.
    </article>
  </Layout>
);