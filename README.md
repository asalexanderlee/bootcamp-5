# bootcamp-5

## Release 0

Your task is to complete [this react tutorial](https://reactjs.org/tutorial/tutorial.html). It is a _very_ good start to the world of React. Don't worry about grasping everything. Just try to understand the basics.

## Release 1

Now that you've gotten a little familiarity with React, use `create-react-app` to make a very basic todo list. The application should do the following:

* Allow a user to add and remove todos.
* Allow user to mark a todo as a complete/incomplete.
* When a todo is marked as complete, it should move to a completed section. If a completed todo is marked as incomplete, the todo should move back to the main list.
* Allow user to set due dates.
* Allow user to reorder todos alphabetically or by due date.
* Allow user to clear all todos.
* Allow user to color-code todos.

Do this in a branch called `[usernames]-todo1`.

Note: You should write this exercise exclusively on the front end. Do not try to connect to a server.

## Release 2

Let's continue with the progress we made in `Release 1` by adding the following functionality:

* Implement an undo button that allows users to undo between 0-10 times.
* Allow users to star/un-star todos.
* Allow users to export their todos to a CSV.
* Allow users to sort their todos into folders. _There are many ways to solve this challenge. Think thoroughly about your design before you code it. If you are ahead, implement this feature with [drag and drop](http://react-dnd.github.io/react-dnd/). Your butt will be kicked, but this is great practice for the future._

**IMPORTANT: All data (stars, undos, color-codes, due dates, etc.) should be stored in the state. Take great care when developing your data structure. It will make or break your app!**

## Release 3

Now that's we've got our todo app infrastructure down, spend whatever time you have left making it look `~~~*pretty*~~~`. I'll be looking at your CSS in our next code review, so don't cut corners!
