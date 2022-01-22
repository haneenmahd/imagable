<div align="center">
    <img height="100px" src="https://github.com/imagable/imagable/blob/main/resources/logo.png" alt="Imagable's logo" />
    <h1>Imagable</h1>
    <img src="https://github.com/imagable/imagable/actions/workflows/build-web.yml/badge.svg" alt="Build Web" />
    <img src="https://github.com/imagable/imagable/actions/workflows/build-server.yml/badge.svg" alt="Build Server" />
    <img src="https://github.com/imagable/imagable/actions/workflows/lint-server.yml/badge.svg" alt="Lint Server" />
    <img src="https://www.codefactor.io/repository/github/imagable/imagable/badge" alt="Imagable's code quality badge" />
    <p>Imagable lets you generate icons automatically for different platforms.</p>
    <i>Try it out Right now!</i> <br /> <br />
</div>

## Getting Started 🤘

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](https://github.com/imagable/imagable#deployment-) for notes on how to deploy the project on a live system.

### Prerequisites 👀

You would need 
- [Node.js](https://nodejs.org) version that has Long Term Support (LTS) or v14+.
- [Git](https://git-scm.org)
- [Typescript](https://typescript.org) We use typescript to scale our applications with type safety.

### Installing 🚀

You would need [npm](https://npmjs.org) to install our packages.

We have a simple shell script to install all packages to get you started.

Just run `scripts/install.sh` if you are on a UNIX/LINUX machine.
```sh
sh scripts/install.sh
```

Run `scripts/install-win.ps1` if you are on windows.
```ps1
.\scripts\install-win.ps1
```

This message will get your installation finished
```
Installation Success ✅
```

## Running the tests ✅

For testing the server, you would need to build it first into Javascript. You can test the our `Website` by running `npm start` inside `web` directory.

### Running Server tests

There are some few scripts inside the `package.json` in the `server` directory.

First you would need to run
```sh
npm run build
```
and to get the server up and running at the `port 3000 `or a specific port choosed by the system.
```sh
npm run test
```

### Linting the code 

We have configured `husky` so that everytime, you commit, it lints and formats the code.

> We have configured eslint for our `server` codebase, but not for the `web`. This was a mistake while creating the software. We will fix it soon.

Run this to manually lint the code
```sh
sh scripts/lint-server.sh
```
or
```sh
cd server
npm run lint
```

## Deployment 🔨

The branch forked by [haneenmahd](https://github.com/haneenmahd/imagable/tree/master) is used to deploy this project to production. See discussion for your questions [discussion#59](https://github.com/imagable/imagable/discussions/59) 💬.

## Built With 🛠

* [React](https://reactjs.org) - The web framework used
* [NPM](https://npmjs.org) - Dependency Management
* [Typescript](https://typescript.org) - Language used
* [Express](https://expressjs.org) - The Server framework used

## Contributing 👋

Please read [CONTRIBUTING.md](https://github.com/imagable/imagable/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning 📦

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors 🧑‍💻👩‍💻

* **Haneen Mahdin** - *Creator* - [haneenmahd](https://github.com/haneenmahd)

See also the list of [contributors](https://github.com/imagable/imagable/blob/main/AUTHORS) who participated in this project.

## License ©

This project is licensed under the MIT License - see the [LICENSE](https://github.com/imagable/imagable/blob/main/LICENSE) file for details

## Acknowledgments 🔖

We were inspired by the fact that it was somewhat hard to create icons for different platforms and we needed to make it as simple with one click!
