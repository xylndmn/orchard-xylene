// taste
export function renderTaste(tasteItems = []) {
  return `
    <section class="taste" aria-labelledby="taste-heading">
      <div class="taste__wrap">
        <h2 id="taste-heading" class="taste__title">TASTE THE COLOURS</h2>
        <hr class="taste__rule" aria-hidden="true" />
        <div class="taste__grid">
          ${tasteItems.map(item => `
            <figure class="taste__card">
              <img class="taste__img" src="${item.image}" alt="${item.color} jelly on a spoon" loading="lazy" />
              <a href="${item.link}" class="taste__link">
                <figcaption class="taste__caption">
                  <h3 class="taste__label">${item.color}</h3>
                  <p class="taste__text">${item.description}</p>
                </figcaption>
              </a>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}