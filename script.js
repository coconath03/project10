const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const lockScreen = document.getElementById('lockScreen');
const letterScreen = document.getElementById('letterScreen');
const heartsContainer = document.getElementById('heartsContainer');

// Transition from envelope to love letter
openBtn.addEventListener('click', () => {
  lockScreen.classList.add('hidden');
  setTimeout(() => {
    letterScreen.classList.remove('hidden');
  }, 300);
});

// Option to close letter back to start
closeBtn.addEventListener('click', () => {
  letterScreen.classList.add('hidden');
  setTimeout(() => {
    lockScreen.classList.remove('hidden');
  }, 300);
});

// Generate floating white hearts, film, and sparkle background icons
function createFloatingIcon() {
  const icon = document.createElement('div');
  icon.classList.add('floating-heart');
  
  // Custom array with white hearts, film emojis, and sparkles
  const iconList = ['🤍', '🎬', '🎞️', '✨', '🤍'];
  icon.innerText = iconList[Math.floor(Math.random() * iconList.length)];
  
  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.animationDuration = Math.random() * 3 + 3 + 's';
  icon.style.fontSize = Math.random() * 15 + 15 + 'px';
  
  heartsContainer.appendChild(icon);
  
  setTimeout(() => {
    icon.remove();
  }, 6000);
}

setInterval(createFloatingIcon, 400);