# sici-aura-intern-evaluation

## Careers Page

- This is a evaluation exam for the Sici-Aura SDE intern Position.
- The company gave a figma design that we need to code. You can view the design [here](https://www.figma.com/file/vFxECKCBD6zhivymcrGrXI/Career-Page_Assignment?type=design&node-id=0-3&t=uOGFUWNc2YUT85j6-0).

- We need to use the following frameworks :
Frontend Framework : ReactJS
Backend Framework : NodeJS, Express
Database : MongoDB

### Here's My Work:

#### Locally Setup the project

1. clone the repo in your PC.
`git clone https://github.com/pawannn/sici-aura-intern-evaluation.git`

2. Open up terminal in VS code.

3. Go to the server directory using the command `cd server`

4. Install the needed npm packages using `npm install`.

5. create a .env file and add the PORT and dbURI (mongodb link). 

6. populate the data by posting data at `http://127.0.0.1:3000/jobs/`.
The following data needs to be posted:
- role : (eg. software engineer)
- location : eg. (Delhi)
- minexp : (eg. 1)
- maxexp : (eg. 2)

5. Run the server using the command `npm start`.

6. Go to the client directory using the command `cd server`

7. Install the needed npm packages using `npm install`.

8. Run the server using the command `npm run dev`.

9. In any browser open `http://localhost:5173/` and you should be able to view the Career page.

### Thank you