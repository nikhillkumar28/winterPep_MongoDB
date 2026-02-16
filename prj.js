db.users.insertOne({
    id:"",email:"", password:"", role:"" ,name:""
}) 


db.enrollments.aggregate([
  {
    $lookup: {
      from: "courses",           
      localField: "courseId",   
      foreignField: "_id",   
      as: "courseDetails"    
    }
  },
  {
    $unwind: "$courseDetails"    
  },
  {
    $project: {
      _id: 0,
      studentId: 1,
      courseName: "$courseDetails.title", 
      status: 1
    }
  }
]).pretty();