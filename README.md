# Movie Land

Movie Land is a simple web application that uses the OMDb API (Open Movie Database) to display information about movies. The application is built with React for the frontend and Express for the backend, ensuring the protection of the API key using environment variables.

## Features

- Search for movies by title.
- Display search results in the form of cards with detailed information.
- Placeholder image for movies without a poster.
- API key protection using an Express server.

## Screenshots

![Screenshot 1]<img width="1440" alt="Capture d’écran 2023-11-13 à 20 50 21" src="https://github.com/DjihaneB/MovieLand/assets/123997026/fea48b3c-5ca0-4829-a07b-4169b6c4753a">
![Screenshot 2]<img width="1440" alt="Capture d’écran 2023-11-13 à 20 56 31" src="https://github.com/DjihaneB/MovieLand/assets/123997026/42734077-b098-4ef5-bc2f-134979f511d2">

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/YourProject.git
   ```
   
## Installation

1. Install frontend and backend dependencies:

   ```bash
   cd YourProject
   npm install
   cd client
   npm install
   ```

2. Create a `.env` file at the root of the project and add your OMDb API key:

   ```makefile
   API_KEY=YourAPIKey
   ```

   Replace `YourAPIKey` with your actual API key.

3. Start the server and the frontend (in separate terminals):

   ```bash
   # Terminal 1 (Backend)
   npm run start:backend

   # Terminal 2 (Frontend)
   cd client
   npm start
   ```

   The application should be accessible at http://localhost:3000.

## Project Structure

- `client`: Contains the source code of the React frontend.
- `server.js`: The main file of the Express server.


