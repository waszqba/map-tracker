#Map tracking demo
##About
This monorepo contains application showing randomly generated points
moving in randomly selected directions and distances. The coordinates and updates are sent from
express backend with use of websockets (socket.io's implementation) and are shown on a MapBox map embedded in React application.
Everything is written with TypeScript.

##Setup
In order to run this project you will need a Node.js >= 8.x.x (I personally recommend installing it via [nvm](https://github.com/creationix/nvm))
Since that's pretty much the only prerequisite, you can then `cd` to `frontend` and `backend` directories and run `npm i` in both of them.

##Scripts
- `npm start` - starts the chosen segment of the app. It is recommended to start BE at first
and then to build FE
- `npm run test` - unfortunately, works only on backend, since mapbox-gl
used on the frontend has strong compatibility issues with Jest used to test React apps. 
