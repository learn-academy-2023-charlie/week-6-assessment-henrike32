# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would create a new column named 'cohort_id' to be setup as the foreign key in the  Student model, it would take in an integer data type, now I can refer to the students from the Cohort by cohort_id in the Student model.

Researched answer: It seems that you could use the command 'rails generate migration AddCohortReferenceToStudents cohort:references'
to generate a migration file that will have a method called 'change' that will add a foreign key to link the 2 tables, doing a migration to create that foreign key, that will be automatically created and named 'cohort_id', and ensuring that all changes are saved.


2. Which RESTful routes must always be passed params? Why?

Your answer: 

Researched answer: POST, PUT or PATCH, the reason is that whenever they involve in creating/modifying resources they require params to be passed to work correctly. The server needs to receive the necessary data through params, allowing it to make the appropriate modifications or create the resources with the provided information.

3. Name three rails generator commands. What is created by each?

Your answer: 'rails g model ' , 'rails resource' , Model.create params1: params:2.

Researched answer: 'rails generate migration MigrationName: This command generates a migration file in the db/migrate directory,
'rails generate scaffold ResourceName attribute:type' This command generates a model, controller, views, and migration files all in one go, providing a complete CRUD implementation for a resource, 'rails generate model ModelName attribute:type' This command generates a model file in the app/models directory and a corresponding migration file in the db/migrate directory. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students = StudentsController method: 
Index , used to display a list of all students.

action: "GET" location: /students/new = StudentsController method: 
New , to display a form for create a new student.

action: "GET" location: /students/2 = StudentsController method: 
Show , used to display a specific student in the db, in this case the student with an ID 2 in the db.

action: "GET" location: /students/2/edit = StudentsController method: 
Edit , used to display a form for editing an existing student, in this example the student with an ID of 2.

action: "POST" location: /students = StudentsController method: 
Create , to handle the creation of a new student record.

ALSO YOU HAVE THE "POST" UPDATE/MODIFY

action: "PATCH" location: /students/2 StudentsController method: 
Update , used to alter information on a specific student, in this case the student of ID 2, typically after a form submission.

action: "DELETE" location: /students/2 StudentsController method: 
Destroy/Delete , used to handle the deletion of a student record, in this case the student with an ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1-As a user, I want to be able to create an account, so that I can have my own space to manage my to do list.
2-As a user, I want to be able to login and log out of my account, so that my tasks/progress can be stored securely.
3-As a user, I want to be able to create a new to do list, so that I can manage different subjects of my life separately. 
4-As a user, I want to add tasks to my to do list, so that I can keep track of what needs to be done.
5-As a user, I want to be able to assign priority by categorizing which tasks are more important, so that I know which tasks need to be prioritized.
6-As a user, I want to be able to assign deadlines to my tasks, so that I can ensure they are completed on time.
7-As a user, I want to mark my tasks as done/completed, so that I can keep track of my progress.
8-As a user, I want to edit my tasks, so that If something change on them I can keep them up to date.
9-As a user, I want to be able to delete tasks, if they are no longer required to be done.
10-As a user, I want to be able to view all my tasks at once in a single overview, so that I can manage them effectively.
<!-- did some extra just to practice -->
11-As a user, I want to categorize my tasks into different groups(work,personal,etc), so they can be more organized and easier to view.
12-As a user, I want to be able to filter tasks and sort them based on priority,deadline or category, so I can be more efficient.
13-As a user, I want to be able to add notes or subtasks to a task, so I can keep track of more complex tasks or projects.
14-As a user, I want my app to autosave my tasks, so that  I don't lose any data by accident if the system or browser crashes or get an error.
15-As a user, I want to be able to provide a link to share my tasks with others and/or add others to the tasks, so that I can collaborate on tasks with colleagues or family members.
