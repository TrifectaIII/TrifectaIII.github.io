var proj_req = new XMLHttpRequest();

proj_req.onload = function () {
	if (proj_req.status >= 200 && proj_req.status < 400) {
		
		//Get full response as JSON
        let respJSON = JSON.parse(proj_req.response);
        console.log(respJSON);
    } else {
		console.log('projects request completed incorrectly. Error', proj_req.status);
	};
};

proj_req.onerror = function () {
    console.log('projects request completed incorrectly. Error', proj_req.status);
}

proj_req.open('GET', '/projects.json', true);
proj_req.send();