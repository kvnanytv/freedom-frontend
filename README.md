Freedom! Front-end Boilerplate
====================
Clone the repository
---------------------
<!-- language:console -->

	git clone https://github.com/robertsambuena/freedom-frontend.git freedom


Running the Application
---------------------

<!-- language:console -->

	cd freedom

<!-- language:console -->

	npm install

Run the server(more like nodejs express server)
<!-- language:console -->

	node app



Contributing
---------------------

This projects uses the Feature Branch Workflow
[read more here](https://www.atlassian.com/git/workflows#!workflow-feature-branch)

1. Create a branch with the feature as its name (use snake case on feature name)

	`git checkout -b login`
2. Do your task, don't forget to commit
3. If first time to push, use `git push -u origin login` else `git push`.
4. Submit a pull request, merging your branch to master

In case your feature will need the updates on master, do the following:

<!-- language:console -->

	git checkout master
	git pull origin master
	git checkout your_branch
	git merge master
	// fix conflicts if there are then commit



Directory Structure
---------------------

<!-- language:console -->

	src/			        -- contains the angularjs codes
	views/   				-- contains jade views
	routes/  				-- contains express routes
	vendor/					-- contains 3rd party source codes(ie. angularjs)
	logs/					-- for production env only
	.gitignore				-- list of ignored files
    gruntfile.js            --
	nodemon.json			-- nodemon's config
	package.json
	README.md				-- me
	app.js				-- main script for starting the server


Coding conventions
---------------------

  * single quotes on strings
  * use `===` for checking similarities
  * snake case on function names and variables
  * forget that global variables exist and how to make them
  * use `var` once per function scope, declare all used variables at the same time
  * `var` should be the first instruction after declaring a `function`
  * use tab indention, don't alter indentions, please.
  * examine available libraries and helpers
  * space after comma, reserved words and operators. observe spaces on the following:

	<!-- language:console -->

		if () {...
		while () {...
		for () {...
		function () {...
		1 + 1
		[1, 2, 3]
		temp = 1
		{property : 'value'}
  * make use of

		req.access_token
		req.user
		req.user_id
		req.user_data
		req.is_admin
	on creating a controller function.

  * remove brackets on control flows with a one-liner instruction

		// if instruction not too long (about 30chars), make it one-liner
			if (temp === 1) return {hi : 'hello'};
		// else
			if (temp === 1)
				return {
					hi : 'hello',
					world : '!'
				};
		while (temp > 5) i += 1;
		for (;;) do();
  * use `next` to pass errors
  * top down function call order


Reminders
---------------------
  * Node.js uses non-blocking I/O, make sure to use `return` to end the function right away.
  * In Javascript, functions are first-class objects, thus don't be shy to have more than usual.
  * Use controlller's function as the main scope
