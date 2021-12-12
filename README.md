![TruthSeekers Logo](https://truthseekers.io/wp-content/uploads/2021/05/ts-logo-dark-horizontal549x181.jpg)

## [Please support our YouTube channel by Subscribing!](https://www.youtube.com/channel/UCa0s8d-23qP7RmIMZ54x7Ug)

## [Support our channel, planet, AND the future. (Click here!)](https://truthseekers.io/support-nuclear/)

### Develop your skills with our high quality tutorials on:

Linux, Docker & Kubernetes, React.js, GraphQL, SQL, Mongo, Emacs & more. Anything tech.

## [Join our community by signing up for our newsletter!](https://truthseekers.io/latest-tutorials-signup/)

### Instructions

    1. npm install in both ui and server folders
    2. nodemon index.js in server
    3. npm start in ui

I intentionally left .env in the repo for simplicity.

Basically you just need to run a server that reads a json file. You cannot write to a json file in the front end, (as far as i'm aware at least) so make a server that holds the json file and use fs.writeFile() in your POST requests, or your mutation resolvers if you're using GraphQL.
