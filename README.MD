# Dom Manipulation

- In DOM manipulation, you are going to use javascript to create or manipulate an html page.
- You need to make sure your javascript file is connected to your html file
- Put this in your html file and create a `.js` file that has the same name.

```
<script src="nameOfJSFile.js"></script>
```

You can use the `document` keyword in javascript files that are connected to html to access the DOM. Remember, it's like an object, so you will have access to things using `.`notation.

## Select

- If you have an html element on your html page, you can select it using the following syntax

```
// This will get you the element by its id name
    const filler = document.getElementById("filler")

// This will get you the elements by their className
// Remember, this will return an array []
    const filler2 = document.getElementsByClassName("lorem")

// You can use querySelector to get an element either by className or id
const byclass = document.querySelector(".lorem") // gets by className
const byId = document.querySelector("#filler").innerText; // gets by id
```

- You can select the container at a later time in your code, but you cannot put any code on the page unless you select where it's going to go first.

## Create

- You can create html elements in javascript using the following syntax

```
    const dustin = document.createElement("p");
```

- If you change the element inside of the `" "` you can create different elements depending on what you want.
- Example:

```
    const joe = document.createElement("p"); makes a paragraph tag

    const frasier = document.createElement("h1"); makes a h1 tag
```

- You can add information or innerText to an element by doing `.innerText` on an element you created.

```
    const joe = document.createElement("p"); makes a paragraph tag

    joe.innerText = "Joe"
    // this is like creating the following html code
    <p>Joe</p>

```

## Append

- Once you have created your elements, you need to append them to the page, otherwise they will not show up on your web browser.

```
    // Select the container
    const studentContainer = document.querySelector(".students");

    // Create the elements
    const joe = document.createElement("p"); makes a paragraph tag
    joe.innerText = "Joe"

    // Append them to the DOM
    studentContainer.append(joe);

```