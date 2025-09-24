const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, kapan kita akan makan mie pangsit?\n\nKapan aku akan mendapat hidayah dalam judul skripsinya\n\nI just wonder… aku ngapain coba bikin kaya gini..\n\nAnyway, I hope you're doing okay, akhir kata, saya PULANG minggu depan`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}