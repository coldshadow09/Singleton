# Singleton

A robust and interactive web application for single cell analysis and visualization

This README contains description on Singleton prototype (version 2.0)

### Comparison to first prototype in workflow implementation ###
* User is able to register through login.html 
* User is able to run real t-SNE clustering and lasso through analysis.html
  (upload.py and analysis.py enable request lasso results for post-lasso analysis on 
   significant genes that defines subpopulations,
   at the moment, the id for each dot in the clustering 
   image after lasso is sent back and match to gene expression 
   in expression matrix file)
  
Singleton prototype (version 2.0)
|   README (Mitchell).txt - created for Mitchell to navigate through
│   setup.py
│   requirements.txt - contains project dependencies
│	development.ini - contains project configuration
│	CHANGES.md - indicates project versions 
└───singleton - contains Pyramid project skeleton for our web application
    │   init.py - contains singleton web application configuration 
    │   analysis.py - to process post-lasso results (e.g. sample gene significance calculation)
    │   upload.py - to upload data and parse it to t-SNE visualization
    │   users.py - contains views for user management including register/login/log out/forgot password
    │   tests.py
    │   views.py - contains views configuration for web pages
    │   security.py - contains authentication/authorization policy
    │   mailers.py
    │  
    │   processing - contains database
    │   ├───db_connect.py - connection to database server
    │   ├───db_create_scripts.py - create singleton database 
    │   ├───gen_uid.py - generate unique ids for users
    │   │   ...
    │   templates
    │   ├───mailers
    │   │   about.html
    │   │   analysis.html - contains major functionality t-SNE clustering and lasso
    │   │   contact.html
    │   │   dashboard.html
    │   │   features.html
    │   │   home.html
    │   │   login.html
    │   │   new.html
    │   │ 
    │   static
    │   ├───css
    │   ├───img
    │   ├───js                 
    │   ...






===================================================================================
Usage:
You can test the project on your local computer. Steps to run Singleton are below:

    1. set up a virtual environment
    2. change to the Pyramid base directory in command line interface 
       (Pyramid base directory is called back-end prototype)
    3. run pip install -r requirements.txt to download all the project dependencies.
    3. Run python setup.py develop to install the singleton package.
    4. Run pserve development.ini --reload to run the server,
       and check out in your browser at localhost:6543. 
    5. You should see a little placeholder page.

===================================================================================

Here included our Pyramid structure, database design and a example dataset

* database design - contains database design for user data
* datasets
* docs
* singleton - contains Pyramid set up based on pyramid_angularstarter scaffold 

	* pyramid project setup with jinja2, sqlalchemy, and a request local session attribute "db"
	* a javascript project under singleton/client-src setup with bower, gulp, coffeescript and sass
	* a skeleton angularjs project + foundation css

	additionally, pyramid_angularstarter provides a user model and views for the following.

	* login
	* logout
	* registration
	* forgot password

	(Usage: https://github.com/twillis/pyramid_angularstarter/wiki/Example-usage-of-pyramid_angularstarter)


### server ###
Consider university server currently does not support Python 3, we use NeCTAR server instead.

The link to the NeCTAR server (hosted by Team member's account is: http://144.6.239.203/)


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines


### Similar applications ###

Single cell expression analysis is a relatively new area of research with new tools coming out rapidly. 
Here is a list of other applications of note.

* GeneStack: https://genestack.com/
* Ginkgo: http://qb.cshl.edu/ginkgo/
* 
