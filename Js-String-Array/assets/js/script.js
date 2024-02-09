"use strict"

//1.

// function getReverseTheWord(text){
//    let newText="";
//    for (let i = text.length-1; i >= 0; i--) {
//       newText+=text[i]
//    }
//    return  newText;
// }

// console.log(getReverseTheWord("Cavid"));

//2.

// function getByBirthday(age){

//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let birthYear = currentYear-age;
//     return birthYear;
// }
// console.log(getByBirthday(26));


//3.

let person1 = {
    id: 1,
    name: "Arzu",
    fullName: "Arzu Kerimli",
    age: 26,
    salary: 500
}

let person2 = {
    id: 2,
    name: "Nurane",
    fullName: " Nurane Ismayilzade",
    age: 21,
    salary: 1000
}

let person3 = {
    id: 3,
    name: "Nesir",
    fullName: "Nesir Kerimli",
    age: 28,
    salary: 2250
}

let person4 = {
    id: 4,
    name: "Hebibe",
    fullName: "Hebibe Axundova",
    age: 26,
    salary: 700
}

let people = [person1, person2, person3, person4]


//1)

let countPerson = (people) => {
    return people.length;
}
// console.log(countPerson(people));


//2)

function getFindAverageOfSalary(people) {
    let sumSalary = 0;
    for (const person of people) {
        sumSalary += person.salary;
    }
    return sumSalary / people.length
}

// console.log(getFindAverageOfSalary(people));

function search(people, searchText) {

    let newPersons = people.filter(person => person.fullName.toLowerCase().includes(searchText.toLowerCase()));
    for (const person of newPersons) {
        return (person)
    }

}
//console.log(search(people,"nu"));


function searchName(people, searchText) {
    let newPersons = people.filter(person => person.fullName === searchText);
    for (const person of newPersons) {
        return (person)
    }
}

//console.log(searchName(people,"Hebibe Axundova"));
