/* ------------------------------------------------------------- */
/*               APPLY EFFECTS ONLY ON HOME PAGE                 */
/* ------------------------------------------------------------- */

const isHome = document.body.classList.contains("home-page");


/* ------------------------------------------------------------- */
/*                  FLOATING BUBBLES / PARTICLES                 */
/* ------------------------------------------------------------- */

if (isHome) {
  const body = document.body;

  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('floating');
    bubble.style.width = `${20 + Math.random() * 40}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.position = "fixed";
    bubble.style.background = "rgba(255, 255, 255, 0.35)";
    bubble.style.borderRadius = "50%";
    bubble.style.filter = "blur(2px)";
    bubble.style.animation = `floatUp ${6 + Math.random() * 5}s infinite ease-in-out`;
    body.appendChild(bubble);
  }

  const styleBubble = document.createElement("style");
  styleBubble.innerHTML = `
  @keyframes floatUp {
    0% { transform: translateY(0px); opacity: 0.4; }
    50% { transform: translateY(-25px); opacity: 0.7; }
    100% { transform: translateY(0px); opacity: 0.4; }
  }
  `;
  document.head.appendChild(styleBubble);
}


/* ------------------------------------------------------------- */
/*      BACKGROUND GRADIENT MOVES WITH CURSOR (HOME ONLY)        */
/* ------------------------------------------------------------- */

if (isHome) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // Keep image + gradient overlay
    document.body.style.background = `
      linear-gradient(120deg, rgba(255,214,232,0.4) ${x}%, rgba(203,180,227,0.4) ${y}%),
      url("images/homeBG.jpg") center/cover fixed no-repeat
    `;
  });
}

/* ------------------------------------------------------------- */
/*        FADE-IN REMOVED — NO ANIMATION ON MENU CARDS          */
/* ------------------------------------------------------------- */
