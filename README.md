
# React Movie Browser

<img src="admission.jpg" alt="" style="zoom:50%;" />

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This is a Fullstack app and this repository is only the React frontend. The Ruby on Rails API backend is available [here]().

### Installing

**Backend Setup**

Clone the backend repository to your computer:
```
git clone git@github.com:eclectic-coding/react-movie-browser_backend.git
```

The Rails application has a few prerequisites:
* Postgres database
* Movie API (TMDB) and you will need to get an [API key](https://www.themoviedb.org/).

The application is designed to secure the API key, and my local postgres development user credentials using [Rails Credentials](https://www.mirrorcommunications.com/blog/using-credentials-in-rails-5-2-for-your-database-and-user-password). You will need to set this up before starting the server.

Clone the frontend from this repository to your computer:
```
git clone git@github.com:eclectic-coding/react-movie-browser_frontend.git
```


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## TODO

- [ ] Add filter button bar
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
- [ ] Fix log out redirect to root route
- [ ] Flash waiting for movie list to populate. Look into fix. Maybe with Suspense and lazy load.

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used

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

* Hat tip to anyone whose code was used
* Inspiration
* etc

