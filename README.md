# How to structure frontend applications

### By feature

/src
  /shared
    /components
    /api
    /actions
    /reducers
  /feed
    /components
    /api
    /reducers
    /actions
  /auth
    /shared
      /components
      /api
      /actions
      /reducers
    /login
      /components
    /register
      /components

### By data type

/src
  /common
    AuthForm.js
    Button.js
    Select.js
  /components
    /login
      TopBar.js
      Login.js
    /register
      Register.js
    /feed
      Feed.js
  /api
    feed.js
    auth.js
  /actions
    feed.js
    auth.js
  /reducers
    feed.js
    auth.js
