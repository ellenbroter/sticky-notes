const userNote = document.querySelector("textarea");
const submitButton = document.querySelector(".add-note-button");
const notesContainer = document.querySelector(".notes-container");
const errorMessage = document.querySelector(".error-message");
const colors = [
  "#C7EAE4",
  "#A7E8BD",
  "#FCBCB8",
  "#EFA7A7",
  "#FFD972",
];
let exceedCharLimit = false;

userNote.addEventListener("input", () => {
  errorMessage.style.display = "none";
  exceedCharLimit = false;
  if (userNote.textLength >= 200) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "You have already typed 200 characters!";
    exceedCharLimit = true;
  }
});

const addNotes = () => {
  if (userNote.value.trim() === "") {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter a note!";
    return;
  }
  if (exceedCharLimit) {
    return;
  }
  const randomRotateNum = Math.floor(Math.random() * (10 - -10)) + -10;
  const randomColorNum = Math.floor(Math.random() * (5 - 0)) + 0;

  const stickyDiv = document.createElement("div");
  stickyDiv.classList.add("sticky-div");
  notesContainer.append(stickyDiv);
  stickyDiv.textContent = userNote.value;
  stickyDiv.style.transform = `rotate(${randomRotateNum}deg)`;
  stickyDiv.style.backgroundColor = colors[randomColorNum];

  userNote.value = "";
};

submitButton.addEventListener("click", addNotes);
