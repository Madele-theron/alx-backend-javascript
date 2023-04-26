interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Kate",
    lastName: "Lopez",
    age: 56,
    location: "Washington DC"
}

const student2: Student = {
    firstName: "Henry",
    lastName: "Willemse",
    age: 34,
    location: "Cape Town"
}
const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const nameCell: HTMLTableCellElement = row.insertCell();
    nameCell.textContent = student.firstName;
    const locationCell: HTMLTableCellElement = row.insertCell();
    locationCell.textContent = student.location;
})


