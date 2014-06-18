function load(url){
	var request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send(null);

	return request.response;
}