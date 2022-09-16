window.addEventListener("DOMContentLoaded", () => {
  const rooms = document.querySelectorAll(".room");
  var turn = "red";
  var turnCount = 0;
  const redTurn = document.getElementById("red-turn");
  const yellowTurn = document.getElementById("yellow-turn");
  const winner = document.getElementById("winner");
  let array = new Array(9).fill(0);

  //   check turn
  if (turn == "red") {
    redTurn.classList.add("currnet-turn");
    yellowTurn.classList.remove("currnet-turn");
  } else {
    yellowTurn.classList.add("currnet-turn");
    redTurn.classList.remove("currnet-turn");
  }

  // loop to add event listener

  rooms.forEach((room, i) => {
    room.addEventListener("click", () => {
      room.children[0].src = `/assets/imgs/${turn}.png`;
      array[i] = turn;
      if (turn == "red") {
        turn = "yellow";
        redTurn.classList.remove("currnet-turn");
        yellowTurn.classList.add("currnet-turn");
      } else {
        turn = "red";
        yellowTurn.classList.remove("currnet-turn");
        redTurn.classList.add("currnet-turn");
      }
      turnCount += 1;
      console.log(array);
      if (turnCount >= 6) {
        if (checkWin(array) != null) {
          winner.innerHTML = checkWin(array);
        }
      }
    });
  });
});

const checkWin = (array) => {
  // array1 = [array[0],array[1],array[2]];
  // array2 = [array[3],array[4],array[5]];
  // array3 = [array[6],array[7],array[8]];

  if (array[0] == array[1] && array[1] == array[2]) {
    return array[0];
  } else if (array[3] == array[4] && array[4] == array[5]) {
    return array[3];
  } else if (array[6] == array[7] && array[7] == array[8]) {
    return array[6];
  } else if (array[0] == array[3] && array[3] == array[6]) {
    return array[0];
  } else if (array[1] == array[4] && array[4] == array[7]) {
    return array[1];
  } else if (array[2] == array[5] && array[5] == array[8]) {
    return array[2];
  } else if (array[0] == array[4] && array[4] == array[8]) {
    return array[0];
  } else if (array[2] == array[4] && array[4] == array[6]) {
    return array[2];
  } else {
    return null;
  }
};
