This is an example project structure that uses both Express and Knex. It assumes the creation of a "server" JSON API using a Postgres database and creates a cart post to demonstrate how such simple data structures might be modeled using nothing more than Knex and TypeScript.

### Deployment

For this project you need to run postgresql server at your end and create two databases named 'testdb' and 'proddb'.

## Available Scripts

In the project directory, you can run:

### `npm install`

Above command will install the npm dependencies inside the project.

### `knex --knexfile knexfile.ts migrate:latest`

Above command will migrate the cart table structure to the database.

### `knex --knexfile knexfile.ts seed:run`

Above command will populate the table with the dummy data added.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### API calls

GET - http://localhost:1337/cart
POST - http://localhost:1337/addToCart with data 
Example data for post method -
		{
			"cartid" : "87a0ff1e-2f15-4861-a78e-f98d0e59f397",
            "product_name" : "Test1", 
            "qty" : 5, 
            "unit_price" : 100, 
            "user_email" : "synsoft1@mailinator.com" 
        }

