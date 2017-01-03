### Simple Jasmine Temperature
This repo contains a simple example of how to create browser bases testing for JavaScript using the Jasmine Framework.  
  
The exercise is less about Jasmine syntax and more about file structure, naming conventions, and creating a workable/replicable demo to be used by peers and students should they desire to create tests, or implement BDD in their projects.  
  
##### Usage
Tests are run simply by opening the `index.html` located at the root of the file structure in a browser. Jasmine will display information based on the success of the tests.  
  
**NOTE**: In a real use case (or production application), `index.html` would likely be a poor name for this file...something along the lines of `ResourceToTestSpec.html` would probably be preferable.  
  
All test files are placed within a `spec` directory, this is convention and Jasmine will be looking for them there. Be sure to include all dependencies (both production code and spec files) in your markdown to ensure that they are loaded when the `.html` file is run.
