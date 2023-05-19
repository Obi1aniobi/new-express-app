//function connectToDatabase(){
   /* this file will be responsible for :
 1. to connect to db --
 2. run any given query
*/
//const { Client } = require('pg')

/*async function runQuery(query){
    let connection
    try{  
        connection = new Client({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            ssl: { rejectUnauthorized: false }
          })
         await connection.connect()
         return await connection.query(query)
    }catch(error){
        console.error(`[ERROR in runQuery] ${error.message}`)
        throw error
    } finally {
        connection.end()
    }
}

module.exports = {
    runQuery
} 
}*/


/*const { Client } = require('pg')

async function connectToDatabase(){


app.post('/student', async (request, response)=>{
    // write the code to insert some hard coded student in PG-SQL(on render)
    let message = "", status = 0;
    try{
        const data = request.body
        await runQuery(`
    insert into public.class_students(name,email_address)VALUES('${data.name}', '${data.email}' )`);
    message = `SUCCESS - I was able to create a student`
    status = 201;
}catch(error){
    console.error(`ERROR in POST ${error.message}`)
    message = `ERROR- I could not create the student`
    status = 500;
} finally {
    response.status(status).send(message)
}

})
}
*/

const { Client } = require('pg')
const { runQuery } = require("./database")

async function connectToDatabase(){
    try{
        client = new Client({
            host: 'dpg-ch3bqequt4m9tsckm0cg-a.frankfurt-postgres.render.com',
            port: 5432,
            database: 'learning_sql_1y7q',
            user: 'peter',
            password: 'NPq68LzqToDhloxMYVw6dm8Q1XQYyw9Y',
            ssl: { rejectUnauthorized: false }
          })
        await client.connect()
    }catch(error){
        throw error
    }
}
async function runQuery(query){
    let connection
    try{  
         connection = await connectToDatabase()
       return await connection.query(query)
    }catch(error){
        throw error
    } finally {
        connection.end()
    }
}

module.exports = {
    runQuery
}