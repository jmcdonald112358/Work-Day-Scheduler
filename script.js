//If motivated, add additional buttons in header to switch between current day and the next 4 days (5 day span total)



//Global variables
   //Alias for current day in header
   var today = $("#currentDay") 

   //Get existing saved tasks from local storage or create empty array
   var taskArray = JSON.parse(localStorage.getItem("taskArray")) || [];

//Function to generate array of hour objects with empty tasks
function generateArray(){
   for (i = 8; i < 18; i++){

      //Set the object's hour property value
      let hour = "";
      if (i < 12) {
         hour = i + "am"; //ie: 8am
      }
      else if (i > 12) {
         hour = i - 12 + "pm"; //ie: 1pm
      }
      else {
         hour = i + "pm"; //12pm
      }
      
      //Define empty object for the current iteration
      let hourObj = {}; 

      //Add object property for the current iteration's hour, ie. "time: 8am" etc.
      hourObj.time = hour; 

      //Add empty task property for the current iteration's hour -- this will be filled when input is received and saved   
      hourObj.task = "";    

      //Push the current iteration's object into the taskArray
      taskArray.push(hourObj); 

      //Store the taskArray to local storage
      localStorage.setItem("taskArray", JSON.stringify(taskArray)); 
   }
}

//Main function
function calendar() {
   
   //Fill taskArray with objects for each hour if array is empty; else the populated array will be used subsequently to fill in the timeblocks
   if (taskArray.length === 0){
      generateArray();  
   }
   console.log(taskArray); //Remove before submitting

   //Show current day in the header
   let currentDay = moment().format("MMMM DD, YYYY");
   let currentDate = $("<span>").addClass("date");
   console.log(currentDay); //Remove before submitting
   currentDate.text(currentDay);
   today.append(currentDate);
   
   //Create timeblock row elements
   //Loop to generate all rows
   for (let index = 0; index < taskArray.length; index++) {

      //Main row container
      let timeBlock = $("<div>").addClass("time-block row");
      $(".container").append(timeBlock);

      //Hour display
      let hourVal = (taskArray[index].time);
      console.log("This is hourVal: " + hourVal); //Remove before submitting
      
      let hourDisplay = $("<div>").addClass("hour").attr("data-value", "hour" + index);
      let hourLabel = $("<span>").attr("display", "inline-block").attr("vertical-align", "middle").text(hourVal);
      hourDisplay.append(hourLabel);
      timeBlock.append(hourDisplay);

      //Task input field -- use 'future' as default to simplify past/present colorizing function .attr("rows", "2").attr("name", index)
      let taskBlock = $("<textarea>").attr("placeholder", "Add task...").attr("cols", "40").attr("id", hourVal); 
      taskBlock.text(taskArray[index].task);
      timeBlock.append(taskBlock);

      //Save button 
      let saveButton = $("<button>").addClass("saveBtn").attr("data-index", index).attr("data-hour", hourVal).text("Save");

      //Disabled save button for past hours
      let disabledSave = $("<button>").addClass("saveBtnDisabled").attr("type", "button").attr("disabled", true).text("Save");

      //Adjust block colors based on current time
      let hourFull = index + 8;
      // let hourFull = index;
      console.log("The full hour is: " + hourFull); //Remove before submitting
      let currentHourRaw = moment().format("H");
      console.log("The current hour is: " + currentHourRaw); //Remove before submitting

      if (currentHourRaw == hourFull){
         taskBlock.addClass("present");
         timeBlock.append(saveButton);
      }
      else if (currentHourRaw > hourFull) {
         taskBlock.addClass("past");
         taskBlock.removeAttr("placeholder");
         timeBlock.append(disabledSave);
      }
      else{
         taskBlock.addClass("future");
         timeBlock.append(saveButton);
      }
      
   }

   $(".saveBtn").click(function(event){
      event.preventDefault();
      let targetObj = $(this).attr("data-index");
      console.log(targetObj); //Remove before submitting
      taskArray[targetObj].task = $("#" + $(this).attr("data-hour")).val();
      localStorage.setItem("taskArray", JSON.stringify(taskArray));
   })

   //Reset schedule button -- empty local storage and refresh to re-create the array with empty tasks
   $(".resetBtn").click(function(){
      localStorage.clear();
      location.reload();
   })
}

//Initiate function
calendar();