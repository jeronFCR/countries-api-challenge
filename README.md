# Country App
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This App use the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v3.1) to pull countries and display them.

## Architecture
Due the easy complexity of the app, Flux architecture pattern has been chosen. So we can add new services/actions and make the app scalable without add Redux/Redux Saga.

    .
    ├── components             # Dumb components
    ├── context                # Context to store states and axios functions, so we can use them easily across the app
    ├── cypress                # e2e tests
    ├── interfaces             # interfaces
    ├── pages                  # pages (Practically all logic goes here)
    ├── services               # Axios http requests
    ├── store                  # Actions/Reducers
        ├── actions                 # Functions to dispatch actions
        |   └── types                   # Actions types
        └── reducers                # Reducers to store the states
    ├── styles                 # Styled components
    └── utils                  # Utils files, e.g. constants files..

## Core libraries
    - Styled Components
    - Font Awesome
    - Uuid
    - Font Awesome
    - Cypress

## Start here:

Once you have cloned this project

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.