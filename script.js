document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".eye").forEach(eye => {
    const pupil = eye.querySelector(".pupil");

    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    const maxMove = 40;
    const x = Math.cos(angle) * maxMove;
    const y = Math.sin(angle) * maxMove;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});