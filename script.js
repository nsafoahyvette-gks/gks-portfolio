<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Yvette | GKS Journey</title>

    <meta
        name="description"
        content="Yvette Mensah Nsafoah's academic, technology, architecture and Korean learning journey."
    >

    <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- ================================
     NAVIGATION
================================ -->

<nav class="navbar">

    <div class="nav-logo">
        YVETTE<span>.</span>
    </div>

    <button id="menu-button" class="menu-button">
        ☰
    </button>

    <div id="nav-links" class="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#progress">Progress</a>
        <a href="#projects">Projects</a>
        <a href="#korean">Korean</a>
        <a href="#architecture">Architecture</a>
        <a href="#goals">Goals</a>

        <button id="theme-button" class="theme-button">
            🌙
        </button>

    </div>

</nav>


<!-- ================================
     HERO
================================ -->

<header id="home" class="hero">

    <div class="hero-content">

        <p class="eyebrow">
            MY GKS JOURNEY • 2026
        </p>

        <h1>
            Yvette Mensah
            <span>Nsafoah</span>
        </h1>

        <p class="hero-description">
            A Ghanaian student building her future through
            technology, architecture, creativity and Korean.
        </p>

        <div class="hero-buttons">

            <a href="#progress" class="primary-button">
                View My Progress
            </a>

            <a href="#projects" class="secondary-button">
                Explore My Work
            </a>

        </div>

    </div>

    <div class="hero-decoration">

        <div class="floating-card card-one">
            🇰🇷
            <span>Korea</span>
        </div>

        <div class="floating-card card-two">
            💻
            <span>Technology</span>
        </div>

        <div class="floating-card card-three">
            🏛️
            <span>Architecture</span>
        </div>

    </div>

</header>


<main>


<!-- ================================
     ABOUT
================================ -->

<section id="about" class="section">

    <div class="section-heading">

        <p class="section-label">01 • ABOUT ME</p>

        <h2>
            Building a future
            <span>one step at a time.</span>
        </h2>

    </div>

    <div class="about-grid">

        <div class="about-card">

            <div class="big-icon">👩🏾‍💻</div>

            <h3>Who I Am</h3>

            <p>
                I am a Ghanaian student passionate about
                technology, creativity, architecture,
                learning and personal growth.
            </p>

        </div>


        <div class="about-card">

            <div class="big-icon">🎯</div>

            <h3>My Mission</h3>

            <p>
                To develop the knowledge, skills and
                portfolio needed to pursue my dream of
                studying in Korea.
            </p>

        </div>


        <div class="about-card">

            <div class="big-icon">🚀</div>

            <h3>My Vision</h3>

            <p>
                To combine technology and design to create
                useful things that can improve people's lives.
            </p>

        </div>

    </div>

</section>


<!-- ================================
     PROGRESS
================================ -->

<section id="progress" class="section progress-section">

    <div class="section-heading">

        <p class="section-label">02 • MY PROGRESS</p>

        <h2>
            The journey is
            <span>already happening.</span>
        </h2>

        <p>
            Track my development across the skills and
            experiences that matter to my goals.
        </p>

    </div>


    <div class="overall-card">

        <div>

            <p>OVERALL GKS PROGRESS</p>

            <h3 id="overall-progress">
                12.5%
            </h3>

        </div>

        <div class="overall-circle">
            🇰🇷
        </div>

    </div>


    <button id="update-progress" class="primary-button">
        Update My Progress 🚀
    </button>


    <!-- EDITOR -->

    <div id="progress-editor" class="progress-editor">

        <h3>Update Your Progress</h3>

        <p>
            Enter your current percentage for each area.
        </p>


        <div class="input-grid">

            <label>
                Programming
                <input
                    type="number"
                    id="programming-input"
                    min="0"
                    max="100"
                    value="10"
                >
            </label>


            <label>
                Korean
                <input
                    type="number"
                    id="korean-input"
                    min="0"
                    max="100"
                    value="15"
                >
            </label>


            <label>
                Architecture
                <input
                    type="number"
                    id="architecture-input"
                    min="0"
                    max="100"
                    value="5"
                >
            </label>


            <label>
                Portfolio
                <input
                    type="number"
                    id="portfolio-input"
                    min="0"
                    max="100"
                    value="20"
                >
            </label>

        </div>


        <button id="apply-progress" class="primary-button">
            Apply Progress ✨
        </button>

    </div>


    <!-- PROGRESS BARS -->

    <div class="progress-list">


        <div class="progress-item">

            <div class="progress-label">

                <span>Programming 💻</span>

                <span id="programming-percent">
                    10%
                </span>

            </div>

            <div class="progress-bar">

                <div
                    id="programming-bar"
                    class="progress-fill"
                ></div>

            </div>

        </div>


        <div class="progress-item">

            <div class="progress-label">

                <span>Korean 🇰🇷</span>

                <span id="korean-percent">
                    15%
                </span>

            </div>

            <div class="progress-bar">

                <div
                    id="korean-bar"
                    class="progress-fill"
                ></div>

            </div>

        </div>


        <div class="progress-item">

            <div class="progress-label">

                <span>Architecture 🏛️</span>

                <span id="architecture-percent">
                    5%
                </span>

            </div>

            <div class="progress-bar">

                <div
                    id="architecture-bar"
                    class="progress-fill"
                ></div>

            </div>

        </div>


        <div class="progress-item">

            <div class="progress-label">

                <span>Portfolio 🎨</span>

                <span id="portfolio-percent">
                    20%
                </span>

            </div>

            <div class="progress-bar">

                <div
                    id="portfolio-bar"
                    class="progress-fill"
                ></div>

            </div>

        </div>

    </div>

</section>


<!-- ================================
     PROJECTS
================================ -->

<section id="projects" class="section">

    <div class="section-heading">

        <p class="section-label">03 • PROJECTS</p>

        <h2>
            Things I am
            <span>building.</span>
        </h2>

    </div>


    <div class="project-grid">


        <article class="project-card">

            <div class="project-number">
                01
            </div>

            <div class="project-icon">
                💻
            </div>

            <h3>Programming Projects</h3>

            <p>
                Python programs, algorithms,
                data structures and practical
                problem-solving projects.
            </p>

            <span class="project-status">
                IN PROGRESS
            </span>

        </article>


        <article class="project-card">

            <div class="project-number">
                02
            </div>

            <div class="project-icon">
                🌐
            </div>

            <h3>Interactive Website</h3>

            <p>
                A personal portfolio and GKS
                journey tracker designed and
                developed from scratch.
            </p>

            <span class="project-status">
                ACTIVE
            </span>

        </article>


        <article class="project-card">

            <div class="project-number">
                03
            </div>

            <div class="project-icon">
                🏛️
            </div>

            <h3>Architecture Portfolio</h3>

            <p>
                Floor plans, technical drawings,
                sustainable designs and
                architectural concepts.
            </p>

            <span class="project-status">
                PLANNED
            </span>

        </article>


        <article class="project-card">

            <div class="project-number">
                04
            </div>

            <div class="project-icon">
                🎨
            </div>

            <h3>Graphic Design</h3>

            <p>
                Posters, visual identities,
                infographics, interfaces and
                presentation boards.
            </p>

            <span class="project-status">
                PLANNED
            </span>

        </article>


    </div>

</section>


<!-- ================================
     KOREAN
================================ -->

<section id="korean" class="section