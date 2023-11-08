#MERN AMAZONA

#Lesson
video 4
1.Introduction 2. Install Tools 3. Create React-App
4.Create Git Repository

video 57list product
1.create product array
2.add product images
3.render products
4.style products

6. Add routing/8add routing
1. npm i react-router-dom
1. create route for home screen
1. create router for product screen

1. Create Node.JS Server
1. run npm init in root folder
1. Update package.json set type: module
1. Add .js to imports
1. npm install express
1. create server.js
1. add start command as node backend/server.js
1. require express
1. create route for / return backend is ready.
1. move products.js from frontend to backend
1. create route for /api/products
1. return products
1. run npm start

=>. Add bootstrap UI framework

1. npm install react react-bootstrap bootstrap
1. update App.js

=> Create product and ratting component
1.create rating component 2. create product component 3. use rating component in product component
=>Create product Details Screen
1.fetch product from backend 2.create 3 columns for image, info and action

=>13create loading and message component
1create loading component
2use spinner component
3createmessagecomponent
4createutilsjstodefinegetErrorfunction

=>14implementaddtocart
1createreactcontext
2definereducer
3createstoreprovider
4implementaddtocartbuttonclick

=>15complete add to cart
1.check exist item in the cart
2.check count in stock in backend
=>16.create cart screen
1.create 2 culumns
2.display items list
3.create action column
17.Complete Cart Screen
1.click handler for inc/dec item
2.click handler for remove item 3. click handler for checkout

=>create signin screen
1.create sign in form
2.add email and password
3.add signin button

=>1create sign in from
add email and password
add signin button

=>19 connect to MongoDB Database
1.create atlas mongodb database 2. install local mongoDb database
3.npm install mongoose 4. connect to mongodb datbase

=>20 Seed Sample Data
1.create Product model
2.create user modelP
3.create seed route
4.use route in server.js
5.seed sample product
=>21.Seed Sample Users
1.create user models
2.seed sample users
3.create user routes

22.Create Signin Backen API

1.  create signin api
2.  npm install jsonwebtoken
3.  define generalToken

4.  Complete Signin Screen
    1.handle submit action
    2.save token in strore and local storage
    3.show user name in header
    24.Create shipping screen
5.  create form inputs
6.  handle save shipping address
7.  add checkout wizard
8.  create sign up screen
    1.create input forms
9.  handle submit
    3.create backend api

    26.implement Select payment method screen

    1. create input form
    2. hendle submit

10. Create place order screen
    1.show cart items, payment and address
11. handle place order action
12. create order create api

13. implement pleace order action
14. handle place order action
15. create order create api

16. Create Order Screen 1. create backend api for order/:id 2. fetch order api in frontend 3. show order information in 2 cloumns
    <!-- => Create Order Screen
    ==>create backend api for order/:id
    ==>fetch order api in frontend
    ==>show order information in 2 cloumns -->

    => Pay Order By Paypal
    ==>generate paypal client id
    ==>create api to return client id
    ==>install react-paypal-js
    ==>use PayPalScriptProvider in index.js
    ==>use usePayPalScriptReducer in Order Screen
    ==>implement loadPaypalScript functution
    ==>render paypal button
    ==>implement onApproove payment function
    ==>create pay order api in backend
    => Display Order History
    =>=> create order screen
    =>=>create order history api
    =>=>use api in the frontend

    =>.create profile screen
    ==> get user info from context
    ==>show user information
    ==>create user update api
    ==>update user info

    =>. Publish To Web pages
    =>=> create and config node project
    =>=> serve build folder in frontend folder
    =>=> create Heroku account
    =>=> connect it go github
    =>=> create mongodb atlas database
    =>=> set database connection in heroku env variables
    =>=> commit and push

Add Sidebar and Search Box

1. add sidebar
2. add search box

Create Search Screen 1. show filters 2. create api for searching products 3. display results

=> create Admin Menu
=>=> define protected route component
=>=> define admin route component
=>=> add menu for admin in header

=> Create Dashboard Screen
=>=> create dashboard
=>=> implement backend api
=>=> connect ui to backend

=>Manage Products
1.create products list ui
2.implement backend api
3.fetch data

Create Product 1. create products button 2. implement backend api 3. handle on click

=> Edit Product
=>=> create edit button
=>=> create edit product ui
=>=> display product info in the input boxes

Implement Update Product 1. create edit product backend api 2. handle update click

Upload Product Image 1. create cloudinary account 2. use the api key in env file 3. handle upload file 4. implement backend api to upload
