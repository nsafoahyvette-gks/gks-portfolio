// Yvette's GKS Portfolio
// ================================
// GKS PROGRESS DATA
// ================================

const progressData = {
    programming: 10,
    korean: 15,
    architecture: 5,
    portfolio: 20
};


// ================================
// UPDATE DISPLAY
// ================================

function updateDisplay() {

    const totalProgress =
        (progressData.programming +
         progressData.korean +
         progressData.architecture +
         progressData.portfolio) / 4;

    document.getElementById("overall-progress").textContent =
        "Overall GKS Progress: " + totalProgress + "%";


    document.getElementById("programming-bar").style.setProperty(
        "--progress",
        progressData.programming + "%"
    );

    document.getElementById("korean-bar").style.setProperty(
        "--progress",
        progressData.korean + "%"
    );

    document.getElementById("architecture-bar").style.setProperty(
        "--progress",
        progressData.architecture + "%"
    );

    document.getElementById("portfolio-bar").style.setProperty(
        "--progress",
        progressData.portfolio + "%"
    );


    document.getElementById("programming-percent").textContent =
        progressData.programming + "%";

    document.getElementById("korean-percent").textContent =
        progressData.korean + "%";

    document.getElementById("architecture-percent").textContent =
        progressData.architecture + "%";

    document.getElementById("portfolio-percent").textContent =
        progressData.portfolio + "%";
}


// ================================
// START WEBSITE
// ================================

updateDisplay();


// ================================
// OPEN/CLOSE PROGRESS EDITOR
// ================================

const updateProgressButton =
    document.getElementById("update-progress");

const progressEditor =
    document.getElementById("progress-editor");


updateProgressButton.addEventListener("click", function () {

    if (progressEditor.style.display === "none") {
        progressEditor.style.display = "block";
    } else {
        progressEditor.style.display = "none";
    }

});


// ================================
// APPLY NEW PROGRESS
// ================================

const applyProgressButton =
    document.getElementById("apply-progress");


applyProgressButton.addEventListener("click", function () {

    progressData.programming =
        Number(document.getElementById("programming-input").value);

    progressData.korean =
        Number(document.getElementById("korean-input").value);

    progressData.architecture =
        Number(document.getElementById("architecture-input").value);

    progressData.portfolio =
        Number(document.getElementById("portfolio-input").value);

    updateDisplay();

});