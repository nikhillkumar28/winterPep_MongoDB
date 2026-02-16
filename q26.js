// Working with Shards
// Create folder shards
// Create folders confirm,confr,s1,s1r,s2,s2r inside shards
// These are six different servers located in different countries
// cd "C:\Program Files\MongoDB\Server\8.2\bin"

// Step 1 : Configuring Server

// mongod --configsvr --replSet cf --dbpath "D:\dbshards\conf" --port 27018
// mongod --configsvr --replSet cf --dbpath "D:\dbshards\confr" --port 27019
// mongosh --port 27018
rs.initiate({
    _id:"cf",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"}
    ]
});
rs.config();
rs.status();

// Step : 2 Shard1

// mongod --shardsvr --replSet s1 --dbpath "D:\dbshards\s1" --port 27020
// mongod --shardsvr --replSet s1 --dbpath "D:\dbshards\s1r" --port 27021

rs.initiate({
    _id:"s1",
    members:[
        {_id:0,host:"127.0.0.1:27020"},
        {_id:1,host:"127.0.0.1:27021"}
    ]
});
rs.config();
rs.status();

// Step : 3 Shard 2

// mongod --shardsvr --replSet s2 --dbpath "D:\dbshards\s2" --port 27022
// mongod --shardsvr --replSet s2 --dbpath "D:\dbshards\s2r" --port 27023

rs.initiate({
    _id:"s2",
    members:[
        {_id:0,host:"127.0.0.1:27022"},
        {_id:1,host:"127.0.0.1:27023"}
    ]
});
rs.config();
rs.status();

// Step : 4 Routing 
// New tab
// mongos --configdb cf/127.0.0.1:27018,127.0.0.1:27019 --port 27050

// Step : 5 Adding shards
// mongosh --port 27050
// sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021")
// sh.addShard("s1/127.0.0.1:27022,127.0.0.1:27023")
// sh.status();

// use icici
// sh.enableSharding("icici");
// cd "C:\Program Files\MongoDB\Server\8.2\bin"
// sh.getShardedDataDistribution();
// db.customers.find()

// C202 211 P305 1,2 D18 =>3K

