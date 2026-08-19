const sfx = {
  clickDown: new Audio('/audio/click-1.mp3'),
  clickUp: new Audio('/audio/click-2.mp3'),
}

export function playSound(sfx) {
  const audio = sfx.cloneNode();
  if (localStorage.getItem('muted') !== 'true') audio.play();
  audio.addEventListener('ended', () => {
    audio.remove();
  });
}

let baseSfxCreated = false;
export function createBaseSfx() {
  if (baseSfxCreated) return;
  baseSfxCreated = true;

  const selectors = ['button', 'div.btn', 'label.toggle'];

  for (const selector of selectors) {
    document.addEventListener('mousedown', (e) => {
      if (e.target.matches(selector)) {
        playSound(sfx.clickDown);
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (e.target.matches(selector)) {
        playSound(sfx.clickUp);
      }
    });
  }
}