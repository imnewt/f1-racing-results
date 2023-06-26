# F1 Racing Results Fetcher

This project is a web application built using React and TypeScript that fetches F1 racing results from the [Ergast API](http://ergast.com/mrd). The application allows users to search for F1 races, drivers and constructors by season and view detailed information.

## Features

- Fetches F1 racing results from the Ergast API.
- Allows users to search for F1 races, drivers and constructors by season.
- Displays race, driver, constructor details.
- Provides a responsive and user-friendly interface.

## Getting Started

Follow the steps below to get started with the project:

1. Clone the repository to your local machine:

```shell
git clone https://github.com/imnewt/f1-racing-results.git
```

2. Navigate to the project directory:

```shell
cd f1-racing-results
```

3. Install the dependencies:

```shell
npm install
```

4. Start the development server:

```shell
npm start
```

5. Open your browser and visit http://localhost:3000 to view the application.

## Configuration

The Ergast API base URL is configured in the `src/utils/constants.ts` file. By default, it is set to `http://ergast.com/api/f1`.

If the base URL of the Ergast API changes or if you want to use a different API, update the `BASE_URL` constant in `src/utils/constants.ts` accordingly.

## Usage

1. On the home page, select the desired season for which you want to fetch the results, default is current season.
2. The application will display the results right away, you can change between tabs to view races/drivers/constructors.
3. On each tab, you can click on the list item to view more detailed information.

<img width="1363" alt="Screen Shot 2023-06-26 at 10 27 22" src="https://github.com/imnewt/f1-racing-results/assets/51883259/d44f6355-dc7f-47b8-965d-d8b723494d21">

## Technologies Used

This project utilizes the following technologies:

- React
- TypeScript
- Ant Design
- ApexCharts

## Thank you :heart:
