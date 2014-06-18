function StudentsViewModel(){
	this.homeworks = ko.observableArray([
		{ "title": "demo-project" }
	]);

	this.students = ko.observableArray([
		{ "name": "ya-kyrylenko", "account": "ya-kyrylenko" }
	]);

	this.mark = function(student, work){
		return ko.computed(function(){
			return 'A';
		});
	};
}