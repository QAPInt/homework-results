var loadJSON = compose(JSON.parse, load);

homeworks = loadJSON('data/homeworks.json');
students = loadJSON('data/students.json');

ko.applyBindings(new StudentsViewModel(homeworks, students));