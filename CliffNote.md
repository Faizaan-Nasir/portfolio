# React Cliff Notes

## Creating a React App
```bash
npx create-react-app AppName
```
## Starting a React App

```bash
npm init react-app
```

## JSX (JavaScript XML)

- The HTML-like syntax within the `return` statement of a component is called **JSX**.

## Children Props and Enclosing Tags

- In HTML:  
  ```html
  <h1>Hello World</h1>
  ```

- In React, to allow enclosing tags, use `props.children`. Example:

  ```jsx
  function MyComponent(props) {
    return (
      <>
        {props.children}
      </>
    );
  }
  ```

- This enables:
  ```jsx
  <MyComponent>
    <h1>Hello World</h1>
  </MyComponent>
  ```

- Alternatively, use the `children` attribute directly:
  ```jsx
  <MyComponent children={<h1>Hello World</h1>} />
  ```

## `className` Instead of `class`

- `class` is a reserved keyword in JS. Use:
  ```jsx
  <div className="container"></div>
  ```

## Adding Styles in React

### Method 1: External CSS

```jsx
import './App.css';

function Component() {
  return <div className="myClass">Styled Text</div>;
}
```

### Method 2: Inline Styles

```jsx
const someStyle = {
  fontSize: "40px", // instead of font-size
  color: "purple"
};

function Component() {
  return <div style={someStyle}>Styled Text</div>;
}
```

> Don't forget the `{}` brackets — the style is a JS object.

## Arrow Functions & `forEach`

- Anonymous functions exist in ES6:
  ```js
  [10, 20, 30].forEach(item => item * 10);
  ```

  Equivalent to:

  ```js
  [10, 20, 30].forEach(function(item) {
    return item * 10;
  });
  ```

- In React:

  ```jsx
  const Nav = (props) => {
    return (
      <>
        {props.greet}
      </>
    );
  }

  <Nav greet="hello" />
  ```

### Tips:

- Single parameter → no need for `()`
- Single-line function → no need for `{}` or `return`

## JSX Variables Example

```jsx
const url = "photo.png";
const result = <img src={url} />;
```

## Ternary Operations in JSX

```jsx
{condition ? <TrueComponent /> : <FalseComponent />}
```

- Always wrap JS expressions in `{}` in JSX.

## Event Handlers

- Use camelCase:
  ```jsx
  <button onClick={handleClick}>Click Me</button>
  ```

- Use arrow functions, not named functions:
  ```jsx
  const openMenu = () => {
    console.log("Hello World");
  };

  <button onClick={openMenu}>Open Menu</button>
  ```

## Hooks (`useState`) Example

```jsx
import { useState } from 'react';

export default function InputComponent() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}
```
- The state variable inputText and the setText method are used to set the current text that is typed. The useState hook is initialized at the beginning of the component.
- By default, the inputText will be set to “hello”.
- As the user types, the handleChange function, reads the latest input value from the browser’s input DOM element, and calls the setText function, to update the local state of inputText.
- tate is always referred to the local state of a component.
### What does `...form` do?

In the code:

```js
setForm({ 
  ...form, 
  firstName: e.target.value 
});
```

The `...form` is the **spread operator**, and here's what it does:

- It **copies all existing key-value pairs** from the `form` object into a **new object**.
- Then, the line `firstName: e.target.value` **overwrites** the `firstName` field with the new value from the input.

This technique is used to update **only one property** of the state while keeping the rest unchanged.

#### Example:

Suppose `form` is:

```js
{
  firstName: "Luke",
  lastName: "Jones",
  email: "lukeJones@sculpture.com"
}
```

and you run:

```js
setForm({
  ...form,
  firstName: "Anakin"
});
```

Then the new object becomes:

```js
{
  firstName: "Anakin",
  lastName: "Jones",
  email: "lukeJones@sculpture.com"
}
```

This is the **recommended way in React** to update part of an object state without mutating it directly.
This is useful when you have multiple input fields in the react app.
(p.s. here setForm is also a method created using useState)
For reference of usecase, see the following code:
```js
import { useState } from 'react'; 

export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
    </> 
  ); 
} 
```
## States in React
- State is a component's internal data that determines the current behavior of a component. 
- It's often used to store data that affects the behavior of a component. 
There are two types, stateless and stateful components in React app.
### Stateless
```js
export default function Greet(){
    return(
        <>
            <h1> Hello World </h1>
        </>
    )
}
```
### Stateful
```js
import {useState} from 'react';
export default function Greet(){
    const [Greeting,setGreeting]=useState("Hello World")
    // Greeting is a initially set to Hello World and setGreeting is a method that would be used to change Greeting
    // The method can be called at anypoint with new text being passed as argument
    return (
        <>
            <h1>{Greeting}</h1>
        </>
    )
}
```
States are used to manage/handle data that is likely to change in the lifetime of a React Application
We cannot use the setGreeting at anytime we please, it must only be called on the occurrence of an event (like onClick)
## Ways to Transfer Data (State) from Parent to Child, to Grandchild and so on
### Using props drilling (Inefficient)
Basically a method of using props from one component to another for transfer of State until it reaches it's intended place of use.
### Using Context API
Consists of 
- Context Provider
- Context Consumer
Example that would explain this:
In the context provider (MealsProvider.js):
```js
import React from 'react';
const MealsContext = React.createContext();
function MealsProvider(props) {
    const [meals, setMeals] = React.useState(['Pizza', 'Burger', 'Pasta']);
    return (
        <MealsContext.Provider value={{ meals,setMeals }}>
            {props.children}
        </MealsContext.Provider>
    );
}
export default MealsProvider
```
In the context consumer (MealsList.js) to display the meals:
```js
import React from 'react';
function MealsList() {
    const { meals } = React.useContext(MealsContext);
    const mealElements = [];

    for (let i = 0; i < meals.length; i++) {
        mealElements.push(<h2 key={i}>{meals[i]}</h2>);
    }

    return <div>{mealElements}</div>;
}
export default MealsList
```
And to edit the meals we can have another component (ChangeMeals.js) which would also act as a context consumer:
```js
import React from 'react'
function ChangeMeal() {
    const { setMeals } = React.useContext(MealsContext); // Access setMeals from context

    return (
        <button onClick={() => setMeals(["Meal1", "Meal2"])}>
            Change Meal
        </button>
    );
}
export default ChangeMeal;
```
## Navigation in React
Makes use of external modules
```js
import {BrowserRouter} from 'react-router-dom';
```
## Single Page Applications and Multipage Applications 
Unlike traditional Javascript, React webpages are Single Page.
Hence traditional anchor tags cannot be used in React Applications as they are meant to open a new HTML page.
The following changes need to be made in order to add Navigation bars and links to make the page link to different components:
index.js
```js
import { BrowserRouter } from 'react-router-dom';
// Enclose the <App/> within <BrowserRouter></BrowserRouter>
<BrowserRouter><App /></BrowserRouter>
```
In the app component (or where it is needed)
```js
import { Routes, Route, Link } from 'react-router-dom';
// Whereever there is a sequence of navbar buttons where you would generally use <a></a>, use instead <Link to=>
<Link to='/' className='nav-item'>Home</Link> // for same page
<Link to='/about-me' className='nav-item'>About Me</Link>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about-me' element={<Aboutme/>}/>
</Routes> // to describe the different paths
```
## Assets
Assets are everything including images, fonts etc. Generally assets folder is inside the src folder. 
Rule: If an asset is not needed by any component, store it in the public folder, otherwise store it in /src/assets
Importing an image/asset can work in the following way:
```js
import cat from './assets/images/cat.jpg';
// usage:
<img src={cat} alt="A pic of a cat"/>
```
alternatively:
```js
<img src={require("./assets/images/cat.jpg")} height={200}/>
```
for a url of an image on the web:
```js
const url="https://somephoto.com/somephoto.jpg";
<img src={url} height={200}/>
```
Video can simply be added using the <video/> tag
```js
<video src={vidLink} height={300} width={700} controls/>
```
For videos, you might consider using an npm package which can be found at npmjs.org.
react-player npm package is a good package.
Can install it using:
```bash
npm install react-player
```
Use:
```js
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' paying={false} volume={0.5}/>
  );
};

export default App;
```
For more details experiment with [this website](https://cookpete.com/react-player/).

For audio JavaScript has default audio constructor:
```js
const aud=new Audio("Link here");
if(aud.paused){
  aud.play();
}
else{
  aud.pause();
}
```