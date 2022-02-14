
# The To-do List

To-do apps are a staple of software development. Everyone has made one, and you will often make one to try learning new JavaScript libraries and frameworks especially (we'll be covering these later in the course). This one has a few extras: DOM manipulation and validation, and some extras that allow us to practice CSS positioning attributes.

I have provided a description, requirements, and wireframes for each exercise.

## Task One

Make a To-Do app to add and display items to be completed

Requirements:

1. Make a form with these fields:
- Input with the description of the task to be done
    - required field
- Input for the date the task must be done by
    - Date must be DD/MM/YY format
    - optional field
- submit button

2. On submit, display the task on the page
    - should show task description and date

Wireframe:

![Wireframe of Application](Drawing-4.sketchpad%20(1).jpeg)

## Task Two

Add the ability to remove a task

1. When you hover over a task item, it should change style to show it is clickable (e.g. border, background, or box-shadow).

![Hover Wireframe](Drawing-4.sketchpad%20(3).jpeg)

2. When you click the task, it should open a modal (a box on the screen) with a button to remove the task.

![Delete task Modal Wireframe](Drawing-4.sketchpad%20(2).jpeg)

3. If you click the button, it should remove the task from the list.

![Removed task Wireframe](Drawing-4.sketchpad%20(4).jpeg)

## Task Three

Add the ability to mark a task as complete

1. Add a section for completed tasks, and add titles to each section

![Wireframe with Done and To Do sections](Drawing-4.sketchpad%20(9).jpeg)

3. Add another button to the modal, with text "Complete"

![Complete button wireframe](Drawing-4.sketchpad%20(5).jpeg)

3. If the task is completed, it should be moved from the list of tasks in To Do, to a section for Done tasks.

![Completed task list wireframe](Drawing-4.sketchpad%20(7).jpeg)


## Task Four

Track when a task was finished.

1. When a task is marked as complete, set the date it displays to be the date when the button was pressed (not the due date filled in the form).

## Task Five

Warn the user when they are late to complete a task.

If the deadline for a task is in the past, and it is in the To-Do section, change the style of the task to warn the user.

![Late task wireframe](Drawing-4.sketchpad%20(8).jpeg)

## Extra challenges

There are always more features we could add! Here are some ideas:

- make a close button for the modal
- make the modal close when you click off of it
- add the ability to delete completed tasks
- store all the tasks in JavaScript objects, loop through to display them
- prevent the user from being able to add a task that was due in the past
- put the task description and due date in the modal
- add an opaque background behind the modal
- make Completed tasks a fixed height that only shows one line of text
    - make completed tasks expand to show all the text when you click on them
- add another section and button to mark tasks as is In Progress
    - make it so that there can only be ONE in progress task at a time
- add a dropdown to the form, to set how important a task is
    - change the colour of the task based on whether it's "Low priority", "Medium priority", "High priority"

![Wireframe of ideas for extra challenges](Drawing-4.sketchpad%20(10).jpeg)

For a challenge later in the course, you could go back and add a way to store tasks in the browser, so that they don't disappear when you refresh the page!

Feel free to come up with your own features and ideas; can you create an app based on this that would be useful for you day-to-day? Here are some ideas for similar projects:

- shopping lists
- meal planning
- bucket list
- tracking your mood