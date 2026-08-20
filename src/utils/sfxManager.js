export const sfx = {
  clickDown: new Audio('/audio/click-1.mp3'),
  clickUp: new Audio('/audio/click-2.mp3'),
  win: new Audio('/audio/win.mp3'),
  nextLevel: new Audio('/audio/next-level.mp3'),
  fail: new Audio('/audio/fail.mp3'),
  chopSquirrel: new Audio('/audio/chop-squirrel.mp3'),
  chop1: new Audio('/audio/chop-1.mp3'),
  chop2: new Audio('/audio/chop-2.mp3'),
  chop3: new Audio('/audio/chop-3.mp3'),
}

export function playSound(sfx) {
  const audio = sfx.cloneNode();
  if (localStorage.getItem('muted') !== 'true') audio.play();
  audio.addEventListener('ended', () => {
    audio.remove();
  });
}

export function playRandomChop() {
  const chopSounds = [sfx.chop1, sfx.chop2, sfx.chop3];
  const randomIndex = Math.floor(Math.random() * chopSounds.length);
  playSound(chopSounds[randomIndex]);
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