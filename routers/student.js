const express = require('express');
const studentRouter = express.Router();
const {runQuery } = require('../database')


//gets all students
studentRouter.get('/', async (request,response) => {
    let message = "", status = 0;
    try{
      const data = request.body
      await runQuery(`select * from public.class_students where id='${id}'`);
          message = `SUCCESS - I was able to select student`
          status = 201;
          }catch(error){
          console.error(`ERROR in POST ${error.message}`)
          message = `ERROR- I could not select student`
          status = 500;
          } finally {
          response.status(status).send(message)
          }
})


//gets one student
studentRouter.get('/:id', async (request, response)=>{
    // write the code to insert some hard coded student in PG-SQL(on render)
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`select * from public.class_students where id='${id}'`);
          message = `SUCCESS - I was able to select student`
          status = 201;
          }catch(error){
          console.error(`ERROR in POST ${error.message}`)
          message = `ERROR- I could not select student`
          status = 500;
          } finally {
          response.status(status).send(message)
          }
  
  })


//Post - creating a student 
studentRouter.post('/', async (request, response)=>{
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

  //updating-- url params
  studentRouter.put('/student/:id', async (request, response)=>{
    // write the code to insert some hard coded student in PG-SQL(on render)
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`update public.class_students set name='${data.name}', email_address='${data.email}' where id='${id}' `);
          message = `SUCCESS - I was able to update student`
          status = 201;
          }catch(error){
          console.error(`ERROR in POST ${error.message}`)
          message = `ERROR- I could not update student`
          status = 500;
          } finally {
          response.status(status).send(message)
          }
  
  })

  studentRouter.delete('/:id', async (request, response)=>{
    // write the code to insert some hard coded student in PG-SQL(on render)
    let message = "", status = 0;
    try{
      const id = request.params.id
      await runQuery(`delete from public.class_students where id='${id}'`);
          message = `SUCCESS - I was able to delete student`
          status = 201;
          }catch(error){
          console.error(`ERROR in POST ${error.message}`)
          message = `ERROR- I could not delete student`
          status = 500;
          } finally {
          response.status(status).send(message)
          }
  
  })


module.exports = {
   studentRouter 
}