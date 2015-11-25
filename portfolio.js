var GLOBAL = { projects: []};

function run()
{
  update_projects();
}

function update_projects()
{
  readCSV(function(data)
  {
    fillPortfolio(data)
  });


}

function readCSV(f)
{
    d3.csv("projects.csv", function(error, data) {
      if (error)
      {
        //If error is not null, something went wrong.
         console.log(error);  //Log the error.
      }
      else
      {
        // add the new data to GLOBAL.data
         GLOBAL.projects.push.apply(GLOBAL.projects, data)
         f(data)
      }
    });
}

function fillPortfolio(data)
{
  // Define which div (from the html file) we will be using
  var projectElement = document.getElementById("project_list");

  for (var i = 0; i < GLOBAL.projects.length; i++)
  {
    // Create div to hold all info for each project
    var projectItem = document.createElement("div")
    projectElement.appendChild(projectItem)
    projectItem.className = "project_item"

    // Create and add the title to the div, as a H2 level
    var title = document.createElement("H2")
    projectItem.appendChild(title)
    var titleText = document.createTextNode(GLOBAL.projects[i]["Title"])
    title.appendChild(titleText);

    // Create and add the text to the div
    var title = document.createElement("p")
    projectItem.appendChild(title)
    var titleText = document.createTextNode(GLOBAL.projects[i]["Description"])
    title.appendChild(titleText);
  }
}
