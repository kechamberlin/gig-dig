# **GigDig**

## **About**

This project is a static, responsive Single-Page Application (SPA) built using create-react-app.

GigDig was born out of my love for music and attending shows of my favorite bands. The concept is to create a wishlist for all the events a user would like to attend.

**NOTE:  There are two minor issues I will soon fix in this project:
- Upon first entering the application, the user may come across a "Not Found" error page.  To get around this, simply click the "GigDig" logo in the navigation bar, and the user should be redirected to the Home page.  Clicking the 3 category tabs should also work.  Manually reloading the page may cause the application to crash.
**- Although this website was designed for mobile responsiveness, it is best viewed on a desktop browser.  The Jumbotron images may look distorted.

## **How It Works**

There are 3 categories the user can explore in the navagation bar:

- Music
- Sports
- Theater

Upon clicking one of the 3 tabs, the user is presented with a search bar and an information list displaying the most popular events for each category. This list includes the venue, date, time, and city location.

Simply enter keywords (e.g.: band names, cities, and/or venues, etc.) into the search bar and press submit.
When a user is interested in an event, he or she may click the "I'm Interested!" button, which simulates it being sent to a database. **Note: there is currently no database connected to this project.**

## **Languages and Technologies Used**

This project features extensive use the following technologies:

- React with Hooks and Functional Components
- React-Router
- JSX
- CSS
- JavaScript
- Ticketmaster API

## **Goals**

Currently, this project does not have a back end or pagination. It is my goal to add both in the future.  Additionally, fixing the issue with React Router is imperative.
