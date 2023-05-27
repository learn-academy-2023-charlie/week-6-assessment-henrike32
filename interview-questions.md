# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would create a new column named 'cohort_id' to be setup as the foreign key in the  Student model, it would take in an integer data type, now I can refer to the students from the Cohort by cohort_id in the Student model.

Researched answer: It seems that you could use the command 'rails generate migration AddCohortReferenceToStudents cohort:references'
to generate a migration file that will have a method called 'change' that will add a foreign key to link the 2 tables, doing a migration to create that foreign key, that will be automatically created and named 'cohort_id', and ensuring that all changes are saved.


2. Which RESTful routes must always be passed params? Why?

Your answer: I would say GET will always have params because you need them to pull all the info you have in your database.

Researched answer: POST, PUT or PATCH, the reason is that whenever they involve in creating/modifying resources they require params to be passed to work correctly. The server needs to receive the necessary data through params, allowing it to make the appropriate modifications or create the resources with the provided information.

3. Name three rails generator commands. What is created by each?

Your answer: 'rails g model ' , 'rails resource' , Model.create params1: params:2.

Researched answer: 'rails generate migration MigrationName: This command generates a migration file in the db/migrate directory,
'rails generate scaffold ResourceName attribute:type' This command generates a model, controller, views, and migration files all in one go, providing a complete CRUD implementation for a resource, 'rails generate model ModelName attribute:type' This command generates a model file in the app/models directory and a corresponding migration file in the db/migrate directory. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
