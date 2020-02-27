
# React Movie Browser

<img src="admission.jpg" alt="" style="zoom:50%;" />

This application is a research site for Movies past and present, to provide the user with tools to be informed in their entertainment choices.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This is a Fullstack app and this repository is only the React frontend. The Ruby on Rails API backend is available [here](https://github.com/eclectic-coding/react-movie-browser_backend).

### Installing

**Backend Setup**

Clone the backend repository to your computer:
```
git clone git@github.com:eclectic-coding/react-movie-browser_backend.git
```

The Rails application has a few prerequisites:
* [Postgres](https://www.postgresql.org/) database
* Movie API (TMDB) and you will need to get an [API key](https://www.themoviedb.org/).

The application is designed to secure the API key, and my local postgres development user credentials using [Rails Credentials](https://www.mirrorcommunications.com/blog/using-credentials-in-rails-5-2-for-your-database-and-user-password). You will need to set this up before starting the server.

Start the backend development server rom within your backend project directory (i.e. starts on port 3000):
```
rails s
```

**Frontend setup**  
Clone the frontend from this repository to your computer:
```
git clone git@github.com:eclectic-coding/react-movie-browser_frontend.git
```
Start the frontend backend development server from within your frontend project directory (i.e. starts on port 3001 and will automatically open your default browser):
```
yarn dev
```

## TODO

- [ ] Add filter button bar
- [ ] Abstract user action/reducer to provide `userId`
- [ ] Convert all movie `id` calls to use `movie_id` instead of DB table row `id`
- [ ] Add pagination to Movie List
- [ ] Watchlist Button component
- [X] Add Watchlist to rails routing
- [ ] Add Watchlist table interface table in user profile area
  - [X] Add watchlist button to menubar
  - [X] Conditional ternary in Movie Detail for watchlist
- [ ] Add protected route
- [ ] Add React-router back navigation
- [ ] Add Cast section panel to Movie Details page
- [ ] Add Recommended section to Movie Details section

**Bugs**
- [ ] Fix log out redirect
- [ ] Flash waiting for movie list to populate. Look into fix. Maybe with Suspense and lazy load.

## Frontend Built With

* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - The web JavaScript library/framework used for the frontend
* [Redux](https://redux.js.org/) - Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
* [React-bootstrap](https://react-bootstrap.github.io/) - React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
* [Eslint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.
* [Prettier](https://prettier.io/) - An opinionated code formatter
* [Husky](https://github.com/typicode/husky#readme) - A script to increase code quality using Git's pre-commit hooks.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details about  the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Chuck Smith** -  [Eclectic Coding](https://github.com/eclectic-coding)

See also the list of [contributors](https://github.com/eclectic-coding/this-repo/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Your name could be here. Jump in and help out.

