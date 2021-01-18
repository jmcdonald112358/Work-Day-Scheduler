# Work-Day-Scheduler
This is a simple calendar/schedule application for Homework 5. The project involved creating a functional calendar/scheduling interface that allows the user to input tasks for each hour block of a given work day, with functionality to highlight the current hour and future hours. 

When it comes to managing a busy work day, it is helpful to have an application with a simple interface that you can use to input tasks and dedicate specific blocks of time for those tasks. Having a set plan of what to do and when can be very helpful in ensuring that everything you need to get done gets done without any tasks getting forgotten while minimizing getting caught in time-sinking tasks that take longer than expected. With a task management interface, it's easy to make sure that a given task that's taking longer than expected is paused in favor of the next on the list when the target time of the next task arrives to ensure that that task does not get overlooked. 

This simple schedule management application helps accomplish this by making it easy to input your tasks for each hour block. As the day progresses, the current hour is highlighted to draw your attention to the task you should be working on currently. Once the next hour arrives, the previous hour's task becomes unhighlighted and thus encourages you to move onto the next item on the list. 


## Application usage

1. Navigate to the application
2. If tasks have already been input for the day, they will be loaded with the page
//Image of existing tasks loaded
3. If no tasks have been created, an empty schedule will be loaded and ready for you to input the day's tasks
//Image of empty task list
4. To add a new task, or edit an existing one, simply click into the 'Add task' box and type your task in, and then click save
//Image of active textarea
   1. Please note that adding/editing tasks for past hours is not allowed. Only the current hour or future hours can have tasks added
   //Image of disabled save button
5. To reset the schedule, click the 'Reset schedule' button to clear all saved tasks
//Image of reset button


## Elements used in this projcet

1. Provided starter code for the main HTML file and CSS styling file
2. jQuery for all script functionality to generate, insert, and manipulate DOM elements
3. Moment.js for time-related components

## Resources

1. References to class activities, including:
   1. Week 4 activity 23 (local storage objects)
   2. Week 5 activity 11 (fridge game)
2. Class TAs
3. Classmates
4. Stackoverflow
5. W3 Schools


## Links

- Project: https://jmcdonald112358.github.io/Work-Day-Scheduler/ 
- Repository: https://github.com/jmcdonald112358/Work-Day-Scheduler


## Additional notes

- I added the 'Reset Schedule' button to provide a way for the user to empty local storage and enter a new set of tasks. 
- I added additional functionality for disabling the save button on past hours because it doesn't make sense to add a task for an hour that has already passed.
- Currently, I am having some issues with the way the elements scale on mobile devices. I was able to get it to not do weird things on smaller desktop screens, but appropriate resizing on mobile sizes has been difficult. I may reconsider redoing the whole project entirely with Bootstrap elements in the future, as Bootstrap makes it much easier to ensure a page is responsive to mobile devices. In the meantime, I intend to inquire with a TA on if there's some simple piece of the CSS I'm missing that would produce the desired scaling, and will correct that accordingly if that is the case. 
- Future updates I likely will make include: 
   - Functionality for clearing a single hour's task with a simple button click (versus the user having to delete the text and save manually to reset that hour)
   - Functionality for alerting the user to the current hour's task when the hour changes
   - Functionality for adding tasks for future days instead of just the current day
   - Functionality for marking a particular task as actually being done. Currently, a user would have to just assume that a task for a past hour is done, but I'd like to add the ability for them to click a "Finished" button that will add some styling to that hour to indicate that the task is finished
