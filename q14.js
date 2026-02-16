db.employees.find(
    {},
    {name:1,department:1}
);

db.employees.find(
    {},
    {name:1,dept:"$department"}
);

db.users.insertOne(
    {name:"Krishna",age:20,address:{addr1:"ccity center",city:"Chandigarh"}}
);

db.users.insertMany([
    {name:"A",age:21,address:{addr1:"town center",city:"New Delhi"}},
    {name:"B",age:27,address:{addr1:"CP",city:"NDN"}},
]);

db.users.find({},{name:1,_id:0,"address.city":1});

db.users.find({},{name:1,_id:0,Address:"$address.city"});

db.users.updateMany(
    {},
    {$set:{Skills:["Python","C++","JavaScript"]}}
);

db.users.updateOne(
  { name: "Krishna" },
  { $push: { Skills: ["Java","Node.js"] } }
);

db.users.updateOne(
  { name: "A" },
  { 
    $push: { 
      skills: { $each: ["MongoDB", "React", "Node.js"] } 
    } 
  }
);
//delete a field..
db.users.updateOne(
  { name: "Krishna" },
  { $unset: { skills: "" } } // The value "" is just a placeholder; it doesn't matter what it is
);

//remove specific value 
db.users.updateOne(
  { name: "Krishna" },
  { $pull: { skills: "Java" } }
);

db.users.aggregate([
  { 
    $project: { 
      _id: 0,      
      name: 1,  
      email: 1     
    } 
  }
])

//Condition
db.employees.aggregate([ 
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 45000] }, 
          then: "Grade A",
          else: "Grade B"
        }
      }
    }
  }
]);

//Switch operator for multiple condition

// grade: {
//   $switch: {
//     branches: [
//       { case: { $gt: ["$salary", 60000] }, then: "Grade A" },
//       { case: { $gt: ["$salary", 40000] }, then: "Grade B" }
//     ],
//     default: "Grade C"
//   }
// }

db.employees.aggregate([ 
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
      $switch: {
      branches: [
      { case: { $gt: ["$salary", 1600000] }, then: "Grade A" },
      { case: { $gt: ["$salary", 170000] }, then: "Grade B" }
      ],
      default: "Grade C"
      }
      }
    }
  }
]);

db.users.aggregate([
    {
        $project:{
            _id:0,name:1,salary:1,grades:{
                $switch:{
                    branches:[
                        {case:{$gt:["$salary",1600000]},then:"Grade A"},
                        {case:{$gt:["$salary",170000]},then:"Grade B"}
                    ],
                    default:"Grade C"
                }
            }
        }
    }
]);

//
db.orders.insertOne({name:"ABC"});
_id:o1
db.orders.insertOne(
    {
        empid:ObjectId('69830972ae2be79c07628ca3'),
        product:"Desktop",
        orderValue:17000
    }
)


// q14 Lect
db.employees.find({}, { name: 1, dept: "$department" });

db.users.insertOne({
  name: "Ria",
  age: 21,
  address: { addr1: "25 Dr lane", city: "Jax", state: "FL" },
});

db.users.find({}, { name: 1, age: 1, "address.city": 1 });

db.users.find({},{
   name:1,
   age:1,
   city:"$address.city",
   state:"$address.state"
})

//Add Skills array for all users
//and populate Java, Python

db.users.updateMany(
   {},
   {$set:{Skills:["Java","Python"]}}
)

db.users.updateOne(
   {name:"Ria"},
   {$addToSet:{Skills:".NET"}}
)


db.users.find({},{
   _id:0,
   name:1,
   Skills:1
})

db.users.aggregate([
   {$project:{
      _id:0,
      name:1,
      Skills:1
   }},
   {$unwind:"$Skills"}
])