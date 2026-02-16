// use admin
db.createUser({
    user:"admin",
    pwd:"admin",
    roles:[{role:"root",db:"admin"}]
});

db.createUser({
    user:"user1",
    pwd:"user1",
    roles:[{role:"read",db:"lpu26a"}]
});

db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{role:"read",db:"lpu26a"}]
});

//mongosh -u "admin" --authenticationDatabase "admin" -p
db.createUser({
        user: "user3",pwd: "user3", roles: [    { role: "read", db: "amazon" } ]})

        