# Javascript Developer coding challenge

Using the assets provided, your task is to build a simple e-commerce application.

Dear Musement team,

thank you for your opportunity and time, I've put all my effort in delivering a well structured and performant code, that meets the requirements and almost all extra credits, I hope you like it!

I have also added 'Notes' and 'Improvements that can be done' sections in order to share my thoughts on why I am doing certain things.

To run the production output can be build by running from the root folder:

```bash
$ npm run build
```

## Extra credits achieved

* Use CSS preprocessors -- use SASS

* Use of linting tools -- use ESLint

* Performant code -- use useCallback and React.memo()

* Fast page load -- divided the bundle into chunks

* Optimized user experience -- used react-a11y to improve it

* Statically typed code -- use TS

## Notes

Performance:

- I use useCallback together with a Set in the components that make use of inline functions, to avoid making new instances of the same functions.
- I use 'memo()' as a wrapper in the CartItem component and in the ProductItem component to memoize them and avoid being rerendered if there's no change in its props. 
- I use @loadable/component library to load the components that are visible on the page. Like this, elements such as Pagination and Footer are bundled in a separate chunk

State management:

- I decided to use the Context API to avoid prop-drilling and abstract the state for easier access. I think this leads to better readability and maintenance of the code. 
- In this occasion I did not use Redux because I find the Context API less verbose and lightweight for a small project like this one.

React version:

- I decided to use React 16 instead of 17 because I wanted to make sure that the last official version of Enzyme was compatible

## Improvements that can be done

Performance:

- If I needed to use a react router to build the project, I would have included 'lazy' with 'Suspense' wrapping the different routes, in order to not fully load the code of the routes that aren't needed until the user clicks, improving performance by loading the code in chunks to the browser.

Responsiveness and styles:

- By converting all px to rem would make it easier to work on responsiveness, as by just modifying the root font-size all sizes measured in rem would be modified accordingly. In this regard, stating the root font-size to 10px make it easier to figure out rem sizes in other properties, as 1rem === 10px
- By declaring mixins some CSS operations can be faster, such as centering elements or quickly adding the basic structure when declaring an element as flex container
- Other reusable properties such as between sections margins can be saved into $variables in order to quickly build them. 

CartContext:

- I have decided to use 'cartItemsCount' instead of checking cartItems.length to display the total of products in cart, because if a functionality to add more than one of the same product is implemented (by adding a 'quantity' property of each product), this property would be able to keep track of the total amount of products and its quantity (and not only the length of the cartItems array).  
- The same with 'isHidden', I decided to add it to the context to make sure that if in the future another component wants to toggle the CartDropdown it will have access.

Testing:

- Perhaps the area in which I have more room for improvement is knowledge about testing React. I have more experience testing Express.js and tried to learn as much as possible, and I am currently working on learning Context API testing.
- In the project I developed some unit tests but testing useEffect and states would be the main improvement to be done.