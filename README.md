# Movie Browser Website

This is a React-based web application that allows users to search for movies, view movie details, and learn about the developer's experiences with React.

## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Acknowledgments](#acknowledgments)

## Project Overview

The Movie Browser Website is a React-based web application that provides users with the following features:

- **Movie Search**: Users can search for movies by entering keywords in the search bar.
- **Movie Details**: Clicking on a movie card displays detailed information about the selected movie.
- **About Me**: The website also includes an "About Me" section, where the developer shares their experiences and insights gained from building this project.
- **Responsive Design**: The application is designed to be responsive and user-friendly on both desktop and mobile devices.

## Demo

You can check out the live demo of the Movie Browser Website on Netlify:

[![Image 1](https://github.com/yusup-rd/moviebrowser/assets/71926209/c3217c7c-5e9c-449c-95ff-722c3ba72b44)](https://react-moviebrowser.netlify.app/)

[![Image 2](https://github.com/yusup-rd/moviebrowser/assets/71926209/4544d234-ffa6-45d5-a09c-5d8ec98a3d76)](https://react-moviebrowser.netlify.app/)

Click the image or the following link to access the demo: [Movie Browser Website Demo](https://react-moviebrowser.netlify.app/)

Feel free to explore the website and experience it firsthand!

## Project Structure

The project is structured as follows:

- **App.jsx**: The main application component that handles routing and movie searching functionality.
- **AboutView.js**: The component that displays information about the developer.
- **ErrorView.js**: The component that displays a 404 error message when a page is not found.
- **Hero.jsx**: A reusable component for creating hero sections with titles and backdrops.
- **HomeView.jsx**: The home page component that introduces the website and provides information about what users can do.
- **MovieView.jsx**: The component for displaying detailed information about a selected movie.
- **Navbar.jsx**: The navigation bar component that allows users to navigate between different sections of the website and search for movies.
- **SearchView.jsx**: The component that displays search results based on user input.

## Features

### 1. Movie Search

- Users can search for movies by entering keywords in the search bar.
- As users type, the application fetches and displays search results from the [TMDb API](https://www.themoviedb.org/documentation/api).
- Clicking on a movie card in the search results will take users to the movie details page.

### 2. Movie Details

- Users can view detailed information about a selected movie, including its title, overview, release date, and rating.
- Movie posters and backdrops are displayed if available; otherwise, placeholder images are shown.
- The movie details page is accessed by clicking on a movie card in the search results.

### 3. About Me

- The "About Me" section provides information about the developer, Yusup Rejebov, who is a student based in Malaysia with a passion for coding.
- The section also shares insights and experiences gained from working on this React project.

### 4. Responsive Design

- The website is designed to be responsive, ensuring a consistent user experience across different devices and screen sizes.

## Getting Started

To run the Movie Browser Website locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run the following command to install dependencies:

```bash
npm install
```
4. After the installation is complete, start the development server with:
```
npm start
```
5. Open a web browser and go to http://localhost:3000 to access the Movie Browser Website.

## Dependencies

The project relies on the following key dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): A routing library for React applications.
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api): An API used to fetch movie data.
- [Bootstrap](https://getbootstrap.com/): A popular CSS framework for styling the user interface.

## Acknowledgments

The Movie Browser Website is created by Yusup Rejebov as a project to learn and demonstrate React development skills. Special thanks to the TMDb API for providing access to movie data.

Feel free to explore the code, make improvements, and share your feedback. Enjoy browsing movies with the Movie Browser Website!
