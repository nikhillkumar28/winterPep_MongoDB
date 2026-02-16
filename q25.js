// db.courses.aggregate({
//     {$lookup:{
//         from:"modules",
//         let :{courseId:"$_id"},
//         pipelines:[
//             {$match:{$expr:{$eq:["$courseId","$$courseId"]}}},
//             {$lookup:{
//                 from:"lessons",
//                 let:[]
//             }}
//         ]
//     }
        
//     }
// })