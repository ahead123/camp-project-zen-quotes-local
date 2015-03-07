# ZenQuotes Local

## JavaScript Project: Quote Management App using Local Browser Storage

### Purpose:
Get familiar with quotes feature set, understand limitations of local storage.

### Instructions:
Fork this repository on GitHub, clone it and work on your local machine to get the specs to pass, and build a usable app.

When you run the specs, follow the failure messages to find out what needs to be coded. 

The spec should give you a clue about which file you will need to write code in. Once you find that file, there will generally be some instructions in the comments as to what needs to be coded up. Write an implementation to get the specs passing. Ask for help if you get stuck.

### Description:
In these exercises you'll write real code and run real specs.

You can run the specs in a browser with:

    npm test

The specs are already written and given as part of the exercise. You can find the specs in the /spec directory but they test code that is in the /src directory. 

Don't have to worry about reading the files in /spec folder or understanding how they work, but your free to check it out.

You'll be able to see the output of the specs in a browser - the failure messages should guide you towards what you need to code. The failure messages are not always obvious or human readable, so it might take a little getting used to. (Sometimes you have to try and think like a computer to understand them :)

You can expect that *the given specs are correct*; however *they will be in a failing state* since *the code they are testing still needs to be written*.

The exercise has many failing tests and these are sequenced in a way to help you learn concepts that build on each other. Work on the 1st failing spec, once you get that passing, move on to the next one that is failing...

So a good way to do the exercise is to:

* Take the first failing spec
* Read what the failure message is all about
* Find the source file you need to write code in (based on the failure message)
* Focus on writing the code that you need to get the spec passing
* run webpack to rebuild your new code (or use the --watch option)
* re-run the spec (by refreshing the browser) and see if the test now passes
* If the test is still failing, rework your implementation until it passes
* Once the test passes, move on to the next failing spec and get it to pass
* After you get a spec tp pass, commit your code and push it up to GitHub

### Folder Structure

* *src*: The JavaScript source code is in the /src folder - This is where you will write your code.
* *web*: The HTML files for the application are in the /web folder
* *style*: The CSS for the application are in /style
* *spec*: The specs are described in the /spec folder
* *dist*: The final packaged up bundle(s) are in /dist - HTML files can include these
* *node_modules*: The npm install command downloads JavaScript modules into this directory

### Setup
First Fork this repository on GitHub so you have your own copy. Also:

* [install node](http://nodejs.org/)
* [install webpack](http://webpack.github.io/docs/tutorials/getting-started/)

### Workflow:

* Install the app
* Launch the app to see what it looks like in its broken state
* Run the tests and see what the failures are
* Write code to implement the WarmUp functions 
* Rerun the tests to make sure they are passing
* Refresh the app to make sure it is no longer broken
* Commit your code and push it back up to your fork on GitHub

### Installation:

    cd warm-up
    npm install
    webpack

### Launch:
This will open up a simple application in the browser.

    npm start

Remember that the app won't work until you complete the exercise and implement the missing WarmUp methods.

### Test:
This will open up and run the Tests in your browser:

    npm test


### Code:

    webpack --watch

As you do the warm up exercises and implement the WarmUP, refresh the browser to see if the tests are passing.
