function Student(data){
	if (!(this instanceof Student)) return new Student(data);

	this.name = data.name;
	this.account = data.account;
	this.link = interpolate('https://github.com/{ account }', data);
}

function StudentsViewModel(homeworks, students){
	this.homeworks = ko.observableArray(homeworks);
	this.students = ko.observableArray(students.slice(0, 5).map(Student));
	this.issues = interpolate('https://api.github.com/repos/{ account }/{ project }/issues');

	this.mark = function(student, work){
		return '6';
	};
}
