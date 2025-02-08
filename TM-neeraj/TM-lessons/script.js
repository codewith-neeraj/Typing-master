const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");


window.onload = function () {
    // Define your paragraphs array here

    const typingText = document.querySelector(".typing-text p");
    var selectElement = document.getElementById("selectOption");

    // Function to load paragraph based on selected option
    function loadParagraph() {
        var selectedOption = selectElement.value;
        let selectedText;

        // Define paragraphs array with text for each option
        var paragraphs = [
            "qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj qwertf poiuyj ",
            "asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgf lkjhj asdfgfg ",
            "azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb azxcvg .,mnb azxcvg .,mnb azxcvg .,mnb azxcvg /.,mnb ",
            "123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 123454 09867 123454 09867 123454 09867 12345 09867 ",
            "wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good dutiful useful  ugly quil posts yak alert larger style shield wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good dutiful useful  ugly quil posts yak alert larger style shield wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good dutiful useful  ugly quil posts yak alert larger style shield wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good dutiful useful  ugly quil posts yak alert larger style shield wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good dutiful useful  ugly quil posts yak alert larger style shield wise fly ugly quil post tap yak alert offer idiot park early towel eagle whose judge their easily should other quality eight great that would wife with differ larger style yield right loyal laugh works owl height spiritual faith jail less house yoke shield are larks sails look agreed quake good ",
            "lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall glad glass flag salad shall dash had lag hag fall lakh half glad glass flag salad shall dash had lag hag fall lakh half lad jag all lass flag ask has flash fall hall as gash gas tall lad jag all lass flag ask has flash fall hall as gash gas tall ",
            "mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity peculiar exactly major chase zenith narrow body define purpose laziness maps defects prison spaces some limbs mile cabin nickle zila boxing fox veto vacant lamb quick blow hint screen mike fickle zebra valley drizzle number news values lock chart sixth knees spaces liable charity ",
            "12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 12345 098767 12345 098767 12345 098767 12345 09876 12345 098767 54910 86327 54910 86910 86327 549101 "
        ];

        switch (selectedOption) {
            case "top":
                selectedText = paragraphs[0];
                break;
            case "home":
                selectedText = paragraphs[1];
                break;
            case "bottom":
                selectedText = paragraphs[2];
                break;
            case "numbric":
                selectedText = paragraphs[3];
                break;
            case "topA":
                selectedText = paragraphs[4];
                break;
            case "homeA":
                selectedText = paragraphs[5];
                break;
            case "bottomA":
                selectedText = paragraphs[6];
                break;
            case "numbricA":
                selectedText = paragraphs[7];
                break;
            default:
                selectedText = paragraphs[1];
                break;
        }

        // Clear existing content in typingText element
        typingText.innerHTML = "";

        // Split selectedText into individual characters and wrap each in a span element
        selectedText.split("").forEach(char => {
            let span = `<span>${char}</span>`;
            typingText.innerHTML += span;
        });
        inpField.focus();

        // Add 'active' class to the first span element
        typingText.querySelectorAll("span")[0].classList.add("active");

        // Focus on input field
        // var inpField = document.getElementById("inpField"); // Uncomment this line if inpField is defined elsewhere
        // inpField.focus();

        // Debugging: Output the selected text and selectedOption to console
        console.log("Selected Text:", selectedText);
        console.log("Selected Option:", selectedOption);
    }

    // Call loadParagraph initially to set the default text
    loadParagraph();

    // Event listener to call loadParagraph when the select option changes
    selectElement.addEventListener("change", loadParagraph);
};


var timer,
    maxTime = 299,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;

const startTestBtn = document.getElementById("startTest");

startTestBtn.addEventListener("click", function () {
    secondContainer.style.display = "flex";
    var timerDisplay = document.querySelector(".time span");


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
            loadParagraph();
        }
    }, 1000);
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
        console.log(charIndex)
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


inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", function () {
    location.reload();
});