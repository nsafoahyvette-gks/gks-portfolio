// Yvette's GKS Portfolio
// Interactive features will be built here.

console.log("GKS Portfolio loaded!");

// ================================
// GKS PROGRESS DATA
// ================================

const progressData = {
    programming: 10,
    korean: 15,
    architecture: 5,
    portfolio: 20
};

const totalProgress =
    (progressData.programming +
     progressData.korean +
     progressData.architecture +
     progressData.portfolio) / 4;

console.log("Overall GKS Progress:", totalProgress + "%");

const overallProgressElement =
    document.getElementById("overall-progress");

overallProgressElement.textContent =
    "Overall GKS Progress: " + totalProgress + "%";
    
    // ================================
// UPDATE PROGRESS BARS
// ================================

document.getElementById("programming-bar").style.width =
    progressData.programming + "%";

document.getElementById("korean-bar").style.width =
    progressData.korean + "%";

document.getElementById("architecture-bar").style.width =
    progressData.architecture + "%";

document.getElementById("portfolio-bar").style.width =
    progressData.portfolio + "%";