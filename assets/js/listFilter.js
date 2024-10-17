//See https://www.w3schools.com/howto/howto_js_filter_elements.asp

//initialize the page by showing everything
filterSelection("all")

//the main filter function
function filterSelection(filter) {
  var elements, i;
  elements = document.getElementsByClassName("filterItem");
  if (filter == "all")
    filter = "filterItem";

  // Add the "show" class (display: block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < elements.length; i++) {
    //hide each element
    w3RemoveClass(elements[i], "show");

    //then show it if the filter is found in the element's class
    classArr = elements[i].className.split(" "); //the current classes on an element
    for (j = 0; j < classArr.length; j++){
        if(classArr[j] == filter)
            w3AddClass(elements[i], "show");
    }
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, classArr, addArr;
  classArr = element.className.split(" "); //the current classes on an element
  addArr = name.split(" "); //the class(es) to be added

  for (i = 0; i < addArr.length; i++) {
    //if the class to be added is not already on the element, add it
    if (classArr.indexOf(addArr[i]) == -1) {
      element.className += " " + addArr[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, classArr, addArr;
  classArr = element.className.split(" "); //the current classes on an element
  addArr = name.split(" "); //the class(es) to be added
  
  for (i = 0; i < addArr.length; i++) {
    //if the class to be removed is on the element, remove it
    while (classArr.indexOf(addArr[i]) > -1) {
      classArr.splice(classArr.indexOf(addArr[i]), 1);
    }
  }
  element.className = classArr.join(" ");
}