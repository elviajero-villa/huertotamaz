if (screen.width > 768) {
  const cursor = document.querySelector('#cursor');
  let mouse = { x: 87, y: 40 };
  let pos = { x: 0, y: 0 };
  const speed = 0.1; // between 0 and 1

  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
  };

  const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener('mousemove', updateCoordinates);

  function loop() {
    updatePosition();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}