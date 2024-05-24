# Netflixgpt

- Create-react-app -> Created a new project
- Configured tailwind
- Header
- Routing
- Login form
- Sign up form
- Form Validation
- Use Ref hook
- Setting up firebase
- Deploying our app to production
- Create a sign up user account
- Validating sign in of a registered user
- Installing redux store
- Created redux store with userSlice
- Implemented Sign out
- Validations
- Redirected the app
- Update profile API call
- Unsubscribed the onAuthStateChange callback - Ep -15 -> (21m)
- Add the hard coded values inside the constant files
- Fetch / build movies from TMDB
    - Register for TMDB API, create a new app, and get the access token
    - Get data from TMDB - now playing list and make an API call
- Creating a store for movie slice
- Custom hook for nowPlayingMovies
- Create movie slice
- Update store with movies data
- Planning for main and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embeded the youtube video - make it autoplay and mute
- Tailwind classes has been added

## Bug fixes:
- Sign up user dispayName and sign up profile picture update
- If user is not logged in, redirect the user to login page from browse
- If the user is logged in, and goes to the login page, it will redirect him to the browse page

## Features

- Login/ signup page
    - Sign-in and signup form
    - Re-direct to browse page
- Browse (After authentication)
    - Header
    - Main movie
        - Trailer in the background
        - Title, description and play button
        - Movie suggestions
            - Movie list (Vertically scrollable)
- Netflix GPT
    - Search bar
    - Movie suggestion