// Transactions in MongoDB..
// -------------------------
// Login to Replica Server
// Use hdfc
db.customers.insertOne({_id:"c1",name:"A",balance:1000});
db.customers.insertOne({_id:"c2",name:"B",balance:5000});
db.customers.insertOne({_id:"c3",name:"C",balance:1500});
const session=db.getMongo().startSession;
session.startTransaction();
var custCollection=session.getDatabase("hdfc").customers;
custCollection.updateOne({_id:"c1"},{$inc:{$balance:-100}});
custCollection.updateOne({_id:"c2"},{$inc:{$balance:100}});

session.commitTransaction();
session.endSession();


