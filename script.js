/* =====================================================
   YVETTE GKS PORTFOLIO
   COMPLETE INTERACTIVE SYSTEM
===================================================== */


/* =====================================================
   PROGRESS SYSTEM
===================================================== */

const defaultProgress = {

    programming: 10,
    korean: 15,
    architecture: 5,
    portfolio: 20

};


let progressData =
    loadData(
        "yvetteProgress",
        defaultProgress
    );


function updateProgressDisplay() {

    const total = (

        Number(progressData.programming) +
        Number(progressData.korean) +
        Number(progressData.architecture) +
        Number(progressData.portfolio)

    ) / 4;


    const value =
        total.toFixed(1);


    setText(
        "overall-progress",
        value + "%"
    );


    setText(
        "dashboard-progress",
        value + "%"
    );


    setText(
        "hero-progress",
        value + "%"
    );


    setWidth(
        "overall-bar",
        total
    );


    setWidth(
        "programming-bar",
        progressData.programming
    );


    setWidth(
        "korean-bar",
        progressData.korean
    );


    setWidth(
        "architecture-bar",
        progressData.architecture
    );


    setWidth(
        "portfolio-bar",
        progressData.portfolio
    );


    setText(
        "programming-percent",
        progressData.programming + "%"
    );


    setText(
        "korean-percent",
        progressData.korean + "%"
    );


    setText(
        "architecture-percent",
        progressData.architecture + "%"
    );


    setText(
        "portfolio-percent",
        progressData.portfolio + "%"
    );


    document.getElementById(
        "programming-input"
    ).value =
        progressData.programming;


    document.getElementById(
        "korean-input"
    ).value =
        progressData.korean;


    document.getElementById(
        "architecture-input"
    ).value =
        progressData.architecture;


    document.getElementById(
        "portfolio-input"
    ).value =
        progressData.portfolio;

}


function cleanNumber(id) {

    const input =
        document.getElementById(id);


    const number =
        Number(input.value);


    if (isNaN(number)) {
        return 0;
    }


    return Math.max(
        0,
        Math.min(
            100,
            number
        )
    );

}


/* EDIT PROGRESS */

const updateProgressButton =
    document.getElementById(
        "update-progress"
    );


const progressEditor =
    document.getElementById(
        "progress-editor"
    );


updateProgressButton.addEventListener(
    "click",
    () => {

        const visible =
            progressEditor.style.display ===
            "block";


        progressEditor.style.display =
            visible
                ? "none"
                : "block";

    }
);


/* SAVE PROGRESS */

document
    .getElementById("apply-progress")
    .addEventListener(
        "click",
        () => {

            progressData = {

                programming:
                    cleanNumber(
                        "programming-input"
                    ),

                korean:
                    cleanNumber(
                        "korean-input"
                    ),

                architecture:
                    cleanNumber(
                        "architecture-input"
                    ),

                portfolio:
                    cleanNumber(
                        "portfolio-input"
                    )

            };


            saveData(
                "yvetteProgress",
                progressData
            );


            updateProgressDisplay();


            progressEditor.style.display =
                "none";

        }
    );


/* =====================================================
   PROJECT SYSTEM
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


setText(
    "dashboard-projects",
    projectCards.length
);


setText(
    "hero-projects",
    projectCards.length
);


const projectSearch =
    document.getElementById(
        "project-search"
    );


const projectFilter =
    document.getElementById(
        "project-filter"
    );


const noProjects =
    document.getElementById(
        "no-projects"
    );


function filterProjects() {

    const search =
        projectSearch.value
            .toLowerCase()
            .trim();


    const category =
        projectFilter.value;


    let visibleCount = 0;


    projectCards.forEach(
        card => {

            const title =
                card.dataset.title
                    .toLowerCase();


            const cardCategory =
                card.dataset.category;


            const matchesSearch =
                title.includes(search);


            const matchesCategory =
                category === "all" ||
                cardCategory === category;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                card.style.display =
                    "flex";

                visibleCount++;

            } else {

                card.style.display =
                    "none";

            }

        }
    );


    noProjects.style.display =
        visibleCount === 0
            ? "block"
            : "none";

}


projectSearch.addEventListener(
    "input",
    filterProjects
);


projectFilter.addEventListener(
    "change",
    filterProjects
);


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectData = {

    calculator: {

        category:
            "PROGRAMMING • PYTHON",

        title:
            "Python Calculator",

        description:
            "A beginner programming project designed to strengthen my understanding of variables, input, arithmetic operations and functions.",

        status:
            "Planned",

        skills:
            "Python • Logic • Functions",

        learning:
            "I want this project to demonstrate that I can take a simple real-world problem and translate it into working code."

    },


    grades: {

        category:
            "PROGRAMMING • PYTHON",

        title:
            "Grade Calculator",

        description:
            "A student-focused program that accepts scores and calculates grades.",

        status:
            "Planned",

        skills:
            "Python • Conditions • Arithmetic",

        learning:
            "This project will help me practise if/elif logic and build a useful educational tool."

    },


    quiz: {

        category:
            "PROGRAMMING • PYTHON",

        title:
            "Quiz Application",

        description:
            "An interactive quiz that tests users while practising programming logic.",

        status:
            "Planned",

        skills:
            "Python • Loops • Conditions",

        learning:
            "I want to demonstrate how programming can be used to create interactive experiences."

    },


    "student-system": {

        category:
            "PROGRAMMING",

        title:
            "Student Information System",

        description:
            "A structured application for storing and managing student information.",

        status:
            "Planned",

        skills:
            "Python • Data Structures • File Handling",

        learning:
            "This project will introduce me to organizing real-world information using programming."

    },


    "study-timer": {

        category:
            "PROGRAMMING",

        title:
            "Study Timer",

        description:
            "A productivity project designed around focused study sessions and structured breaks.",

        status:
            "Planned",

        skills:
            "Programming • Time • User Interface",

        learning:
            "I want to combine programming with a practical tool that I can actually use while studying."

    },


    portfolio: {

        category:
            "WEB DEVELOPMENT",

        title:
            "GKS Journey Website",

        description:
            "My interactive personal portfolio documenting my academic, technical, creative and language-learning journey.",

        status:
            "Active",

        skills:
            "HTML • CSS • JavaScript • GitHub",

        learning:
            "This project demonstrates that I can plan, build, publish and continuously improve a real website."

    },


    "study-tracker": {

        category:
            "WEB DEVELOPMENT",

        title:
            "Study Tracker",

        description:
            "A future application for tracking subjects, study sessions, goals and academic progress.",

        status:
            "Planned",

        skills:
            "HTML • CSS • JavaScript • Local Storage",

        learning:
            "I want to build something directly connected to my own student experience."

    },


    "dream-house": {

        category:
            "ARCHITECTURE",

        title:
            "Future Dream House",

        description:
            "A residential concept exploring space, function, lifestyle and personal architectural ideas.",

        status:
            "Planned",

        skills:
            "Floor Plans • Space Planning • Design",

        learning:
            "This will help me understand how people's lifestyles influence architectural decisions."

    },


    school: {

        category:
            "ARCHITECTURE",

        title:
            "Sustainable School",

        description:
            "A conceptual school focused on natural lighting, ventilation, sustainability and student wellbeing.",

        status:
            "Planned",

        skills:
            "Architecture • Sustainability • Planning",

        learning:
            "I want to explore how architecture can make educational spaces healthier and more useful."

    },


    "korean-architecture": {

        category:
            "ARCHITECTURE",

        title:
            "Korean-Inspired Community",

        description:
            "A conceptual project exploring Korean architectural ideas in a modern community.",

        status:
            "Planned",

        skills:
            "Architecture • Research • Design",

        learning:
            "This project connects my interest in Korea with my interest in architecture."

    },


    brand: {

        category:
            "GRAPHIC DESIGN",

        title:
            "Personal Brand Identity",

        description:
            "A visual identity project exploring logo design, typography and presentation.",

        status:
            "Planned",

        skills:
            "Graphic Design • Typography • Branding",

        learning:
            "I want to learn how visual systems communicate personality and purpose."

    },


    presentation: {

        category:
            "GRAPHIC DESIGN",

        title:
            "Architecture Presentation Board",

        description:
            "A presentation concept combining architectural drawings, typography and visual storytelling.",

        status:
            "Planned",

        skills:
            "Design • Layout • Architecture",

        learning:
            "This project will help me communicate architectural ideas clearly and professionally."

    }

};


const modal =
    document.getElementById(
        "project-modal"
    );


const closeModal =
    document.getElementById(
        "close-modal"
    );


document
    .querySelectorAll(".view-project")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.project;


                    const project =
                        projectData[key];


                    if (!project) {
                        return;
                    }


                    setText(
                        "modal-category",
                        project.category
                    );


                    setText(
                        "modal-title",
                        project.title
                    );


                    setText(
                        "modal-description",
                        project.description
                    );


                    setText(
                        "modal-status",
                        project.status
                    );


                    setText(
                        "modal-skills",
                        project.skills
                    );


                    setText(
                        "modal-learning",
                        project.learning
                    );


                    modal.classList.add(
                        "open"
                    );

                }
            );

        }
    );


function closeProjectModal() {

    modal.classList.remove(
        "open"
    );

}


closeModal.addEventListener(
    "click",
    closeProjectModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProjectModal();

        }

    }
);


/* =====================================================
   GOALS
===================================================== */

let goals =
    loadData(
        "yvetteGoals",
        []
    );


const goalInput =
    document.getElementById(
        "goal-input"
    );


const addGoalButton =
    document.getElementById(
        "add-goal"
    );


const goalList =
    document.getElementById(
        "goal-list"
    );


function displayGoals() {

    goalList.innerHTML = "";


    if (goals.length === 0) {

        const message =
            document.createElement(
                "p"
            );


        message.className =
            "muted-message";


        message.textContent =
            "No goals added yet. Start with one small goal.";


        goalList.appendChild(
            message
        );


        return;

    }


    goals.forEach(
        (goal, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "goal-item";


            if (goal.completed) {

                item.classList.add(
                    "completed"
                );

            }


            item.innerHTML = `

                <label class="goal-left">

                    <input
                        type="checkbox"
                        data-goal-index="${index}"
                        ${goal.completed ? "checked" : ""}
                    >

                    <span>
                        ${escapeHTML(goal.text)}
                    </span>

                </label>

                <button
                    class="delete-goal"
                    data-delete-goal="${index}"
                    aria-label="Delete goal"
                >
                    🗑️
                </button>

            `;


            goalList.appendChild(
                item
            );

        }
    );

}


function addGoal() {

    const text =
        goalInput.value.trim();


    if (!text) {
        return;
    }


    goals.push({

        text: text,

        completed: false

    });


    goalInput.value = "";


    saveData(
        "yvetteGoals",
        goals
    );


    displayGoals();

}


addGoalButton.addEventListener(
    "click",
    addGoal
);


goalInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            addGoal();

        }

    }
);


goalList.addEventListener(
    "click",
    event => {

        const checkbox =
            event.target.closest(
                "[data-goal-index]"
            );


        if (checkbox) {

            const index =
                Number(
                    checkbox.dataset.goalIndex
                );


            goals[index].completed =
                checkbox.checked;


            saveData(
                "yvetteGoals",
                goals
            );


            displayGoals();


            return;

        }


        const deleteButton =
            event.target.closest(
                "[data-delete-goal]"
            );


        if (deleteButton) {

            const index =
                Number(
                    deleteButton.dataset.deleteGoal
                );


            goals.splice(
                index,
                1
            );


            saveData(
                "yvetteGoals",
                goals
            );


            displayGoals();

        }

    }
);


/* =====================================================
   KOREAN STUDY LOG
===================================================== */

let koreanLogs =
    loadData(
        "yvetteKoreanLogs",
        []
    );


const koreanTopic =
    document.getElementById(
        "korean-topic"
    );


const koreanHours =
    document.getElementById(
        "korean-hours"
    );


const addKoreanLog =
    document.getElementById(
        "add-korean-log"
    );


const koreanLogList =
    document.getElementById(
        "korean-log-list"
    );


function displayKoreanLogs() {

    koreanLogList.innerHTML = "";


    if (
        koreanLogs.length === 0
    ) {

        const empty =
            document.createElement(
                "p"
            );


        empty.className =
            "muted-message";


        empty.textContent =
            "Your Korean study log will appear here.";


        koreanLogList.appendChild(
            empty
        );


        return;

    }


    koreanLogs
        .slice()
        .reverse()
        .forEach(
            log => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "log-item";


                item.innerHTML = `

                    <div>
                        <strong>
                            ${escapeHTML(log.topic)}
                        </strong>

                        <br>

                        <small>
                            ${escapeHTML(log.date)}
                        </small>
                    </div>

                    <strong>
                        ${log.hours}h
                    </strong>

                `;


                koreanLogList.appendChild(
                    item
                );

            }
        );

}


addKoreanLog.addEventListener(
    "click",
    () => {

        const topic =
            koreanTopic.value.trim();


        const hours =
            Number(
                koreanHours.value
            );


        if (
            !topic ||
            isNaN(hours) ||
            hours <= 0
        ) {

            return;

        }


        koreanLogs.push({

            topic: topic,

            hours: hours,

            date:
                new Date()
                    .toLocaleDateString()

        });


        saveData(
            "yvetteKoreanLogs",
            koreanLogs
        );


        koreanTopic.value = "";

        koreanHours.value = "";


        displayKoreanLogs();

    }
);


/* =====================================================
   GKS CHECKLIST
===================================================== */

const checklistInputs =
    document.querySelectorAll(
        "[data-check]"
    );


const savedChecklist =
    loadData(
        "yvetteChecklist",
        {}
    );


checklistInputs.forEach(
    input => {

        const key =
            input.dataset.check;


        input.checked =
            Boolean(
                savedChecklist[key]
            );


        input.addEventListener(
            "change",
            ()