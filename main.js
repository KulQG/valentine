const title = document.querySelector(".title");
const whatButton = document.querySelector(".what-button");
const activeBtnClass = "what-button_active";
const firstMessage = ["Что-то", "случилось!!!"];
const secondMessage = ["Кажется...", "...", "Я..."];
const thirdMessage = ["Я", "тебя", "люблю"];
const firstAnswer = "Что случилось???";

let state = 1;

async function printSequentialLetters(
  timer,
  words,
  indexWord = 0,
  indexLetter = 0
) {
  if (indexWord < words.length) {
    if (indexLetter < words[indexWord].length) {
      title.textContent += words[indexWord][indexLetter];
      indexLetter++;
    } else {
      title.textContent += " "; // Добавить пробел после слова
      indexWord++;
      indexLetter = 0; // Сбросить индекс буквы для нового слова
    }
    setTimeout(() => {
      printSequentialLetters(timer, words, indexWord, indexLetter);
    }, timer);
  } else {
    if (state !== 3) {
      whatButton.textContent = firstAnswer;
      whatButton.classList.add(activeBtnClass);
      whatButton.removeAttribute("disabled", true);
      whatButton.addEventListener("click", clear);
    } else {
      setTimeout(() => {
        title.classList.add('title_disabled')
        document.querySelector('.sticker').classList.add('sticker_active')
      }, 2000)
    }
  }
}

const clear = () => {
  whatButton.classList.remove(activeBtnClass);
  whatButton.setAttribute("disabled", true);
  title.textContent = "";
  whatButton.removeEventListener("click", clear);
  state++;
  console.log(currentMessage());
  printSequentialLetters(100, currentMessage());
};

function currentMessage() {
  switch (state) {
    case 1: {
      return firstMessage;
    }
    case 2: {
      return secondMessage;
    }
    case 3: {
      return thirdMessage;
    }
  }
}

printSequentialLetters(100, currentMessage());
