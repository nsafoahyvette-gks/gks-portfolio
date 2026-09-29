/* =================================
   YVETTE GKS PORTFOLIO
   INTERACTIVE SYSTEM
================================= */


/* =================================
   PROGRESS DATA
================================= */

let progressData = {

    programming: 10,

    korean: 15,

    architecture: 5,

    portfolio: 20

};


/* =================================
   LOAD SAVED DATA
================================= */

const savedProgress =
    localStorage.getItem("yvetteProgress");


if (savedProgress) {

    try {

        progressData =
            JSON.parse(savedProgress);

    } catch (error) {

        console.log(
            "Could not load saved progress."
        );

    }

}


/* =================================
   ELEMENTS
================================= */

const overallProgress =
    document.getElementById(
        "overall-progress"
    );


const programmingBar =
    document.getElementById(
        "programming-bar"
    );


const koreanBar =
    document.getElementById(
        "korean-bar"
    );


const architectureBar =
    document.getElementById(
        "architecture-bar"
    );


const portfolioBar =
    document.getElementById(
        "portfolio-bar"
    );


const programmingPercent =
    document.getElementById(
        "programming-percent"
    );


const koreanPercent =
    document.getElementById(
        "korean-percent"
    );


const architecturePercent =
    document.getElementById(
        "architecture-percent"
    );


const portfolioPercent =
    document.getElementById(
        "portfolio-percent"
    );


/* =================================
   UPDATE PROGRESS DISPLAY
================================= */

function updateProgressDisplay() {

    const totalProgress =
        (
            progressData.programming +
            progressData.korean +
            progressData.architecture +
            progressData.portfolio
        ) / 4;


    overallProgress.textContent =
        "Overall GKS Progress: " +
        totalProgress.toFixed(1) +
        "%";


    programmingBar.style.width =
        progressData.programming + "%";


    koreanBar.style.width =
        progressData.korean + "%";


    architectureBar.style.width =
        progressData.architecture + "%";


    portfolioBar.style.width =
        progressData.portfolio + "%";


    programmingPercent.textContent =
        progressData.programming + "%";


    koreanPercent.textContent =
        progressData.korean + "%";


    architecturePercent.textContent =
        progressData.architecture + "%";


    portfolioPercent.textContent =
        progressData.portfolio + "%";

}


/* =================================
   UPDATE BUTTON
================================= */

const updateButton =
    document.getElementById(
        "update-progress"
    );


const progressEditor =
    document.getElementById(
        "progress-editor"
    );


updateButton.addEventListener(
    "click",
    function () {

        if (
            progressEditor.style.display ===
            "block"
        ) {

            progressEditor.style.display =
                "none";

        } else {

            progressEditor.style.display =
                "block";

        }

    }
);


/* =================================
   APPLY PROGRESS
================================= */

const applyButton =
    document.getElementById(
        "apply-progress"
    );


applyButton.addEventListener(
    "click",
    function () {


        const programming =
            Number(
                document.getElementById(
                    "programming-input"
                ).value
            );


        const korean =
            Number(
                document.getElementById(
                    "korean-input"
                ).value
            );


        const architecture =
            Number(
                document.getElementById(
                    "architecture-input"
                ).value
            );


        const portfolio =
            Number(
                document.getElementById(
                    "portfolio-input"
                ).value
            );


        progressData = {

            programming:
                Math.max(
                    0,
                    Math.min(100, programming)
                ),

            korean:
                Math.max(
                    0,
                    Math.min(100, korean)
                ),

            architecture:
                Math.max(
                    0,
                    Math.min(100, architecture)
                ),

            portfolio:
                Math.max(
                    0,
                    Math.min(100, portfolio)
                )

        };


        /* Save progress */

        localStorage.setItem(
            "yvetteProgress",
            JSON.stringify(progressData)
        );


        /* Update screen */

        updateProgressDisplay();


        /* Close editor */

        progressEditor.style.display =
            "none";


    }
);


/* =================================
   NAVIGATION MENU
================================= */

const menuButton =
    document.getElementById(
        "menu-button"
    );


const navLinks =
    document.getElementById(
        "nav-links"
    );


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "open"
        );

    }
);


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    }
);


/* =================================
   DARK MODE
================================= */

const themeButton =
    document.getElementById(
        "theme-button"
    );


const savedTheme =
    localStorage.getItem(
        "yvetteTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    themeButton.textContent = "☀️";

}


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );


        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            themeButton.textContent =
                "☀️";

            localStorage.setItem(
                "yvetteTheme",
                "dark"
            );

        } else {

            themeButton.textContent =
                "🌙";

            localStorage.setItem(
                "yvetteTheme",
                "light"
            );

        }

    }
);


/* =================================
   INITIALIZE
================================= */

updateProgressDisplay();

console.log(
    "Yvette's GKS Portfolio loaded successfully 🚀"
);