// import {Client} from "pg";

// let client = new Client({
//     connectionString : "postgresql://sharmaparag4690:KoFag5MOEr8S@ep-misty-lab-a57frkof-pooler.us-east-2.aws.neon.tech/lect1?sslmode=require://sharmaparag4690:************@ep-misty-lab-a57frkof-pooler.us-east-2.aws.neon.tech/lect1?sslmode=require"
// })

// async function connectdatabase(){
//     await client.connect();
//     const result = await client.query(`
//      CREATE TABLE users(
//         id SERIAL PRIMARY KEY , 
//         username VARCHAR(50) UNIQUE NOT NULL , 
//         email VARCHAR(255) UNIQUE NOT NULL , 
//         password VARCHAR(255) NOT NULL , 
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//      );
    
//     `)
// }connectdatabase();

// async function insertData(name:string , email:string , password : string ){
//     await client.query(`
//             INSERT INTO users (username, email, password) VALUES ($1 ,$2,$3)
//           `
//           , [name , email , password]
//           );
// }

// // insertData("prag" , "abc@g.com" , "12345455")
// // insertData("pragI" , "abJJc@g.com" , "12345455")
// // insertData("prASagI" , "abJJc@g.com" , "12345455");

// // insertData("asdfas" , "kasdf" , "1122");

// async function updateName(name: string) {
    
//         await client.query(`
//             UPDATE users SET username = $1
//             WHERE id = 1;
//         ` ,[name]);
//         console.log('Name updated successfully');
    
// }

// // Call the function
// updateName("mhu");


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function insertData(email:string , name:string){
    let result =  await prisma.user.create({
       data:{
        email , 
        name
       }
    })
    console.log(result);
}
async function readData(email : string) {
    let userData = await prisma.user.findUnique({
        where:{
            email
        }
    })
    console.log(userData);
}

// readData("parg4690@gmail.com");
// insertData("parag@gmail.com" , "parag Sharma");
// insertData("par@gmail.com" , "par");

// async function gettAllUser(){
//     const allUser= await prisma.user.findMany({});
//     console.log(allUser);
// }

// let mulData = [
//     {name:"nobita" , email : "nobita@gmail.com"} , 
//     {name:"doremon" , email:"doremon@gmail.com"} , 
//     {name:"gian" , email:"gian@gmail.com"}
// ]

// async function mulipleData(mulData : Array<object>){
//      const createMany = await prisma.user.createMany({
//         data : mulData ,
//     });
//     console.log(createMany);

// }
// mulipleData
// gettAllUser();
// insert todo
interface todointerface {
    title :string,
    description :string,
    userid: number
}
let todoTask = [
    {title : "pata nhi" , description : " koni btau " , userid : 4 } ,
    // {title : "luch" , description : "k dikt h koni khau" , userid : 2 } ,

]
async function todoTaskInsert(todoTask : todointerface[]){
    const createMany = await prisma.todo.createMany({
         data : todoTask
           
         
    });
    console.log(createMany);
}


// todoTaskInsert(todoTask);

// 
async function getTodoAndUser(userId : number){
    console.log(" checking asdlkfjadfsj ");
    const findUser = await prisma.user.findFirst({
        select : {
          name : true ,
          email : true ,
          todo :{
            select :{
                title : true,
                description : true
            }
          } 
        },
        where : {
            id : userId
        }
    })
    console.log(findUser);
}
getTodoAndUser(4); 


// delete multiple user :-> 
// async function deleteKro(userArr : Array<number>){
//   for(const userId of userArr){
//      await prisma.todo.delete({
//          where : {
//             id : userId
//          }
//     });
//   }
// }
// const userIdDelete = [3,4,5,6,7,8];
// deleteKro(userIdDelete);

