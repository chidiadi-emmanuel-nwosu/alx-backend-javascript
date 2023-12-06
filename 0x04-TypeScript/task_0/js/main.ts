interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 43,
    location: "USA",
};

const student2: Student = {
    firstName: "James",
    lastName: "Smith",
    age: 45,
    location: "California",
};

const studentList = [student1, student2];

const table = document.createElement('table');

studentList.forEach((student) => {
    const row = table.insertRow();
    const cellFirstName = row.insertCell();
    const cellLocation = row.insertCell();

    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;
});
