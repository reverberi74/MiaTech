// Object.kets(); Object.value(); Object.entries();
let student = {
    name: "Luca",
    age: 50,
    grade: "degree",
    school: "technologies and information systems"
};
console.log("Keys: "+Object.keys(student));
console.log("Values: "+Object.values(student))
const studentEntries = Object.entries(student);
console.log(studentEntries);  
studentEntries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});