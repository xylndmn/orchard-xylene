// taste
export function renderTaste({ redImg, greenImg, whiteImg }) {
    return `
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
  `;
}