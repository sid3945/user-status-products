# To start the project
    npm run start
# env file preparation
    `PORT= MONGO_URI= PRODUCT_PRICE_THRESHOLD`
# file structure:
the server.js file imports express app from a app.js and listens over the port from env
app defines a route js file to provide actions on '/'
routes file deputes controllers from product controller and user controller over routes /products and /users 
user and product models defined in models/