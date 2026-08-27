/* =========================================
   CHAPTER SYSTEM
========================================= */

const chapters = {
    chapter1: document.getElementById("chapter1"),
    loveQuestion: document.getElementById("loveQuestion"),
    dateQuestion: document.getElementById("dateQuestion"),
    together: document.getElementById("together"),
    chapter1Reveal: document.getElementById("chapter1Reveal"),
    chapter2: document.getElementById("chapter2"),
    chapter2Question: document.getElementById("chapter2Question"),
    finalReveal: document.getElementById("finalReveal")
};


function showChapter(name) {

    Object.values(chapters).forEach(chapter => {

        if (chapter) {
            chapter.classList.remove("active");
        }

    });

    if (chapters[name]) {
        chapters[name].classList.add("active");
    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 20 + "px";

    const duration =
        5 + Math.random() * 6;

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}


setInterval(createHeart, 350);


for (let i = 0; i < 15; i++) {

    setTimeout(
        createHeart,
        i * 180
    );

}


/* =========================================
   FIRST QUESTION
   "ARE YOU READY?"
========================================= */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");


if (yesButton) {

    yesButton.addEventListener("click", () => {

        createHeartExplosion();

        setTimeout(() => {

            showChapter("loveQuestion");

        }, 500);

    });

}


/* =========================================
   FIRST NO BUTTON
   IT STILL ESCAPES
========================================= */

let noClicks = 0;


if (noButton) {

    noButton.addEventListener("click", () => {

        noClicks++;

        const messages = [
            "are you sure? :(",
            "really??",
            "think again...",
            "nope.",
            "you can't escape ♡"
        ];

        noButton.textContent =
            messages[
                Math.min(
                    noClicks - 1,
                    messages.length - 1
                )
            ];


        if (noClicks >= 2) {

            const parent =
                noButton.parentElement;

            const maxX =
                Math.max(
                    parent.clientWidth -
                    noButton.offsetWidth,
                    0
                );

            const maxY =
                Math.max(
                    parent.clientHeight -
                    noButton.offsetHeight,
                    0
                );


            noButton.style.position =
                "relative";

            noButton.style.left =
                (Math.random() * maxX / 4) + "px";

            noButton.style.top =
                (Math.random() * maxY / 4) + "px";

        }

    });

}


/* =========================================
   DO YOU LOVE ME?
========================================= */

const loveYes =
    document.getElementById("loveYes");

const loveNo =
    document.getElementById("loveNo");


/*
   YES → DATE QUESTION
*/

if (loveYes) {

    loveYes.addEventListener("click", () => {

        createHeartExplosion();

        setTimeout(() => {

            showChapter("dateQuestion");

        }, 500);

    });

}


/*
   NO DOES NOT ESCAPE.
   It stays exactly where it is.
*/

if (loveNo) {

    loveNo.addEventListener("click", () => {

        const originalText =
            loveNo.textContent;

        loveNo.textContent =
            "NO? really? ♡";

        loveNo.classList.add(
            "wrong-answer"
        );

        setTimeout(() => {

            loveNo.classList.remove(
                "wrong-answer"
            );

            loveNo.textContent =
                originalText;

        }, 700);

    });

}


/* =========================================
   DATE QUESTION
========================================= */

const dateOptions =
    document.querySelectorAll(
        ".date-option"
    );


dateOptions.forEach(option => {

    option.addEventListener(
        "click",
        () => {

            const isCorrect =
                option.dataset.correct === "true";


            /* =================================
               WRONG ANSWER
            ================================= */

            if (!isCorrect) {

                option.classList.add(
                    "wrong-answer"
                );

                setTimeout(() => {

                    option.classList.remove(
                        "wrong-answer"
                    );

                }, 400);


                /*
                   Give a tiny pause,
                   then send them ALL the way
                   back to the beginning.
                */

                setTimeout(() => {

                    resetExperience();

                    showChapter("chapter1");

                }, 700);


                return;
            }


            /* =================================
               CORRECT ANSWER
            ================================= */

            option.style.background =
                "#ffd8e9";

            createHeartExplosion();

            setTimeout(() => {

                showChapter("together");

            }, 700);

        }
    );

});


/* =========================================
   26 DAYS / BEEN TOGETHER
========================================= */

const togetherContinue =
    document.getElementById(
        "togetherContinue"
    );


if (togetherContinue) {

    togetherContinue.addEventListener(
        "click",
        () => {

            showChapter(
                "chapter1Reveal"
            );

        }
    );

}


/* =========================================
   ORIGINAL CHAPTER 1 REVEAL
========================================= */

const continueButton =
    document.getElementById(
        "continueButton"
    );


if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            showChapter("chapter2");

            createParticles();

        }
    );

}


/* =========================================
   CHAPTER 2 PARTICLES
========================================= */

const particlesContainer =
    document.getElementById(
        "chapter2Particles"
    );


function createParticles() {

    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            3 + Math.random() * 6 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.opacity =
            0.15 + Math.random() * 0.6;

        particlesContainer.appendChild(
            particle
        );

    }

}


/* =========================================
   CHAPTER 2 → MORE
========================================= */

const secretButton =
    document.getElementById(
        "secretButton"
    );


if (secretButton) {

    secretButton.addEventListener(
        "click",
        () => {

            showChapter(
                "chapter2Question"
            );

        }
    );

}


/* =========================================
   FINAL QUESTION
========================================= */

const openFinal =
    document.getElementById(
        "openFinal"
    );


if (openFinal) {

    openFinal.addEventListener(
        "click",
        () => {

            showChapter(
                "finalReveal"
            );

            finalEffect();

        }
    );

}


/* =========================================
   FINAL EFFECT
========================================= */

function finalEffect() {

    const final =
        document.getElementById(
            "finalReveal"
        );

    if (!final) return;


    /*
       Prevent creating the stars
       more than once.
    */

    if (
        final.dataset.effectCreated ===
        "true"
    ) {
        return;
    }

    final.dataset.effectCreated =
        "true";


    for (let i = 0; i < 35; i++) {

        const star =
            document.createElement("div");

        star.textContent =
            Math.random() > 0.5
                ? "✦"
                : "♡";

        star.style.position =
            "absolute";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            10 + Math.random() * 25 + "px";

        star.style.opacity =
            0.2 + Math.random() * 0.7;

        star.style.animation =
            "finalParticle 3s ease-in-out infinite";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        final.appendChild(star);

    }

}


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    const container =
        document.getElementById(
            "chapter1"
        );

    if (!container) return;


    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        heart.style.position =
            "absolute";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";


        heart.style.fontSize =
            14 + Math.random() * 25 + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 350;


        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.animation =
            "heartExplosion 1s ease-out forwards";


        container.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 1100);

    }

}


/* =========================================
   RESET EXPERIENCE
========================================= */

function resetExperience() {

    /*
       Reset the first NO button.
    */

    if (noButton) {

        noClicks = 0;

        noButton.textContent =
            "no...";

        noButton.style.position =
            "";

        noButton.style.left =
            "";

        noButton.style.top =
            "";

    }


    /*
       Reset date options.
    */

    dateOptions.forEach(option => {

        option.classList.remove(
            "wrong-answer"
        );

        option.style.background =
            "";

    });


    /*
       Reset love NO.
    */

    if (loveNo) {

        loveNo.textContent =
            "NO";

        loveNo.classList.remove(
            "wrong-answer"
        );

    }


    /*
       Allow final particles
       to be generated again.
    */

    const final =
        document.getElementById(
            "finalReveal"
        );

    if (final) {

        final.dataset.effectCreated =
            "false";

        final
            .querySelectorAll(
                ":scope > div:not(.final-content)"
            )
            .forEach(element => {
                element.remove();
            });

    }

}


/* =========================================
   KEYBOARD SAFETY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            event.preventDefault();

        }

    }
);


/* =========================================
   START EXPERIENCE
========================================= */

showChapter("chapter1");
