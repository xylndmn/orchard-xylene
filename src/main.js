import './style.css';
import { setupImageModal } from './modal.js';
import { renderFeature } from './components/feature.js';
import { renderTaste } from './components/taste.js';

import leftImg from '/left.webp';
import rightTopImg from '/right-top.webp';
import rightBottomImg from '/right-bottom.webp';
import redImg from '/tight-top.webp';
import greenImg from '/tight-top-green.webp';
import whiteImg from '/tight-top-white.webp';

document.querySelector('#app').innerHTML = `
  <main id="main-content">
    ${renderFeature({ leftImg, rightTopImg, rightBottomImg })}
    ${renderTaste({ redImg, greenImg, whiteImg })}
  </main>
`;

// Capture all anchor clicks at the document level so future cards/links added to the DOM
// are automatically handled without re-binding listeners.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  console.log('Card link clicked:', a);
});

// ---- image modal ----
setupImageModal();