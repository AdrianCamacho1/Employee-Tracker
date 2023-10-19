// customTODO's create requires need for this file
const inquirer = require('inquirer'); 
const mysql = require("mysql2");
// const sequelize = require('./config/connection');


//creates the connection to mySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Showstar15',
    database: 'jobs_db'
  },
  console.log("Connecting to jobs")
  );

//   // simple query
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
  
//   // with placeholder
//   connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );
//TODO use inquierer to build the questions that take the user, Build the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const questions = [
  {
    type: 'list',
    message: "Choose what to do.",
    choices: ['View all employees', 
    'View all departments', 
    'View all roles', 
    'Add an employee', 
    'Add a department', 
    'Add a role', 
    'Update an employee role',
    'Quit'],
    name: 'Chooses'
}];

async function init() {
  try {

      const userResponses = await inquirer.prompt(questions);
      console.log(userResponses);
      console.log("Going to!");

  } catch (error) {
      console.log(error);
  }
};
// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

//Function call to initiallize
init();