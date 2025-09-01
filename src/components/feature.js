// feature.js
export function renderFeature(feature) {
  const { title, text, eyebrow, kicker, images } = feature;

  console.assert(images?.left && images?.rightTop && images?.rightBottom, 'Feature images missing');

  return `
    <section class="feature" aria-labelledby="feature-heading">
      <article class="feature__content">
        <h1 id="feature-heading" class="feature__title">${title}</h1>
        <p class="feature__text">${text}</p>
        <p class="feature__eyebrow" aria-hidden="true">${eyebrow}</p>
        <p class="feature__kicker"><strong>${kicker}</strong></p>
      </article>

      <div class="feature__grid">
        <figure class="feature__media feature__media--large">
          <img src="${images.left}" alt="Pot simmering over an open fire with a bundle submerged in water" loading="lazy" />
        </figure>

        <div class="feature__stack">
          <figure class="feature__media">
            <img src="${images.rightTop}" alt="Chef annotating flavour tests on a tiled work surface" loading="lazy" />
          </figure>
          <figure class="feature__media">
            <img src="${images.rightBottom}" alt="Tray of soft-boiled eggs showing different yolk textures" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  `;
}