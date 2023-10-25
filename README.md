# Welcome to my project!

This is a project I made for a job application. It's a simple cryptocurrency tracker that shows the top 100 cryptocurrencies by market cap. It's built with [Remix](https://remix.run), a React framework that I'm currently learning.

### Why Remix?

I chose [Remix](https://remix.run) over [NextJS](https://nextjs.org) because it was the one area I hadn't explored yet, and I wanted to take this chance to broaden my skill set.

## Check it out

> ##### Note
>
> The app is completely supported at the moment since the Binance API doesn't work in the US, where Vercel have their free tier servers.

You can check out the live version of the app [here](https://coinmerce-assignment.vercel.app).

## Getting Started

### Install Dependencies

```sh
$ npm install
```

### Configure Environment Variables

Copy the `.env.example` file to `.env` and fill in the values.

### Download Coin Images

To make sure the images are up to date run `npm run download-images` from the root of the project.
This will download the latest coin images from the [Coinmerce](https://coinmerce.io) and save them to the `public/images` folder.

### Start the Development Server

```sh
$ npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Using Docker

If you have Docker installed, you can run the app in a container:

```sh
$ docker-compose build dev
$ docker-compose up dev
```

This will start the app in development mode, rebuilding assets on file changes.

For the production version, run:

```sh
$ docker-compose build prod
$ docker-compose up prod
```

This will build the app for production and start it.

## Deployment

First, build your app for production:

```sh
$ npm run build
```

Then run the app in production mode:

```sh
$ npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

## Technologies used

- [Remix](https://remix.run) - React framework
- [TailwindCSS](https://tailwindcss.com) - CSS framework
- [React](https://reactjs.org) - JavaScript library
- [React Spring](https://react-spring.io) - Animation library
- [Lottie](https://airbnb.design/lottie) - Animation library
- [Vercel](https://vercel.com) - Hosting platform
- [TypeScript](https://www.typescriptlang.org) - Programming language
- [ESBuild](https://esbuild.github.io) - JavaScript bundler
- [ESLint](https://eslint.org) - Linter
- [Prettier](https://prettier.io) - Code formatter
- [Jest](https://jestjs.io) - Testing framework
- [Testing Library](https://testing-library.com) - Testing utilities
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - React testing utilities
- [Husky](https://typicode.github.io/husky) - Git hooks
- [Lint Staged](https://github.com/lint-staged/lint-staged) - Run linters against staged git files
- [Docker](https://www.docker.com) - Containerization platform
