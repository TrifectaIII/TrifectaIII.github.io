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
            projectsHTML += '<h4>'+proj_name+'</h4>';

            projectsHTML += '<p>';
            projectsHTML += '<a href="' + proj.github + '">GitHub Repo</a>'         
            projectsHTML += '</p>';
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