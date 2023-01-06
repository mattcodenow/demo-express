# Demo Express
Demonstration of an express server.

## Clone
To clone the project enter the following in your terminal:
```
git clone https://github.com/mattcodenow/demo-express.git
```
Change into the project directory:
```
cd demo-express
```

## Install
From inside the project directory:
```
npm install
```

## Start
From inside the project directory:
```
node server.mjs
```
Open the project landing route in your browser at [http://localhost:8000](http://localhost:8000)

## Stop
Enter CTRL + C in the terminal window running the application.

## Start With Environment Variables
If we want to run the server on a different port than the default, create a file in the project directory called .env and add the following content:
```
PORT=3000
```
Stop the application if running with CTRL + C, then restart with:
```
node -r dotenv/config server.mjs
```
OR use the npm start script equivalent to the above:
```
npm start
```

## Development Mode
To restart the server on file change:
```
npm run dev
```