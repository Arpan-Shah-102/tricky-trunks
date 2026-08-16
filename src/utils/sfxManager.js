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

export function addBaseSfx(element) {
  element.addEventListener('mousedown', () => {
    playSound(sfx.clickDown);
  });
  element.addEventListener('mouseup', () => {
    playSound(sfx.clickUp);
  });
}