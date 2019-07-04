console.log('');
var list = [];




function clickOnInput(){
  var text = document.getElementById("textEntry");
  if(text.value == "Enter Something"){
    text.value = "";
  }
}

function addButton(value){
  //Retrieve the new value to add
  var newValue = document.getElementById(value);
  var newValueText = newValue.value;
  if(newValueText == "" || newValueText.length == 0){
    return false;
  }

  //Push the value to the list of values
  list.push(newValueText)

  //Print the old list plus the new element
  var printList = document.getElementById('list').children[0];
  var position = list.length-1;
  var taskPosition = "task"+position;
  printList.innerHTML = "<li onclick=clickOnTask("+position+")"+
                            " id='"+taskPosition+"'>"+
                            list[list.length-1]+"</li>"+
                            printList.innerHTML;
}

function clickOnTask(taskNumber){
  //The task clicked on is retrieved from the list
  console.log(taskNumber);
  var task = document.getElementById("task"+ taskNumber);
  console.log(task.innerHTML);
  if(task.style.textDecoration == 'line-through')
    task.style.textDecoration = 'none';
  else
    task.style.textDecoration = 'line-through';
}

function doneClick(){
  // Here we retrieve the array
  var htmlCollection = document.getElementById('list').children[0].children;
  var printList = Array.from(htmlCollection);
  // Here we go over the array to delete the values that have a line through
  var counter = 0;
  var newList = [];
  for (var i = 0; i < printList.length; i++) {
    console.log('in iteration');
    if(printList[i].style.textDecoration.includes('line-through'))
      {continue;}
    else {
      newList.push(printList[i].innerText);
    }
  }
  console.log(newList);

  // Here we reprint it without the line through values

var finalList = document.getElementById('list').children[0];
  if(newList.length != 0)
    finalList.innerHTML = "<li onclick=clickOnTask("+newList.length+") id='task"+newList.length+"'>"+newList[0] + "</li>";
  else {
    finalList.innerHTML = "";
  }


  for (var i = newList.length-1; i > 0; i--) {
    var taskPosition = "task"+i;
    finalList.innerHTML += "<li onclick=clickOnTask("+i+") id='"+taskPosition+
    "'>"+newList[newList.length - i - 1] + "</li>";
  }
  }
