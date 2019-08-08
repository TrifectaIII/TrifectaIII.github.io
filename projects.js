// div to place projects in
var project_listings = document.querySelector('.project-listings');

//project json request
var proj_req = new XMLHttpRequest();

//when request finishes
proj_req.onload = function () {
	if (proj_req.status >= 200 && proj_req.status < 400) {
		
		//Get full response as JSON
        let projects = JSON.parse(proj_req.response);
        // console.log(projects);

        var projectsHTML = '';

        //loop thru all projects in json
        for (let proj_name in projects) {
            let proj = projects[proj_name];

            //add html code for this project
            //header
            projectsHTML += '<h4 class="project-header">'+proj_name+'</h4>';
            projectsHTML += '<hr class="project-rule">';

            projectsHTML += '<div class="row">';
                projectsHTML += '<div class="six columns">';
                    projectsHTML += '<p>';
                        //description
                        projectsHTML += proj.description;
                        projectsHTML += '<br>';
                        //languages
                        projectsHTML += '<b>Languages: </b>'+proj.languages;
                        projectsHTML += '<br>';
                        //techniques
                        projectsHTML += '<b>Techniques: </b>'+proj.techniques;
                        projectsHTML += '<br>';
                        // github link
                        projectsHTML += '<a href="' + proj.github + '" class="project-link"><b>GitHub Repo</b></a>';
                    projectsHTML += '</p>';
                projectsHTML += '</div>';
                projectsHTML += '<div class="six columns">';
                    //image
                    projectsHTML += '<img src="'+proj.image+'" class="project-image">';
                projectsHTML += '</div>';
            projectsHTML += '</div>';
        };

        //alter page element to insert projects
        project_listings.innerHTML = projectsHTML;

    } else {
		console.log('projects request completed incorrectly. Error', proj_req.status);
	};
};

//when request errors
proj_req.onerror = function () {
    console.log('projects request completed incorrectly. Error', proj_req.status);
}

//send request
proj_req.open('GET', '/projects.json', true);
proj_req.send();