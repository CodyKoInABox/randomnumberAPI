# randomnumberAPI
API to calculate random numbers in Express.js

## How to run the API on your computer using localhost

 - Clone the repository to your machine
 - Open the terminal
 - Run the command `npm install`
 - Run the command `node .`
 - Open a browser and go to the URL:  http://localhost:8080/number
 - Use the documentation below to set a range and a type:

 
## How to define a range and a type for the random number

 ### Range:
 
 - To define a range, use the params `min` and `max` on the GET request
 - Example: http://localhost:8080/number?min=10&max=20 will return a random number between 10 and 20
 - If the min and max are not defined, these values will be assumed: `min=0&max=1`
 - **Available params:**
 
 | min | max|
|-----------------|-----------------|
| sets minimum value | sets maximum value|
 
 
### Type:

 - To define a type, use the param `type` on the GET request
 - Example: http://localhost:8080/number?type=int will return an integer value
 - If the type is not defined, this type will be assumed: `type=float`
 - **Available types:**
 
| int             | integer         | float         |
|-----------------|-----------------|---------------|
| returns integer | returns integer | returns float |


