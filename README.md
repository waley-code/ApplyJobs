# APPLYJOBS

<!-- NEED FOR MORE  -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
Users can register either as an employer or an employee.  
Employers can post job items and an employee will indicate interest by raising an application item for the Job to the employer.  
This application will contain a connection to the employee with which the employer can contact the employee for further discuss.


## TABLE OF CONTENT
1. [Getting Started](#getting-started): Installation instructions.
1. [Tools and Frameworks used](#tools): Modules and frameworks used within this project.
1. [File Tree](#file-tree)
1. [Authors](#authors)


## Getting Started

```bash
$node -v
v18.18.0
$npm -v
9.8.1
 ```
Install depenences   
```bash
$npm install
```

Run the development server:
```bash
$npm run dev
```

## TOOLS
1. Runtime and webserver (``NEXT.JS``):	  
	Next.js is a popular open-source React framework that simplifies the creation of server-rendered React applications. It provides features like server-side rendering (SSR) and static site generation (SSG), making it suitable for building fast and SEO-friendly web applications.
1. Frontend Framework (``REACT.JS``):  
	React.js is a JavaScript library for building user interfaces. It's often used for creating dynamic and interactive web applications. With Next.js, you can build server-rendered React applications, combining the benefits of both frameworks.
1. Database (``MONGODB``):   
	MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It's known for its scalability and flexibility, making it suitable for a wide range of applications. MongoDB is often used in web development to store and manage data. 

1. State Management:

	@reduxjs/toolkit (^1.9.5): Simplifies Redux state management.

1. Type Definitions:
	1. types/node (20.4.10): TypeScript type definitions for Node.js.

	1. types/nodemailer (^6.4.9): TypeScript type definitions for Nodemailer.

	1. types/react (18.2.20): TypeScript type definitions for React.

	1. types/react-dom (18.2.7): TypeScript type definitions for ReactDOM.

1. User Interface (UI) and Components:
	1. antd (^5.8.3): A UI library for React, providing customizable components.

1. HTTP Requests and API Communication:
	1. axios (^1.4.0): A promise-based HTTP client for making HTTP requests.

	1. jsonwebtoken (^9.0.1): For creating and verifying JSON Web Tokens (JWTs).

	1. moment (^2.29.4): For working with dates and times.

1. Email Handling:
	1. nodemailer (^6.9.4): A library for sending email messages in Node.js.   
1. Authentication and Security:
	1. bcryptjs (^2.4.3): For hashing and verifying passwords securely.

	1. jsonwebtoken (^9.0.1): For creating and verifying JSON Web Tokens (JWTs).

1. TypeScript (Development Tool):
	1. typescript (5.1.6): A strict syntactical superset of JavaScript for static typing.

These tools, when used together, can help you create a modern and efficient web application. Next.js and React.js are a popular combination for building the frontend of web applications, while MongoDB provides a flexible and scalable backend storage solution.

## FILE TREE
### [Source Folder](./src): Entry/Containing folder for ApplyJobs Web app
-----
#### [APP](./src/app/):	Contains the endpoint urls for Nextjs. Contains API's and web views.

1. [API](./src/app/api/):   
	1. [Applications](./src/app/api/applications/):   
	For each Job posted by an empployer, this api returns all applications to that Job.  
	When paired with an applicationid, it returns the application details of a particular application, including the user that sent the application request and his/her application details.    
	Also used to post 
		```
		Methods: POST
		Usage:
		curl https://localhost:3000/api/applications/[applicationid] 
		```
	1. [Jobs](/src/app/api/jobs/):     
	Returns all job posting offered by a loged-in employer.   
	When paired with a [jobid], it return information on a particular job in greater detail.
		```
		Usage:
		curl https://localhost:3000/api/jobs/[jobid] 
		```
	1. [Users](./src/app/api/users/): 
	This is used to manipulate all the states of a user.    
	Some of its features require a [userid] parameter.
		Sub-endpoint | description  
		----- | -------     
		[User](/src/app/api/users/[userid]/) | Returns the details of a user
		[Current User](/src/app/api/users/currentuser/) | Returns the currentuser. Used for cookie validation.
		[Login](/src/app/api/users/login/) | User authentication mechanism
		[Logout](/src/app/api/users/logout/) | Process for logging out the current user.
		[Register](/src/app/api/users/register/) | user creation and persistence. 
	
1. [APPLICATIONS PAGE](/src/app/applications/): FrontEnd view of applications page.

1. [JobInfo PAGE](/src/app/jobinfo/): Client side rendering of Job details.

1. [JOBS PAGE](/src/app/jobs/): Client side rendering of available Jobs.

1. [LOGIN PAGE](/src/app/login/): Client side rendering of the login page.

1. [PROFILE PAGE](/src/app/profile/): Client side rendering of a users profile page.

1. [USERINFO PAGE](/src/app/userinfo/): Client side rendering of a users brief info.

-------

#### [COMPONENTS](/src/components/): Reuseable react.js components used for the frontend.
-----
#### [CONFIG](/src/config/): Database connection manager.
---

#### [HELPERS](/src/helpers/): Helper functions for sending response emails and cookie validation throughout the project.
----
#### [MODELS](/src/models/): Database query schemas for applications, jobs and users.
----
#### [REDUX](/src/redux/): State manager
---
#### [StyleSheet](/src/stylesheets/): App stylesheet details.
---

### AUTHORS
- Oyewale Adeosun [GitHub](https://github.com/waley-code/)
	1. FrontEnd - Reactjs and NextJs
	1. Backend - General Business logic
- Orjinta Chibueze Daniel [GitHub](https://github.com/chibuezeorjinta/)
	1. Database connection and schema

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
