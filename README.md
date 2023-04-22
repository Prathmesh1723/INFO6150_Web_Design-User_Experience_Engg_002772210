# INFO6150_Web_Design-User_Experience_Engg_002772210


This repository contains Assignment 8 and 9 for Web Design and User Experience course.Performed under the guidance od Prof. Vishal Chawla

# Assignment 8

A RESTAPI using Nodejs, Mongo, Expressjs and  bcrypt for password security.

Create a user which takes 3 parameters full name, email and password. Enforce strong password rule and add validation for email and full name.
API Endpoint:

POST: /user/create – User creation with a meaningful message if the user email or password is invalid)

Update the user details (full name and password only). Email should not get updated at any point. Proper error msg should be thrown if user is not present in the database.
API Endpoint:

PUT: /user/edit – Add validations for full name and password

Delete the user by taking the user's email as input
Api Endpoint:

DELETE: /user/delete

Get all the user's full name, email addresses and passwords stored in the database
API Endpoint:

GET: /user/getAll


# Assignment 9

A web page using ReactJs with a  a login page. Use usernames and passwords created in assignment 8 to login successfully.
Concepts used - React Components, React-router, MongoDB
