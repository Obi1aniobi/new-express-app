const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { Client } = require('pg');

app.use(express.json());

app.get('/hello-world', (request, response) => {
  response.send('Hello World!')
})

async function insertStudent(data) {
    let client
    try{
        client = new Client({
             //you have this
             host: 'dpg-ch3bqequt4m9tsckm0cg-a.frankfurt-postgres.render.com',
                    port: 5432,
                    database: 'learning_sql_1y7q',
                    user: 'peter',
                    password: 'NPq68LzqToDhloxMYVw6dm8Q1XQYyw9Y',
                    ssl: { rejectUnauthorized: false}
          })
        await client.connect()
        await client.query(`
        insert into public.class_students(name,email_address)VALUES('${data.name}', '${data.email}' )`)
    }catch(e){
        console.error(`[ERROR in insertStudent]: ${e}`);
        throw e;
    }finally{
        client.end()
    }
  }

app.post('/create-student', async (request, response)=>{
  // write the code to insert some hard coded student in PG-SQL(on render)
  let message = "", status = 0;
  try{
    const data = request.body
    await insertStudent(data)
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})