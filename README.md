<p align="center">
  <a href="https://github.com/iainaitken/repo_name">
    <img src="dice-6.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Pig</h3>

  <p align="center">
    A small JavaScript-only front-end dice game.
    <br />
    <a href="https://github.com/iainaitken/pig"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://iainaitken.github.io/pig">Play on GitHub Pages</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#game-logic-diagram">Game Logic Diagram</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This project is part of the [Complete JavaScript](https://www.udemy.com/course/the-complete-javascript-course/) course on Udemy, by Jonas Schmedtman. See my learning notes [here](https://github.com/iainaitken/courses/blob/main/udemy/complete_javascript/notes/section-7/082-project-2-pig-game.md).

The app is based on the dice game, [Pig](<https://en.wikipedia.org/wiki/Pig_(dice_game)>).

The HTML and CSS files for the webpage were provided; the challenge was to implement the game logic using JavaScript. The features to be included in the app were:

- There are 2 players.
- The goal is to be the first to reach 100 points.
- Points are scored by rolling a single die:
  - If the player rolls a number between 2 and 6, the number is added to the player's score for the turn, and the player has another roll.
  - The player can choose to hold at any time. If they do so, their score for that turn is added to their total score.
  - If the player rolls a 1, their turn ends and any points they have built up for that turn are lost. It is then the next player's roll.
- When either player reaches 100 points, the game is over and the winner declared. No further rolls are permitted, and a new game can be started by clicking the 'new game' button.
- The die is rolled by clicking on the 'roll' button; similarly the player can hold and accumulate their score by clicking on the 'hold' button.
- There are visual clues on the page to show whose turn it is, current and total scores per player, the number rolled on each roll of the die, and who the winner of the game was.

### Game Logic Diagram

![Game Logic](pig-game-flowchart.png)

### Approach

My approach was to play the game and then attempt to build the JS game logic without watching any of the course videos. I then watched the course materials to learn how I could improve my code.

Learning points:

### Built With

- JavaScript

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

The app runs in a browser; one option of running it is to use live-server.

- npm

  ```sh
  npm install npm@latest -g
  ```

- live-server

  ```sh
  npm install -g live-server
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/iainaitken/pig.git
   ```

2. Navigate to the project folder

   ```sh
   cd repo_name
   ```

3. Start the server running

   ```sh
   live-server
   ```

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

## Roadmap

Planned future features:

- Player names
- Highscores (as in the difference between P1's score and P2's score)
- Sound effects

## Contributing

Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/iainaitken/pig](https://github.com/iainaitken/pig)
