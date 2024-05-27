const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");

var timer,
    maxTime = 0,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;

const startTestBtn = document.getElementById("startTest");

startTestBtn.addEventListener("click", function () {
    var selectedOption = document.getElementById("selectOption").value;
    var secondContainer = document.getElementById("secondContainer");
    secondContainer.style.display = "flex";
    var timerDisplay = document.querySelector(".time span");

    switch (selectedOption) {
        case "halfMinute":
            maxTime = 29;
            timerDisplay.textContent = '0:30';

            break;
        case "oneMinute":
            maxTime = 59;
            timerDisplay.textContent = '1:00';
            break;
        case "twoMinute":
            maxTime = 119;
            timerDisplay.textContent = '2:00';
            break;
        case "threeMinute":
            maxTime = 179;
            timerDisplay.textContent = '3:00';
            break;
        case "fiveMinute":
            maxTime = 299;
            timerDisplay.textContent = '5:00';
            break;
        case "tenMinute":
            maxTime = 599;
            timerDisplay.textContent = '10:00';
            break;
        default:
            maxTime = 59;
            timerDisplay.textContent = '1:00';
            break;
    }

    document.getElementById("firstContainer").style.display = "none";
});

let timerStarted = false;

function startTimerIfNotStarted() {
    if (!timerStarted) {

        startTimer(maxTime);
        timerStarted = true;
    }
}

document.addEventListener('keydown', function (event) {
    var key = event.key || event.keyCode;

    if (key === 'Backspace') {
        event.preventDefault();
    }
});


let wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function (event) {
    inpField.focus();
});

wrapper.addEventListener("click", function (event) {
    inpField.focus();
    startTimerIfNotStarted();
});

document.addEventListener("keydown", function (event) {
    inpField.focus();
});

document.addEventListener("keydown", function (event) {
    inpField.focus();
    startTimerIfNotStarted();
}); document.addEventListener("keydown", function (event) {
    inpField.focus();
    startTimerIfNotStarted();
});

inpField.addEventListener("focus", function () {
    startTimerIfNotStarted();
});


function startTimer(duration) {
    var timerDisplay = document.querySelector(".time span");
    timeLeft = duration;

    var timerInterval = setInterval(function () {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (--timeLeft < 0) {
            clearInterval(timerInterval);
            let typingTextContainer = document.querySelector('.typing-text');
            typingTextContainer.style.transition = 'scroll-top 0.5s ease-in-out';
            typingTextContainer.scrollTo = 0;
            loadParagraph();
        }
    }, 1000);
}

function loadParagraph() {
    const typingText = document.querySelector(".typing-text p");
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    inpField.focus();
    var charIndex = 0;
}



function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;

        }
        let typingTextContainer = document.querySelector('.typing-text');
        if ((charIndex - 60) % 60 == 0) {
            typingTextContainer.style.transition = 'scroll-top 0.5s ease-in-out';
            typingTextContainer.scrollTop += 20.5;
        }

        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;

    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}


loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", function () {
    location.reload();
});