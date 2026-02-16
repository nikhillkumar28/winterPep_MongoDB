db.employees.insertOne({
    name: "Sai",
    age: 21,
    email: "sai@gmail.com",
    department: "IT",
    salary: 100000,
    location: ["fl", "ca"],
    date: new Date()
})
db.employees.insertMany([
{
    name: "Nikhil",
    age: 21,
    email: "nikhil@gmail.com",
    department: "IT",
    salary: 1700000,
    location: ["Ndls", "Pnbe"],
    date: new Date()
},
{
    name: "Kumar",
    age: 21,
    email: "kumar@gmail.com",
    department: "HR",
    salary: 500000,
    location: ["la", "da"],
    date: new Date()
},
{
    name: "NK",
    age: 21,
    email: "nk@gmail.com",
    department: "IT",
    salary: 100000,
    location: ["fa", "hhha"],
    date: new Date()
}
])
// mongosh to connect to mongoDB server
// use database_name to create a database
// db.employees.find() to find all documents
// db.employess.insertMany([{},{},{}]) to insert many documents
// db.collection_name.udateOne()
// db.collection_name.udateMany()