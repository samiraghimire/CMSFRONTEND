 authentication and authorization
 server and app
 health api test 
 register service along with bcrypt



npm install prisma 
npm install @prisma/client
npx primsa init 

// for validation
npm install zod

// helspe to genrae the the token
npm i jsonwebtoken




1. session authentication
it is an authentication method where the server stores the user's login information(session) after a successful login and the client store only a session id (abbxxyz123)


how ti works
user login 
     |
     server verifes credentials (email, passowrd)

     server create session(abcrjks223)

     server stores in server

     session id sent to the browser
     browser stores session id  (cookies)

     advantages
     -easy to revoke sessions
     -- easy to logout
     -- very secure 
     -- cookies are http -only.

     disadvantes
     -needs redus/database for scalling

// assignment 
statless vs stateful

     2.  jwt authentication
     it is a stateless authentication mechanism where the server generate a signed token after login.The slient stores this token and sends it with every request.The server verifies the token instead of looking up a stores session.



     1.localstorage (not stores)
     2. cookies http only 
     3. memory
     

       form  action="/api/auth/fbsjabfwabjdc" method="post"


       accesstoken(short time)(memory stored) (hrs , 1days)( it helps to give the access )
        and refrestoken(cookies ) (15 days ) ( new accestoken generate garau ny xa vane use garinxa)
What is Middleware?

Middleware is a function that executes between the client's request and the server's response. It has access to:

req (Request)
res (Response)
next() (Passes control to the next middleware)

Middleware is commonly used for:

Authentication
Authorization
Logging
Validation
Error handling
Parsing request body
File uploads
Rate limiting
Flow
Client bank
   │
   ▼
Request
   │
   ▼
Middleware 1 // 
   │
   ▼
Middleware 2 //
   │
   ▼
Middleware 3
   │
   ▼
Route Handler (Controller)
   │
   ▼
Response
   │
   ▼
Client