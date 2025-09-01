// feature
export function renderFeature({ leftImg, rightTopImg, rightBottomImg }) {
    return `
    <section class="feature" aria-labelledby="feature-heading">
      <article class="feature__content">
        <h1 id="feature-heading" class="feature__title">What does cooking mean?</h1>
        <p class="feature__text">
          Is it simply applying heat to a food product? A way of making certain food safe to eat? 
          Or a way to create flavour and make food more appealing? This is part of what Hervé This, 
          the father of molecular gastronomy, has dedicated his life to exploring. We spoke to him 
          about what his experiments reveal—and the secret to the perfect egg.
        </p>

        <p class="feature__eyebrow" aria-hidden="true">The perfect egg</p>
        <p class="feature__kicker"><strong>Keep water between 67-68&nbsp;°C for a flavourful, tender yolk.</strong></p>
      </article>

      <div class="feature__grid">
        <figure class="feature__media feature__media--large">
          <img src="${leftImg}" alt="Pot simmering over an open fire with a bundle submerged in water" loading="lazy" />
        </figure>

        <div class="feature__stack">
          <figure class="feature__media">
            <img src="${rightTopImg}" alt="Chef annotating flavour tests on a tiled work surface" loading="lazy" />
          </figure>
          <figure class="feature__media">
            <img src="${rightBottomImg}" alt="Tray of soft-boiled eggs showing different yolk textures" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  `;
}