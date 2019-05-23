#Documentation

1. Run this project by doing npm i && node index
2. server will start on any port, whereas i have configured it on 3000 in index.js file 
3. connected to Database, which is hosted in mLab (i have specified mLab link in the connection process)
4. created models in 'app->models' folder for users and orders
5. configured routes in 'config->routes->index' folder
6. configured safeguard/authentication-guard file for safe routing in'config->middlewares' folder
7. main logic impplemented in 'app->controllers' folder for auth && orders
8. In login i am using jsonwebtoken to create a jwt token which is used as safeguard during routing
8. getorders createorder updateorder removeorder are main functionlities
