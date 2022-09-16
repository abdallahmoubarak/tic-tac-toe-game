window.addEventListener("DOMContentLoaded", () => {
  const rooms = document.querySelectorAll(".room");

  rooms.forEach((room) => {
    room.addEventListener("click", () => {
      room.children[0].src = "/assets/imgs/red.png";
    });
  });
});
