# SUM - Serverless User Management - Version: 1.7.13
Serverless, Painless, Seamless

SUM makes mocking user data management a seamless, painless process. It simulates backend functionality by analyzing your html pages as they load and then generating the required database. It uses the browser's local storage, so no server required.
In addition, SUM provides application specific html tags and attributes that make adding full functionality as easy HTML itself.

## Contents
- [Getting Started](#getting-started)
- [Using SUM in HTML](#using-sum-in-html)
  - [Example HTML](#example-html)
  - [SUM forms](#sum-forms)
  - [Displaying User Information](#display-user-information)
  - [Requiring Login](#require-login)
  - [Profile Pictures](#profile-pictures)
- [Helper Pages](#helper-pages)
- [SUM API](#sum-api)
  - [The SUM constructor](#using-the-constructor)
  - [Basic Functions](#basic-functions)
  - [Example Code](#example-code)
- [Advance Functions](#advance-functions)
  - [Advance Functions In Use](#advance-functions-in-use)
- [SUM Event Handler](#sum-event-handler)
- [Writing Extensions](#writing-extensions)


### What is it? ...and what does it do?

 - SUM focuses on making signing in, logging in, logging out, viewing and updating user data easier than making the UI itself.
 - SUM makes prototyping web/hybrid applications of any kind quick and painless without taking up hardly any space (it's a single file).
 - SUM works anywhere and everywhere: electron (windows, mac, linux), cordova (android, ios, etc...), and browsers alike.
 - SUM requires no configuration. Just plug and play right out of the box! You don't even have to touch the JavaScript if you don't want to!
 - SUM is fully extendable! It's built with a simple API that gives you full control over its capabilities.
 - SUM user data persists across multiple pages.
 - SUM redirects to the login page if the user isn't logged in, but only when you want it to.

Why should I use it?
 1. Because it SUMs up user management for your prototypes, so that it is ACTUALLY worth it to add behavior to a prototype you're probably going to through away.
 2. OR maybe you're making an offline application that just needs to handle user prefereces. Better yet, you already made your offline application and you simply want multi user functionality without making entire backend!
 3. It works along with whatever MVC or MVVM library you use!

# Getting Started

Just download it or clone it with git:
```
git clone https://github.com/SethVandebrooke/SUM
```

SUM installs and configures in a single simple step...

Include SUM at the bottom of the body:
```html
<script src="/path/SUM.min.js"></script>
``` 
Then you're done!

(Yes you have the ability to specifically configure if wanted: [SUM API](#sum-api))

# Using SUM in HTML

SUM was made to be used fully within HTML, so no functionality is lost by ignoring the JavaScript code.

### SUM Forms

Forms only requires 3 attributes and 1 input to become fully functional.

Type: must be login, signup, or update.
Uid: can be any string as long as it matches the id or name of an input within the form.
The uid is used to match against passwords for logging in.
On-success: a url or function to go to or run when the form submission is successfull. This is optional but highly recommended!
On-fail: a url or function to go to or run when the form submission is unsuccessfull. This one is completely optional!

Both signup and login require an input with the id or name of 'password'.
Other than that, have at it.
```html
<form type="formType" uid="email" on-success="home.html" on-fail="errors.html">
```
If the type is set to update than the fields will be prefilled with the current logged in user information (Note: it will not prefill the password field).

### Display User Information

To display user information simply use the id or name that you used in the form as a tag e.g.
 ```html
 <username></username>
 <email></email>
 ```
 Note: if you try to display the users password it will appear as a hash, because that's what's being stored.
 ### Require Login
 If you only want users to be able to view a page if they are logged in, then use the following attribute in the html tag:
 ```html
<html require-login="login.html">
 ```
 Simply use 'require-login' to specify where to go to login and if the viewer isn't logged in then it will automatically redirect to that page.
 
 You can also upload and display profile pictures:
 
 ### Profile Pictures
 ```html
 <img alt="Profile Picture" profile-pic> <!--profile-pic is all that is required-->
 <input upload="profile-pic" /> <!--upload='profile-pic' is all that is required-->
 ```
 That's it. That's all you need for the input element to fully function.
 The input becomes a file type input element and updates all affected profile pictures when a picture is uploaded.
 The image will automatically load the profile picture for the user that is logged in if profile-pic is undefined.
 If you set profile-pic to a uid than the image will render the profile picture for that user:
 
 ```html
 <img alt="Profile Picture" profile-pic="JohnDoe"> <!--profile-pic is all that is required-->
 ``` 
This is useful if you want to display the profile picture of a given user that is not logged in.
 
## Example HTML

The following form is completely functional because of the form attributes: type, uid, and on-success.
Granted, the form would technically even work without the on-success attribute... but you wouldn't know if it's working when you submit the form. 
(Remember: password is a required field)
```html
<form type="signup" uid="username" on-success="profile.html" on-fail="javascript:alert('Username already exists')">
  <input type="text" name="username" id="username">
  <input type="email" name="email" id="email">
  <input type="password" name="password" id="password">
  <input type="submit" name="register-submit" id="register-submit" value="Register Now">
</form>
```
Whatever id/names are used in the signup form will be used throughout your application.
For example, if you want to display any user data you will need to use exactly those ids or names as html tags:
```html
<username></username>
<email></email>
```
And in order for the user to log in, you must use the uid specified in the signup form and password:
```html
<form type="login" on-success="profile.html" on-fail="">
  <input type="text" name="username" id="username" placeholder="Username" value="">
  <input type="password" name="password" id="password" placeholder="Password">
  <input type="submit" name="register-submit" id="register-submit" value="Register Now">
</form>
```
Logging out is stupid easy... just add "logout" as an attribute to any element and when it is clicked it will logout and redirect to the given URL. If no URL is given, it will redirect to ./index.html.
```html
<button logout="logout.html">Logout</button>
 ```
 The update form type autofills whatever fields you give it with the current user information.
 ```html
<form type="update" on-success="profile.html">
  <input type="text" name="username" id="username" placeholder="Username" value="">
  <input type="password" name="password" id="password" placeholder="Password">
  <input type="submit" name="register-submit" id="register-submit" value="Register Now">
</form>
```

# SUM API

## Using the Constructor

Syntax: `SUM(CONFIG: object, RUN: boolean)`

The SUM constructor allows you to define the name of your app (used for displaying the name and for storing data under the given name), the uid name (So that you don't have to define the uid in your html), the login page (what page to go to when a user visits a protected page without being logged in), and the logged in page (what page to go to if SUM remembers the user from the last time they logged in).

```js
var myApp = new SUM({ // All config settings are optional
  name: "myCoolApp",
  uid: "email",
  loggedOut: "login.html",
  loggedIn: "home.html"
});
```

## Basic functions

SUM's basic functions are fairly simple.

Something you may notice is register, update and login all use the same parameters: userData, done and fail.
UserData is handled differently in each function but done and fail operate the same on every function.
Both done and fail can either be a URL or a function.
If the given function succeeds than it will run the done function or send the user to that URL.
Likewise if the given function fails with any kind of error, it will run the fail function or go to that URL.

Function                                    | Returns           | Description 
------------------------------------------- | ----------------- | ---------------------------------------------
app.register(userData, done, fail)          | undefined         | Registers a user. 
app.update(userData, done, fail)            | undefined         | Updates user properties
app.login(userData, done, fail)             | undefined         | Logs user in.
app.deleteUserAccount(userData, done, fail)                           | undefined            | Completely deletes user account
app.logout(done)                            | object            | Logs user out.
app.loggedIn()                              | boolean           | Returns true or false whether a user is logged in.
app.loggedInAs()                            | string            | Returns username of the user that is logged in.
app.currentUser()                           | object            | Returns the user object of the user that is logged in.
app.setSecurityQuestion(question, answer)                           | boolean            | Sets security question and answer for the logged in user and returns true if successfull.
app.forgotPassword(uid, securityAnswer, newPassword, done, fail)  | undefined             | Changes the password for the user with the given uid if the answer matches the user's security question

### Example code

#### Register
```js
app.register({
    username: "JohnDoe",
    password: "783jojo",
    email: "joe@doe.com"
}, function (data, message) { // Data is the user object that was passed to the register function
   alert("Welcome "+data.username+"!");
}, function (data, message) {
   alert("Oh no something went wrong: "+message);
});
```
#### Update
```js
app.update({
    email: "john@doe.com" // change email to 'john@doe.com'
}, function (data) { // Data is the user object that was passed to the update function
   alert("Your email was changed to "+data.email+"!");
});
```
#### Login
```js
app.login({
    username: "JohnDoe", // Replace username with whatever is set as the uid (required)
    password: "783jojo" // Password is always required
}, "profilePage.html", function (data) {
   alert("Oh no something went wrong!");
});
```

## Advance functions

Function                                    | Returns           | Description 
------------------------------------------- | ----------------- | ---------------------------------------------
app.users.add(OBJECT)                                 | undefined         | Stores an object in the datasection
app.users.edit(whereThis,equalsThis,setThis,toThis)   | undefined         | Changes a property's value of any object who's given 
property equals the given value.
app.users.remove(whereThis,equalsThis)                | undefined         | Removes any object who's given property equals the given value.
app.users.get(whereThis,equalsThis)                   | object            | Returns the object who's given property equals the given value.
app.users.listAll()                                   | array of objects  | Returns all stored objects in the dataSection
app.users.filter(function)                | array of objects  | Takes a function and runs it against each user. If the function returns true than it adds the user to the results.
app.reset()                                     | undefined | Clears all app data.
app.getForm(form)                                     | object | Takes a DOM form element and returns an object where the input element ID\Names are the keys and their values are the values
app.getProfilePictureData                             | image data URL | Fetches the image data URL for the given user

### Advance functions in use

Assume you have a form like this:
```html
<form id="register-form">
<input type="text" name="username" id="username" placeholder="Username" value="">
<input type="email" name="email" id="email"placeholder="Email Address" value="">
<input type="password" name="password" id="password" placeholder="Password">
<input type="password" name="confirm-password" id="confirm-password"placeholder="Confirm Password">
<input type="submit" name="register-submit" id="register-submit" value="Register Now">
</form>
```
Examples:
```js
var formObject = app.getForm(document.getElementById("register-form"));

//Depending on what the user enters into the form, the object will look something like:
//{
//    username: "JohnDoe",
//    password: "783jojo",
//    email: "joe@doe.com"
//};

// Add a user with the following object
app.users.add({
    username: "JohnDoe",
    password: "783jojo",
    email: "joe@doe.com"
});
// The above would be the same as app.users.add(formObject); 

// Where username='JohnDoe' change email to 'john@doe.com'
app.users.edit("username","JohnDoe","email","john@doe.com");

// Get the user where the username='JohnDoe'
app.users.get("username","JohnDoe");
//Returns: { username: "JohnDoe", password: "783jojo", email: "john@doe.com" }

// Get all users
app.users.listAll();
// Returns [{ username: "JohnDoe", password: "783jojo", email: "john@doe.com" }];

// Get all users where username=="JohnDoe"
app.filter(user => user.username == "JohnDoe");
// Returns [{ username: "JohnDoe", password: "783jojo", email: "john@doe.com" }];

// Assuming imageElement is a DOM element for an image. . .
// The following code would change the source of the image to the profile picture set for JohnDoe
imageElement.setAttribute("src",app.getProfilePictureData("JohnDoe"));

// Delete all objects where username='JohnDoe'
app.users.remove("username","JohnDoe")

```

## SUM Event Handler
The SUM Event Handler is a namespace based pubsub that works like so:
```js
app.event(...NAMESPACES, EVENT).ACTION(PARAMETERS);
```
Quick Example:
```js
var myevent  = app.event("myevent");
var myListener = myevent.listen(function(name,isBirthday){
  console.log("Hey "+name+(isBirthday?", Happy Birthday!":"!"));
});
myevent.broadcast("Josh",true); //logs: Hey Josh, Happy Birthday!
//Note: you can simply call your listener specifically if wanted:
myListener("Josh",false); //logs: Hey Josh!
myevent.stopListening(myListener);
```

Functions and Syntax:
```js
broadcast(any, any, any...);
listen(function);
stopListening(listener);
```

### Namespaces
The Event Handler accepts any number of namespaces (given as seperate parameters).
For Example:
```js
app.event("root","users","staff","admin")
```
Notice that the namespace names naturally get more specific as they move to the right. This is because namespaces are nested, meaning that every given namespace is a child of the one to the left. Broadcasting to a namespace will broadcast to all of its children as well.
```js
event("all","test1").listen(d => console.log(d) );
event("all","test2").listen(d => console.warn(d) );
event("all","test1").broadcast("testing 1, 2, 3"); // Triggers test1
event("all","test2").broadcast("testing 1, 2, 3"); // Triggers test2
event("all").broadcast("testing 1, 2, 3"); // Triggers test1 and test2
//The following will also work (because "test" is inside both event names):
event("all","test").broadcast("testing 1, 2, 3"); // Triggers test1 and test2

```

## Writing Extensions

Extending SUM is as easy as writing and using a function. You can extend your application's functionality by adding a function to the object and extend SUM's functionality by using the newComponent function:
```js
app.getFirstName = function() {
  return app.currentUser().firstName;
};
app.newComponent(
    "Hello User", //Name
    "hello-user", //CSS Selector
    function(element){ // How you want to process each element
        element.innerHTML = "Hello "+app.currentUser().username;
    },
    "Display a greeting to the user" // Description
);
```
Syntax: ```newComponent(name: string,selector: string,operation: function,description: string)```

## Helper Pages
SUM helper pages are single html files that show helpful information about your application you're building with SUM.

### Backend Helper Page
The Backend helper page provides a view of the user database. It also displays a list of the html files in your application that use SUM, their location, what kind of forms they use, and what relevant fields from those forms are being used when submitted.

### Madoc Helper Page
The Madoc helper page generates documentation for you about what kind of components SUM has generated for use, based off of the pages that SUM detects you using (when you open a page in the browser).
