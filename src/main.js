import './style.css';

// modal
import { setupImageModal } from './modal.js';

// components
import { renderFeature } from './components/feature.js';
import { renderTaste } from './components/taste.js';

// data
import { content } from './content.js';

document.querySelector('#app').innerHTML = `
  <main id="main-content">
    ${renderFeature(content.feature)}
    ${renderTaste(content.taste)}
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