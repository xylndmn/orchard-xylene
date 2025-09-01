// modal.js
let __modalInit = false;
export function setupImageModal() {
  if (__modalInit) return;
  __modalInit = true;

  const images = document.querySelectorAll(".feature__media img, .taste__img");
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role","dialog");
  modal.setAttribute("aria-modal","true");
  modal.setAttribute("aria-label","Image preview");
  modal.innerHTML = `<img class="modal-img" alt="">`;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector(".modal-img");
  let lastFocus = null;

  function openModal(src, alt) {
    lastFocus = document.activeElement;
    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
    modal.focus?.();
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lastFocus?.focus?.();
  }

  images.forEach(img => {
    img.tabIndex = 0;
    const open = () => {
      const hiRes = img.src.replace(".webp","@3x.webp");
      modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = img.src; };
      openModal(hiRes, img.alt);
    };
    img.addEventListener("click", open);
    img.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });

  modalImg.addEventListener("click", e => e.stopPropagation());
  modal.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}