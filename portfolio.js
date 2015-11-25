var GLOBAL = { projects: []};

function run()
{
  update_projects();
}

function update_projects()
{
  readCSV(function(data){});
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
      }
    });
}
