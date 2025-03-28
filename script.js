document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(button => {
      button.addEventListener("mouseenter", () => {
          button.style.transform = "scale(1.1)";
          button.style.boxShadow = "0 0 10px red";
      });

      button.addEventListener("mouseleave", () => {
          button.style.transform = "scale(1)";
          button.style.boxShadow = "none";
      });
  });

  const profilePic = document.querySelector(".profile-pic");
  profilePic.addEventListener("click", () => {
      profilePic.classList.add("rotate");
      setTimeout(() => profilePic.classList.remove("rotate"), 1000);
  });
});

// CSS for the rotation effect
const style = document.createElement("style");
style.innerHTML = `
  .rotate {
      animation: rotate 1s linear;
  }

  @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
  }
`;
var audio = new Audio("never-gonna-give-you-up.mp3"); // טעינת המוזיקה
audio.loop = true; // השיר יחזור על עצמו בלולאה

function playAudio() {
    audio.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction.");
    });

    document.removeEventListener("click", playAudio);
}

// מאזין ללחיצה הראשונה באתר כדי להפעיל את המוזיקה
document.addEventListener("click", playAudio);

// פונקציה להחלפת מצב ניגון / עצירה
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        document.getElementById("toggle-audio").innerText = "🔇 Stop Music";
    } else {
        audio.pause();
        document.getElementById("toggle-audio").innerText = "🔊 Play Music";
    }
}
document.addEventListener("mousemove", function(event) {
  let container = document.querySelector(".container");

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  let offsetX = (event.clientX - centerX) / centerX;
  let offsetY = (event.clientY - centerY) / centerY;

  let rotateY = offsetX * 30; // סיבוב לצדדים
  let rotateX = -offsetY * 30; // סיבוב למעלה ולמטה

  container.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
