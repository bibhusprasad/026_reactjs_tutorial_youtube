# 026_reactjs_tutorial_youtube

https://www.youtube.com/playlist?list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu

------------------------
react-blog
------------------------
### 01. Initial Setup

>npm create vite

>npm run dev

[Initial Commit](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/c951e106202606f7fdf018850e3cc334b50c11b4)

### 02. Components

Must be start with capital letter

[React Components](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/c06713659c7333663486098350ce1c0bdd2250f2)

### 03. Import and Export

### Export

* We can export one Default export like "export default App;". This is called Defalut export.
* But we can export as many as Named Exports like "export function Profile() {}"
* Multiple Named export like "export { Settings, UserKey };"

### Import

Same for import

* //default import 
* import Login from "./UserComponent";
* //multiple named imports
* import { Profile, Settings, UserKey } from "./UserComponent";

[Import and Export](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/a6bcc6ba56963a82c05618d138c5307a1a046c3c)

### 04. JSX in React

* JSX is a syntax extension for JavaScript thats lets you write HTML-like markup inside a JS file.

![plot](/images_for_note/04.JSX.png?raw=true)

[JSX Intro](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/83b4392b8269924d7e60fc4ac6ed9fc4feecfc2e)

[JSX Exercise 1](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/ed11202193345502613dcb3fcf77962fcfda8ab6)

### JSX with Curly Braces

[JSX with Curly Braces](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/980ec2bc3d0b62f50f0d1fc23143c531596d829f)

[Click Event and Function Call](https://github.com/bibhusprasad/026_reactjs_tutorial_youtube/commit/665d4dcbab495862974701c01154064d9507d251)

### 05. State in React

* State is a container to store data like variable
* This is mutable and dynamic
* We have to import it when we want to use it
* It re-render component automatically so that data can visible on UI

### Hooks in React JS

- Hooks are the special feature for functional component
- Hooks let you use diufferent React features from your components
    * State
    * Life Cycle methods
    * Side effects etc..
- example useState, useId