# [![Markdownify](https://github.com/brtsai/food-help/blob/master/documentation/assets/logo/logo.png)](https://food-help.herokuapp.com/#/)

[Food Help](https://food-help.herokuapp.com/#/) is a crowdsourced business review website for rating and ranking Restaurants and other Food related Businesses. Food Help leverages a Ruby on Rails server coupled with a PostgreSQL Database on the Backend, along with React for presentation, and Redux for state on the Frontend.

## Key Features

*   Login, Create a New Account, or simply browse as a Guest
*   Add Businesses, and help fill Food Help's communal database
*   Search for Businesses, and receive a list ranked by relevance!
*   Need help finding a place? No problem. Click on the business' static map to get an interactive google maps modal!
*   Write a review, watch your review always appear first for you!
*   Create, Edit, Delete your review in place, on the same page of your browser!
*   Don't like a review you posted? Change it, or even do away with it altogether!

## How To Use

Head on over to [Food Help](https://food-help.herokuapp.com/#/) and start reviewing!

## Technology Choices

#### Why Ruby on Rails?

Ruby on Rails is a great tool for faster development cycles. Rails allows developers to start a project, and start seeing results almost immediately. In fact, Food Help was built over the course of two weeks.  
`"Move Fast and Break Things"` <cite>- Facebook</cite>

For its speed and many other reasons Ruby on Rails has been used for many other products and services you may have encountered before. Namely,  

*   [AirBnB](https://www.airbnb.com/)
*   [CrunchBase](https://www.crunchbase.com/)
*   [Bloomberg](https://www.bloomberg.com/)
*   [Github](https://github.com/)
*   [KickStarter](https://www.kickstarter.com/)

#### Why PostgreSQL?

Food Help's core product features are based on crowdsourcing information, which requires a high degree of reliability, and stability, especially during significant read/write traffic (crowdsourced adding, rating, reviewing businesses). PostgreSQL provides a beautiful implementation of MVVC, or Multi Version Concurrency Control.  
`"Multi-Version Concurrency Control (MVCC) allows Postgres to offer high concurrency even during significant database read/write activity. MVCC specifically offers behavior where 'readers never block writers, and writers never block readers'."` <cite>- http://momjian.us/main/presentations/internals.html#mvcc</cite>

#### Why React?

##### **_Efficiency_**

Rerendering and conditional rerendering essentially boils down to editing/transforming the DOM/CSSOM tree in your browser, which can be pretty hairy considering trees are combinatorial(think n choose k, factorials) data structures in nature. Thankfully, where combinatorics is involved, similar problems faced in real life tend to be quite amenable to heuristic solutions. As is the case with React's conditional rerendering _Reconciliation_ algorithm:  
`"There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree. If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm..."`  
<cite>- https://reactjs.org/docs/reconciliation.html</cite>

#### Why Redux?

##### **_DFA Properties_**

Redux is essentially based on the Deterministic Finite Automata computational model which has plenty of useful and interesting properties. Of which, one of the more identifiably useful properties is determinism.  
Determinism between state transitions in Redux allows for replayability of user interactions with your product which leads to robust and reliable debugging of errors and features, resulting in an overall better product.

##### **_Separation of Concerns_**

Using Redux in conjunction with React allows for greater separation of concerns on the frontend between presentational components, and stateful components that keep track of the user's session and browser state. This Separation of Concerns allows for a much cleaner and robust codebase which means that easily convoluted programming patterns such as prop threading are no longer necessary (unless of course, your codebase happens to be a labyrinth and your name happens to be Theseus).

## Credits

This webapp uses APIs and assets hosted by other sources.

*   Login Art and Cityscape Footer Art: Yelp
*   Maps: Google Maps Static and Interactive Maps APIs
*   Business trifold and Stock profile images: Hosted by Instagram (Images from my instagram, links from pictaram.net's instagram scraper)
