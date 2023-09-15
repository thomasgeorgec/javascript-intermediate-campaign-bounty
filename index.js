class Student {
    constructor(name, id, score) {
        this.name = name;
        this.id = id;
        this.score = score;
    }
}

const records = [];

document.getElementById('add').addEventListener('click', () => {
    try {
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const score = parseInt(document.getElementById('score').value);
		const studentToUpdate = records.find((student) => student.id === id);

        if (studentToUpdate) {
            throw new Error('Student Already added.');
        }

        switch (true) {
            case !name:
                throw new Error('Please enter a valid name.');
            case !id:
                throw new Error('Please enter a valid ID.');
            case isNaN(score):
                throw new Error('Please enter a valid score.');
        }

        const student = new Student(name, id, score);
        records.push(student);

        document.getElementById('name').value = '';
        document.getElementById('id').value = '';
        document.getElementById('score').value = '';

        alert('Record added successfully!');
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('update').addEventListener('click', () => {
    try {
        // Implement logic to update a student record
        // You can use the student's ID to search and update the record

        //const idToUpdate = prompt('Enter the ID of the student to update:');
        //if (!idToUpdate) return; // User canceled the prompt
		const name = document.getElementById('name').value;
        const idToUpdate = document.getElementById('id').value;
        const score = parseInt(document.getElementById('score').value);

        // Find the student with the given ID in the records array
        const studentToUpdate = records.find((student) => student.id === idToUpdate);

        if (!studentToUpdate) {
            throw new Error('Student not found.');
        }
		studentToUpdate.name = name;
		studentToUpdate.score = score;
        // Implement update logic here and update the student object

        alert('Record updated successfully!');
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('view').addEventListener('click', () => {
     const tableBody = document.getElementById('records');

    // Clear the table body before adding new records
    tableBody.innerHTML = '';

    records.forEach((student) => {
        const row = tableBody.insertRow(); // Create a new row

        // Insert cells for Name, ID, and Score
        const cell1 = row.insertCell(0);
        cell1.textContent = student.name;
        
        const cell2 = row.insertCell(1);
        cell2.textContent = student.id;
        
        const cell3 = row.insertCell(2);
        cell3.textContent = student.score;
    });
});
