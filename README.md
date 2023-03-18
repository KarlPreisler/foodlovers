# Welcome to Food Lovers!

The purpose of this website is to create a platform where people can share their recipes with other food-lovers around the world. The website is targeted towards anyone who enjoy cooking, baking or just want to view some amazing dishes from other people!

Food Lovers offers a platform where users can create an account, post their own recipes or interract with other users by commenting or liking their recipes. 
Users can also follow each other on the platform, keeping them up to date with their favorite chef's latest recipes.

The website is fully responsive, providing users with the possibility of accessing the website on desktop, tablet or phone.

![Screenshot 2023-03-17 195122](https://user-images.githubusercontent.com/114813115/225993002-d2844e5b-5e32-4730-a0b2-842944de1226.png)

## Index - Table of Contents

* [Project Goals](#project-goals)
* [User Experience](#user-experience-(UX))
* [Wireframes](#wireframes)
* [Features](#features)
* [Languages](#languages)
* [Programs, libraries, frameworks, dependencies and media](#programs,libraries,frameworks,dependencies-and-media)
* [Testing](#testing)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Acknowledgements](#acknowledgements)

Link to deployed project: https://foodlover.herokuapp.com/

The API for this frontend application was build with the Django REST Framework. 

The respository for the backend API can be found [here](https://github.com/KarlPreisler/drf)

Link to the deployed API can be found [here](https://food-lovers.herokuapp.com/)

## Project Goals

The objective of this project was to create a website application that provides a positive user experience while allowing users to share their recipes and interract with other users. The website includes the following features:

- Basic authentication and authorization functionality.
- Intuitive navigation system for positive UX.
- Full CRUD functionality that enables users to share their own recipes, read other users recipes, and update or delete their own recipes, comments, likes, and follow functionality.
- Filter options that allow users to sort through recipes by the ones that they have liked and recipes posted by followed users. Filter options to search for specific titles, authors or ingredients is also available.
- Capability to modify profile information such as bio text and images.


## User Experience (UX)

**User Stories**: 

### Navigation & Authentication

- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages

- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users

- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users

- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to

- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

- Avatar: As a user I can view user's avatars so that I can easily identify users of the application


### Adding & Liking Recipes

- Create recipes: As a logged in user I can create posts so that I can share my recipes with the world!

- View a recipe: As a user I can view the details of a single recipe so that I can learn more about it.

- Like a recipe: As a logged in user I can like a recipes so that I can show my support for the recipes that interest me

### The recipes Page

- View most recent recipes: 
As a user I can view all the most recent recipes, ordered by most recently created first so that I am up to date with the newest content

- Search bar:
As a user, I can search for recipes with keywords, so that I can find the recipes and user profiles I am most interested in.

- View liked recipes: 
As a logged in user I can view the recipes I liked so that I can find the recipes I enjoy the most

- View recipes of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about

- Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

### The Recipe Page

- Recipe page: As a user I can view a recipes page so that I can view that individual recipe.

- Edit recipe: As a recipe owner I can edit my recipes title and description so that I can make corrections or update my recipes after it was created

- Create a comment: As a logged in user I can add comments to a recipe so that I can share my thoughts about the recipe

- Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is

- View comments: As a user I can read comments on recipes so that I can read what other users think about the recipes

- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

- Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment

### The Profile Page

- Profile page: As a user I can view other users profiles so that I can see their recipes and learn more about them

- Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular

- User profile - user stats: As a user I can view statistics about a specific user: bio, number of recipes, follows and users followed so that I can learn more about them

- Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove recipes by specific users in my recipes feed

- View all recipes by a specific user: As a user I can view all the recipes by a specific user so that I can catch up on their latest recipes, or decide I want to follow them

- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio

- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

User stories are being tracked using GitHub Projects. All User Stories have been divided into Acceptance Criteria and Tasks. 

![Screenshot 2023-03-18 212040](https://user-images.githubusercontent.com/114813115/226136504-5f39197e-b718-4d09-9432-86af0457e743.png)

## Wireframes
Below is the wireframe for the home page sketched for the desktop version of the website. I have followed this wireframe throughout the creation of the project and the final version of the website closely resembled the wireframe.

![Screenshot 2023-03-18 233314](https://user-images.githubusercontent.com/114813115/226143767-c99e781a-4da4-4f75-99cf-d3692ae9d4ac.png)

## Features

### Navigation bar
  - The navigation bar features a Logo the left, that acts as a link to the home page. The navigation bar has a consistent placement on each page making the website easy to navigate. The navigation bar is responsive, logo size, text and icons adapts to different screen sizes.
The navigation bar features links to the Home, Sign in and Sign up pages. If the user is logged in however, the navigation bar will include links to the following pages: Add recipe, Home, Feed, Liked, Followed and Profile.

Signed in:
![Screenshot 2023-03-18 015634](https://user-images.githubusercontent.com/114813115/226074636-cfeb855f-38d0-4944-9567-03980f1642ba.png)
Signed out:
![Screenshot 2023-03-18 015714](https://user-images.githubusercontent.com/114813115/226074655-2d0cd3d0-df13-4c8d-9412-4ed5cddfdade.png)

## The Search bar
The Search bar allows users to search for recipes by the owner's username, title, description and steps. 

![Screenshot 2023-03-18 015758](https://user-images.githubusercontent.com/114813115/226074683-223b9c42-a3e5-4a12-ab14-31c17f73eb81.png)

## The Home Page
The Home Page displays the posted recipes by all users, sorted by most recently created post first. The Home Page uses a infinite scroll functionality in order to provide users with the ability to seemlessly scroll through recipes without having to press "Next Page" etc.
The owners name, date of creation or when it was last updated, as well as all content of an individual recipe is visible to the user when scrolling through the Home Page content, except for posted comments and rating.

![Screenshot 2023-03-18 020010](https://user-images.githubusercontent.com/114813115/226074778-13610367-b581-4b88-bd60-0d29e120c2e1.png)
![Screenshot 2023-03-18 021929](https://user-images.githubusercontent.com/114813115/226075600-c38cffff-7012-4e3d-bc0b-1de080e45d6a.png)

## The Popular Profiles Component
The Popular Profiles Component is visible on the Home, Feed, Liked and Profile pages. It displays the most followed profiles to the right of the content on the page on desktop, and in the center below the navigation bar on mobile devices. 

![Screenshot 2023-03-18 020043](https://user-images.githubusercontent.com/114813115/226074794-a494978f-c07a-4730-8a29-4e5d6381aa69.png)

## The Recipe Page
The Recipe Page is the page displaying an individual recipe, including all content of the recipe as well as any likes and comments. When viewing an individual recipe that you are the owner of, the possibility to update or delete the recipe is available in the form of a dropdown menu to the right of the creation date.
A comment is displayed with the comments owner's username, avatar, date of comments creation or when it was last updated, and the rating, users can create, read, update and delete any comment providing full CRUD functionality.

![Screenshot 2023-03-18 020222](https://user-images.githubusercontent.com/114813115/226074879-1e62b770-c2ee-44e6-b1fe-b15f82c075e9.png)

![Screenshot 2023-03-18 020444](https://user-images.githubusercontent.com/114813115/226075665-e15ef97c-3154-440e-bf9b-16bf8cd86935.png)

## The Sign up Page
The Sign up Page allows users to create an account with the website that will be stored in the API, in order to perform user functionality such as editing your profile or liking recipes. The page contains a form for creating an account and a link to the Sign in page.

![Screenshot 2023-03-18 020701](https://user-images.githubusercontent.com/114813115/226075114-cf695f05-8784-4771-b2f1-5e85e6d0f764.png)

## The Sign in Page
The Sign up Page allows users to sign in to their account which enables user functionality such as editing your profile or liking recipes. The page contains a form for signing in and a link to the Sign up page for new users.

![Screenshot 2023-03-18 020544](https://user-images.githubusercontent.com/114813115/226075119-1d339a97-843d-4a85-b21e-ad51822ef4ff.png)

## The Liked Page
The Liked Page contains all recipes that the user has liked, listed by the most recently liked recipes first.
![Screenshot 2023-03-18 020851](https://user-images.githubusercontent.com/114813115/226075188-92ab7f1b-40dc-4e41-8993-eb7b51a0fcc1.png)

## The Feed Page
The Feed Page contains all recipes posted by users that you are following, listed by the most recently created recipes first.
![Screenshot 2023-03-18 020900](https://user-images.githubusercontent.com/114813115/226075193-38987910-867a-4ef3-9feb-a2d60fa3c189.png)

## The Profile Page
The Profile Page contains all recipes from that specific owner, along with the users profile image and bio. Users are able to view the number of recipes another user has, along with the number of followers and people they follow. 
Users with an account have the possibility to upload a profile image and Bio to their profile in order for others to see when viewing their profile page. They also have the option to update their username or password, along with editing their profile image and bio. 

![Screenshot 2023-03-18 021643](https://user-images.githubusercontent.com/114813115/226075495-8123f887-cb0d-4ca8-9acd-551e7adbfcb8.png)

## Languages

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.w3schools.com/js/js_es6.asp)
  - [JSX](https://reactjs.org/)

## Programs, libraries, frameworks, dependencies and media

- [Gitpod](https://gitpod.io)
  - Gitpod as the main IDE.
- [Git](https://git-scm.com/)
  - Git for version control.
- [GitHub](https://github.com/)
  - GitHub to store the project.
- [Code Institute's Gitpod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) was used as the starting workspace template for this project.
- [Code Institute's README Template](https://github.com/Code-Institute-Solutions/readme-template) was used to structure this README.
- [React](https://reactjs.org/)
  - React as a JavaScript library for building the user interface.
- [Axios](https://axios-http.com/docs/intro)
  - Axios to make HTTP requests and handle the responses efficiently.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
  - React Router for routing and navigation in this React application, allowing me to create declarative, dynamic routes with components for different pages and URLs.
- [JWT](https://jwt.io/)
  - JWT (JSON Web Tokens) was used for authentication and authorization of the web application.
- [React-Bootstrap](https://react-bootstrap.github.io/)
  - React-Bootstrap React-Bootstrap for styling and responsiveness.
- [Heroku](https://id.heroku.com/login)
  - Heroku to host both of the frontend and backend applications.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts for importing Roboto font.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome for icons.
- [ui.dev](https://ui.dev/amiresponsive)
  -Ui.dev to test the responsiveness of the application.
- [Looka](https://looka.com/) was used to create a custom logo.
- [W3C Markup Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- An [ESLint](https://eslint.org/)

## Testing

### Manual testing:
- I have tested that this website works appropriately in the following browsers: Chrome, Firefox and Safari.
- I have made sure that all authorization and authentication functionality is working as intended.
- I have created the website using the principles of UX and made sure that it functions the way it should on all standard devices using the devtools device toolbar.
- I have confirmed that all components are legible in terms of positioning and readability, and work as intended.
- No elements are distracted by background-colors, and no images are stretched when viewed on different devices.
- I have made sure that all functionality work properly and the website works as intended.
- I have made sure that all buttons functionality is working.
- I have made sure that the website is responsive to all devices, using react-bootstrap and CSS to make website adapt to different screen sizes.

![Screenshot 2023-03-18 211754](https://user-images.githubusercontent.com/114813115/226136319-6e948820-e3b2-46ec-b8a7-f09299253ac2.png)
![Screenshot 2023-03-18 211846](https://user-images.githubusercontent.com/114813115/226136361-61d1e202-f833-417c-87dd-98d118e86174.png)
![Screenshot 2023-03-18 211908](https://user-images.githubusercontent.com/114813115/226136363-0d9606f6-6b44-448b-81ad-f0c8c956c3ad.png)

### Automatic testing:

Automatic testing have been used for testing the navbar component: 

![TestPP5](https://user-images.githubusercontent.com/114813115/226142252-8fa92855-95b4-402d-ac50-57e36438a2d4.png)

### Lighthouse Testing 
I tested the landing page using DevTools Lighthouse test, this is the report I received.

![Screenshot 2023-03-17 185951](https://user-images.githubusercontent.com/114813115/225982862-962cdc06-7fa5-4dd0-a81d-590583f16fe2.png)


### HTML Validator 

- I validated the HTML of the landing page through the View Source functionality, since the code is using non HTML elements that won't be visible when at the source-view. I received errors because my img elements did not have any alt attribute, after adding that I received no errors. 

### CSS Validator 

- The CSS was validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator), all code passed without warnings or errors.

## Bugs
- There are no unfixed bugs.

## Deployment

### Local Deployment

To preview the project in the development environment, run the following command in the terminal:
```npm start```. This will open port 3000. Click *Open Browser* when the popup window appears.


### Heroku deployment
This project is run using [Heroku](https://www.heroku.com), a cloud based platform that enables developers to build and run applications.
Here is the [Heroku documentation](https://devcenter.heroku.com/articles/heroku-cli) for the most recent installation instructions. 

### Instructions for Heroku deployment:

- Clone [this repository]().
- Open your IDE and connect to your repository.
- Enter this command in the terminal:

        npm install

- Make sure your package.json dependencies look like this:

      "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^0.27.2",
        "bootstrap": "^4.6.0",
        "jwt-decode": "^3.1.2",
        "react": "^17.0.2",
        "react-bootstrap": "^1.6.3",
        "react-dom": "^17.0.2",
        "react-infinite-scroll-component": "^6.1.0",
        "react-router-dom": "^5.3.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },

3.  Git add, commit and push all changes to your repository.
4.  Create or log in to an account on Heroku.
5.  Create a new app on Heroku.
6.  In the Deploy section on Heroku, go to Deployment method and connect to your GitHub repository.
7.  Go down to Manual deploy and select deploy branch.
8.  To run your app locally, you can enter this command in your terminal:

            npm run dev

## Acknowledgements
- Special thanks to my mentor Spencer for guidance throughout the project. With everything from styling and layout, to the functionality and logic of the project.
