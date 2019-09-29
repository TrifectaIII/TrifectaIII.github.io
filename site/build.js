//copy projects to edit
var projectsFormatted = JSON.parse(JSON.stringify(projects));

//replace lists with joined strings
for (let proj in projectsFormatted) {
    projectsFormatted[proj]['languages'] = projectsFormatted[proj]['languages'].join(', ');
    projectsFormatted[proj]['techniques'] = projectsFormatted[proj]['techniques'].join(', ');
}




// div to place projects in
var project_listings = document.querySelector('.project-listings');

//template element
var projects_template = document.querySelector('.projects-template');

//compile html code from template using handlebars
var parser = Handlebars.compile(projects_template.innerHTML);
var compiled = parser({projects:projectsFormatted});

//place code into div
project_listings.innerHTML = compiled;