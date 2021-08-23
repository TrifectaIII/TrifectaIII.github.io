// TOOLS ---------------------------------------------------------

//compile html code from template using handlebars
var tools_parser = Handlebars.compile(document.querySelector('.tools-template').innerHTML);
//parse code and place code into div
document.querySelector('.tools').innerHTML = tools_parser({tools:tools});




// PROJECTS ------------------------------------------------------

//copy projects to edit
var projectsFormatted = JSON.parse(JSON.stringify(projects));

//replace lists with joined strings
for (let proj in projectsFormatted) {
    projectsFormatted[proj]['languages'] = projectsFormatted[proj]['languages'].join(', ');
    projectsFormatted[proj]['techniques'] = projectsFormatted[proj]['techniques'].join(', ');
}

//compile html code from template using handlebars
var projects_parser = Handlebars.compile(document.querySelector('.projects-template').innerHTML);
//parse code and place code into div
document.querySelector('.projects').innerHTML = projects_parser({projects:projectsFormatted});