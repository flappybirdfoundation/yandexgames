/* ...existing code... */
const enterBtn = document.getElementById('enterFs');
const exitBtn = document.getElementById('exitFs');
const app = document.documentElement;

function updateButtons() {
  const fs = document.fullscreenElement || document.webkitFullscreenElement;
  if (fs) {
    enterBtn.hidden = true;
    exitBtn.hidden = false;
  } else {
    enterBtn.hidden = false;
    exitBtn.hidden = true;
  }
}

enterBtn.addEventListener('click', async () => {
  try {
    if (app.requestFullscreen) await app.requestFullscreen();
    else if (app.webkitRequestFullscreen) await app.webkitRequestFullscreen();
  } catch (e) {
    console.warn('Fullscreen request failed', e);
  }
});

exitBtn.addEventListener('click', async () => {
  try {
    if (document.exitFullscreen) await document.exitFullscreen();
    else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
  } catch (e) {
    console.warn('Exit fullscreen failed', e);
  }
});

document.addEventListener('fullscreenchange', updateButtons);
document.addEventListener('webkitfullscreenchange', updateButtons);
updateButtons();
/* ...existing code... */

