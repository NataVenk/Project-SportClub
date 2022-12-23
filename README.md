
# Hemlock Fitness and Training Center

## Description

This application serves as the homepage for the fictional Hemlock Fitness and Training Center - a long-standing Philadelphia fitness facility that borrows its name from the state tree of Pennsylvania, the [Eastern Hemlock](https://en.wikipedia.org/wiki/Tsuga_canadensis). Its primary aim is to offer insight for prospective customers into its staff, location, and facilities. As an established business in a highly competitive market, it is vital to have an online presence in order to ensure that the business remains visible and accessible for both existing and potential new customers.

As a class project this assignment served as a chance to exercise our newly learned back-end development skills with Node.js, Object-Oriented Programming, Express.js, MySQL, Object-Relational Mapping (ORM), and the Model-View-Controller paradigm in tandem with our previously learned front-end skills in HTML, CSS, JavaScript, and API technologies. This exercise occurred in a collaborative group environment where each member had to handle different aspects of a complex project in order to put together a complete, functional end product by a set deadline.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

## Installation

If the application is being run via terminal:

```

npm i

mysql -u root -p

source db/schema.sql

exit

node seeds/seeds.js

node server

```

Please note that MySQL must be installed in order to run the application via terminal. For instructions on how to install MySQL on your system, please refer to this [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).

Once the above commands have been entered and MySQL is installed the application can be viewed through [this link](http://localhost:6505/).

Alternatively and more simply, the app can also be viewed in [Heroku](https://hemlock-fit-club.herokuapp.com/).

## Usage

### Home Page

The below screenshot captures the application's homepage. From here the user can navigate to any area of the site using the links in navigation header. The About Us, Our Team, and Our Classes links all send the user to self explanatory pages that contain static information on each subject. The Contact Us link integrates the Leaflet.js map to allow the user to see where Hemlock is located as well as how to get in touch.

![Hemlock Fitness Home Page](/public/images/readme/hemlock-home.png)

### Log In Page

The Log In page allows a user with an existing account to log in to their account and also provides a sign up section for new users to create their account.

![Hemlock Fitness Log In Page](/public/images/Web%20capture_23-12-2022_15414_localhost.jpeg)

### User Dashboard

Once logged in, users can select one or more activities that they are interested in and add them to their schedule.

![Hemlock Fitness User Dashboard](/public/images/readme/hemlock-user-dashboard.png)

### User Schedule

Once a user has selected activities that they are interested in and submitted the form, a list of their selected activities is provided to them. From this dashboard the user can return to the prior form and edit their activities of interest as needed.

![Hemlock Fitness User Schedule](/public/images/readme/hemlock-my-schedule.png)

## Technologies Used

- HTML

- CSS

- [Bulma](https://bulma.io/)

- JavaScript

- RESTful APIs

- [Leaflet.js](https://leafletjs.com/)

- [Node.js](https://nodejs.org/en/)

- [Express.js](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)

- [Sequelize](https://sequelize.org/)

- [Handlebars](https://handlebarsjs.com/)

## Credits

- [Natalia Venkatesh](https://github.com/NataVenk)

- [Alejandro Asencio](https://github.com/z20axa)

- [Muchir Bickel](https://github.com/muchirbickel)

- [Matt Goldsmith](https://github.com/chocochip287)

- [Paul Hagan](https://github.com/phagn131)

## License

This project uses the MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)