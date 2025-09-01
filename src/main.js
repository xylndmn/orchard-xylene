import './style.css'
import { setupImageModal } from './modal.js'

import leftImg from '/left.webp'
import rightTopImg from '/right-top.webp'
import rightBottomImg from '/right-bottom.webp'
import redImg from '/tight-top.webp'
import greenImg from '/tight-top-green.webp'
import whiteImg from '/tight-top-white.webp'

document.querySelector('#app').innerHTML = `
  <main id="main-content">
    <section class="feature" aria-labelledby="feature-heading">
      <article class="feature__content">
        <h1 id="feature-heading" class="feature__title">What does cooking mean?</h1>
        <p class="feature__text">
          Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create
          flavour and make food more appealing? This is part of what Hervé This, the father of molecular gastronomy,
          has dedicated his life to exploring. We spoke to him about what his experiments reveal—and the secret to the
          perfect egg.
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

    <section class="taste" aria-labelledby="taste-heading">
			<div class="taste__wrap">
				<h2 id="taste-heading" class="taste__title">TASTE THE COLOURS</h2>
				<hr class="taste__rule" aria-hidden="true" />
				<div class="taste__grid">
					
					<figure class="taste__card">
					<img class="taste__img" src="${redImg}" alt="Red jelly on a spoon" loading="lazy" />
						<a href="#red" class="taste__link">
							<figcaption class="taste__caption">
								<h3 class="taste__label">RED</h3>
								<p class="taste__text">Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
							</figcaption>
						</a>
					</figure>

					<figure class="taste__card">
					<img class="taste__img" src="${greenImg}" alt="Green jelly on a spoon" loading="lazy" />
						<a href="#green" class="taste__link">
							<figcaption class="taste__caption">
								<h3 class="taste__label">Green</h3>
								<p class="taste__text">Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.</p>
							</figcaption>
						</a>
					</figure>

					<figure class="taste__card">
					<img class="taste__img" src="${whiteImg}" alt="White jelly on a spoon" loading="lazy" />
						<a href="#white" class="taste__link">
							<figcaption class="taste__caption">
								<h3 class="taste__label">White</h3>
								<p class="taste__text">White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
							</figcaption>
						</a>
					</figure>
				</div>
			</div>
		</section>
  </main>
`