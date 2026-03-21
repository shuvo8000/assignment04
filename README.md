1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
These are used to select elements from the HTML page.

getElementById selects only one element using its ID. ID is always unique, so it returns a single element.

getElementsByClassName selects elements using class name. It returns a list of elements, not just one.

querySelector selects the first element that matches a CSS selector like id, class, or tag.

querySelectorAll selects all elements that match a CSS selector and returns them as a list.

So, the main difference is how many elements they return and how we select them.

2. How do you create and insert a new element into the DOM?

Answer:
To create and insert a new element, we follow three steps.

First, we create the element using createElement().
Then, we add some content like text.
Finally, we insert it into the page using appendChild().

Example:

const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);

This will create a new div and show it on the webpage.

3. What is Event Bubbling? And how does it work?

Answer:
Event bubbling means when an event happens on a child element, it moves up to its parent elements.

For example, if we click a button inside a div, first the button event runs, then the div event runs.

So the event goes from child to parent step by step. This is called bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation means adding one event listener to a parent element instead of adding many listeners to child elements.

The parent handles events for its children using the event target.

It is useful because it reduces code, improves performance, and also works for elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() is used to stop the default behavior of the browser.
For example, it can stop a form from submitting.

stopPropagation() is used to stop the event from moving to parent elements.

So, preventDefault stops browser action, and stopPropagation stops event flow.
