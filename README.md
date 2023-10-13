# CatStore - My NextJS and React Webpage

Welcome to CatStore! This README provides an overview of CatStore, its features, and how to get started. CatStore is a NextJS and React-based project for creating a marketplace. It's a great place to learn and experiment with these technologies.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Important Notices](#important-notices)

## About

CatStore is a project where I've put my front-end skills to the test. This website is primarily a personal project, allowing me to explore and showcase my abilities.

## Features

Here are the key features of CatStore:

1. **SignIn Feature:** Users can sign in using NextAuth and their GitHub accounts.
2. **Filter and Cards:** The website offers a functioning filter button and working cards for a smooth user experience.
3. **API Integration:** CatStore uses APIs to fetch data for the cards, making it dynamic and up-to-date.

## Getting Started

To get started with CatStore, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Ferrisama/catstore.git
cd catstore
```

2. Install the required dependencies.

```bash
npm install
```

3. Set up the environment variables in an `.env.local` file. The following variables are needed:

- `NEXTAUTH_SECRET`: Your NextAuth secret key.
- `GITHUB_SECRET`: Your GitHub secret key.
- `GITHUB_ID`: Your GitHub client ID.

4. Run the project.

```bash
npm run dev
```

Your CatStore instance should now be running at `http://localhost:3000`.

## Important Notices

1. **API Usage:** CatStore relies on the [Cats by API Ninjas](https://cats-by-api-ninjas.p.rapidapi.com/v1/cats) API. To access this API, you'll need an API key, which can be obtained by subscribing for free. Make sure to set the `X-RapidAPI-Key` in your `next.config.json` file.

2. **Environment Variables:** Ensure that you set the necessary environment variables in the `.env.local` file with your specific values.

Now you're all set to explore CatStore and start using it for your marketplace project. If you have any questions or need assistance, feel free to reach out. Happy coding!
