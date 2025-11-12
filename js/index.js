let qs = [];

if (!localStorage.getItem("cats")) {
  window.location.href = "https://hermaak.github.io/quiz/";
} else {
  const cats = localStorage.getItem("cats").split(",");
  qs = questions.filter((q) => cats.includes(String(q.id)));
  for (const c of cats) {
    for (const q of questions) {
      if (q.filter.includes(filters[parseInt(c) + 1].label)) {
        qs.push(q);
      }
    }
  }
}

// Init
let qIndex = 0;

correct = 0;
q = 0;

init();

async function init() {
  const exam = qs[qIndex].exam ? `<b>[${qs[qIndex].exam}] </b>` : "";
  document.querySelector(".question").innerHTML =
    `<span>${exam} ${qs[qIndex].label}</span>` + `<img src="${qs[qIndex].img}" />`;

  document.querySelector(".points").innerHTML = `<span>Q. #${qIndex + 1} / ${
    qs.length
  } (${correct} correctas)</span><a href='https://hermaak.github.io/quiz'><i class='la la-arrow-left'></i> Voltar</a>`;

  let buttons = "";

  qs[qIndex].answers.forEach(
    (a) => (buttons += `<button id='btn-${a}' value='${a}'>${a}</butto>`)
  );

  document.querySelector(".answers").innerHTML = buttons;

  document.querySelectorAll(".answers button").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.value === qs[qIndex].answer) {
        correct++;
        document.getElementById(`btn-${e.target.value}`).style.backgroundColor =
          "#2bccb1";

        qIndex = (qIndex + 1) % qs.length;
        if (qIndex === 0) {
          correct = 0;
          alert("Wau!");
        }
      } else {
        document.getElementById(`btn-${e.target.value}`).style.backgroundColor =
          "red";
        document.getElementById(
          `btn-${qs[qIndex].answer}`
        ).style.backgroundColor = "#2bccb1";
        document.getElementById(`btn-${qs[qIndex].answer}`).style.color =
          "#fff";

        correct = 0;
        qIndex = 0;
      }

      document.getElementById(`btn-${e.target.value}`).style.color = "#fff";

      setTimeout(() => {
        init();
        document.querySelector(".points").innerHTML = `<span>Q. #${qIndex + 1} / ${
          qs.length
        } (${correct} correctas)</span><a href='https://hermaak.github.io/quiz'><i class='la la-arrow-left'></i> Voltar</a>`;
      }, 3000);
    });
  });
}
