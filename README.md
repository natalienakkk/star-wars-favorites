# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies. The goal of this task is to debug the application, improve the styling, and potentially add enhancements.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)
  - [Error Log and Solutions](#error-log-and-solutions)
  - [Implementation Notes](#implementation-notes)



## Getting Started

These instructions will help you set up the project locally on your machine.


### Installing

1. Unzip the project.

2. Navigate to the project directory:
   ```bash
   cd star-wars-favorites
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond


## Tasks

1. **Debugging:** 
    - Start the application and identify the 2 errors introduced.
    - Dive into the codebase and pinpoint the source of each error.
    - Rectify each error ensuring the application displays and functions correctly.
    - Offer a concise explanation of the root causes and detail your solutions.

2. **Styling:** 
    - Refactor the application's styling to match the provided [mockup](page_mockup.png)
    - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)
    - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.

4. **Upload to github:**
    - Once finished, upload the project to github.
    - Try to clone your code and run it - make sure all works after cloning
    - Make sure the site works as expected

## Error Log and Solutions
During the debugging of the Star Wars Favorites application, several errors were encountered and subsequently resolved. This section details these errors, their root causes, and the solutions implemented to rectify them.

1. **Incorrect API URL in api.js:**
    - Problem: The API URL being requested did not exist on the server, due to an incorrect URL specified in the code.
    - Solution: Consulted the SWAPI documentation and updated the URL to the correct one: https://swapi.py4e.com/api/.
    - Explanation: The initial URL used in api.js was invalid, leading to failed requests to the SWAPI. Updating the URL to the correct endpoint ensured successful data fetching.

2. **Missing Movie Object Parameter in MovieItem.js:**
    - Problem: The <button onClick={() => onMovieSelect()}> in the original code called the onMovieSelect function without passing the movie object.
    - Solution: Modified the button's onClick event to <button onClick={() => onMovieSelect(movie)}> by passing the movie object as a parameter.
    - Explanation: The button's onClick event handler was invoking the onMovieSelect function without any arguments, which meant the function lacked the necessary context about the selected movie. Passing the movie object as a parameter enables the application to access and display the details of the selected movie, as well as interact with the like/dislike buttons correctly.

3. **Button Functionality Error in App.js:**
    - Problem: Clicking the like button for a specific movie resulted in an error, indicating that the button's functionality was implemented incorrectly.
    - Solution and Explanation: The issue was traced back to the rendering part of App.js, which includes MovieDetails and MovieList components. It was found that merely passing the currently selected movie and the list of favorites as props was insufficient. The handleFavorite function also needed to be passed to both MovieDetails and the respective button functionalities to work correctly. This adjustment ensured that the like/dislike functionality was accurately reflected in the application's state and UI.

## Implementation Notes

### Using External Resources
- The provided API did not include images. After considering options, such as finding an API to fetch images, I decided to handpick specific images that matched the provided design aesthetic and the color scheme. These images have been saved within the project files for easy access. This decision was driven by the requirement of only six images. For a larger scale project, I would opt for storing images in a database or a cloud storage solution, or utilizing an API that fits the necessary criteria.

### My Implementation
- Changes were made to the application according to my own implementation strategy. The entire codebase has been documented to ensure clarity and maintainability. This includes inline comments that explain the logic and purpose of code segments.

### How It Works
- Interaction: Hovering over the movie images with the mouse updates the large preview image and the background dynamically.
- Favorites Feature(Improvement): A star icon appears when hovering over a movie image, which allows users to add or remove the movie from their favorites list with a click. When a movie is marked as a favorite, the star icon remains visible on the movie image to indicate its status.
