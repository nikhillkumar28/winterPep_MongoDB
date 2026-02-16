// Creating MongoDB Replica acting as different Servers..

//create folder mongoreplica
//create folder India, France, UK
//inside mongoreplica folder
//mongod --replSet rs1 --dbpath "D:\mongoReplica\India" --port 27018
//cd "C:\Program Files\MongoDB\Server\8.2\bin"
//mongod --replSet rs1 --dbpath "D:\mongoReplica\India" --port 27018
//mongod --replSet rs1 --dbpath "D:\mongoReplica\UK" --port 27019
//mongod --replSet rs1 --dbpath "D:\mongoReplica\France" --port 27020

//mongosh --port 27018

rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
});

//rs.config();
//rs.status();

//new tab
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

//use mydatabase

//db.users.insertOne({name:"Nikhil",age:21})

//mongosh --port 27019
//db.getMongo().setReadPref("secondary")
//use mydatabase
//db.users.find()

//mongosh --port 27020
//db.getMongo().setReadPref("secondary")
//use mydatabase
//db.users.find()