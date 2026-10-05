/* =====================================================
   LOADING ANIMATION
===================================================== */

const loadingMessages = [

    "Loading Python...",

    "Loading Data Analytics...",

    "Loading Machine Learning...",

    "Loading Artificial Intelligence...",

    "Loading memories...",

    "Preparing something special..."

];


let messageIndex = 0;


const loadingText =
    document.getElementById("loadingText");


function loadingAnimation() {


    if (messageIndex < loadingMessages.length) {


        loadingText.textContent =
            "> " +
            loadingMessages[messageIndex];


        messageIndex++;


        setTimeout(
            loadingAnimation,
            700
        );

    }

}


loadingAnimation();



/* =====================================================
   OPEN SURPRISE
===================================================== */

function openSurprise() {


    const opening =
        document.getElementById("opening");


    const main =
        document.getElementById("mainContent");


    opening.classList.add("hide");


    setTimeout(function () {


        main.classList.add("show");


        document.body.style.overflowY =
            "auto";


        startLetter();


    }, 700);

}



/* =====================================================
   LETTER TYPING EFFECT
===================================================== */

const letter = `

Thank you for guiding me throughout my learning journey.

You didn't just teach me Python, Data Analytics,
Machine Learning and AI.

You taught me something much more valuable —
how to learn, how to improve, how to face mistakes
and how to keep moving forward.

Every difficult concept became a little easier
because of your patience and guidance.

I may forget some lines of code someday,
but I will always remember the teacher
who helped me learn them.

Thank you for believing in your students. ❤️

`;


let letterIndex = 0;


function startLetter() {


    const letterText =
        document.getElementById("letterText");


    function typeLetter() {


        if (letterIndex < letter.length) {


            letterText.innerHTML =
                letter
                    .substring(
                        0,
                        letterIndex
                    )
                    .replace(
                        /\n/g,
                        "<br>"
                    );


            letterIndex++;


            setTimeout(
                typeLetter,
                25
            );

        }

    }


    typeLetter();

}



/* =====================================================
   POETRY VOICE
===================================================== */

function speakPoetry() {


    // Browser ki previous speech stop karein

    window.speechSynthesis.cancel();


    const poetry = `

    Code ki har ek line mein,
    seekhne ka ek ehsaas hai.

    Python se AI tak ka safar,
    aapki guidance ka khaas andaaz hai.

    Errors aaye, solutions mile,
    har mistake ek lesson bani.

    Jo kuch bhi seekha maine,
    usmein aapki teaching ki roshni hai.

    Thank you so much, Anukul Sir.

    `;


    const speech =
        new SpeechSynthesisUtterance(
            poetry
        );


    // Hindi language

    speech.lang = "hi-IN";


    // Natural speed

    speech.rate = 0.85;


    // Normal pitch

    speech.pitch = 1;


    // Full volume

    speech.volume = 1;


    const status =
        document.getElementById(
            "voiceStatus"
        );


    status.textContent =
        "🎙️ Poetry is playing...";


    speech.onend = function () {

        status.textContent =
            "❤️ Poetry finished";

    };


    speech.onerror = function () {

        status.textContent =
            "Voice is not available in this browser.";

    };


    window.speechSynthesis.speak(
        speech
    );

}



/* =====================================================
   STOP POETRY
===================================================== */

function stopPoetry() {


    window.speechSynthesis.cancel();


    const status =
        document.getElementById(
            "voiceStatus"
        );


    status.textContent =
        "⏹ Poetry stopped.";

}



/* =====================================================
   HIDDEN SURPRISE
===================================================== */

function hiddenSurprise() {


    const box =
        document.getElementById(
            "hiddenMessage"
        );


    box.innerHTML = `

        <p>
            You found the hidden message! 😄
        </p>

        <p>
            A great teacher doesn't just
            teach a subject...
        </p>

        <p>
            <strong>
                They become a part of
                the student's journey. ❤️
            </strong>
        </p>

        <p>
            And you are a special part of mine.
        </p>

    `;


    box.scrollIntoView({

        behavior: "smooth"

    });

}