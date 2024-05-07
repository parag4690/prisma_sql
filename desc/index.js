"use strict";
// import {Client} from "pg";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertData(email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield prisma.user.create({
            data: {
                email,
                name
            }
        });
        console.log(result);
    });
}
function readData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        let userData = yield prisma.user.findUnique({
            where: {
                email
            }
        });
        console.log(userData);
    });
}
let todoTask = [
    { title: "pata nhi", description: " koni btau ", userid: 4 },
    // {title : "luch" , description : "k dikt h koni khau" , userid : 2 } ,
];
function todoTaskInsert(todoTask) {
    return __awaiter(this, void 0, void 0, function* () {
        const createMany = yield prisma.todo.createMany({
            data: todoTask
        });
        console.log(createMany);
    });
}
// todoTaskInsert(todoTask);
// 
function getTodoAndUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(" checking asdlkfjadfsj ");
        const findUser = yield prisma.user.findFirst({
            select: {
                name: true,
                email: true,
                todo: {
                    select: {
                        title: true,
                        description: true
                    }
                }
            },
            where: {
                id: userId
            }
        });
        console.log(findUser);
    });
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
