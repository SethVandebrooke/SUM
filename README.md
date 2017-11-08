# SUM - Serverless User Management
Serverless, Painless, Codeless user implimentation

 - SUM makes prototyping web/hybrid applications of any kind quick and painless without taking up hardly any space (it's 14 Kb unminified).
 - SUM works anywhere and everywhere: electron (windows, mac, linux), cordova (android, ios, etc...), and browsers alike.
 - SUM focuses on making signing in, logging in, logging out, viewing and updating user data easier than making the UI itself.
 - SUM requires no configuration. Just plug and play right out of the box! You don't even have to touch the javascript if you don't want to!
 - SUM is fully extendable! It's built with a simple API that gives you full control over its capabilities.

Why use SUM? 
 1. Because it SUMs up user management for your prototypes, so that it is ACTUALLY worth it to add behavior to a prototype you're probably going to through away.
 2. OR maybe you're making an offline application that just needs to handle user prefereces.
 3. Better yet, you already made your offline application and you simply want multi user functionality without making entire backend!

# Getting Started

Just download it or clone it with git:
```
git clone https://github.com/SethVandebrooke/SUM
```

SUM installs in 2 easy steps...

First include SUM at the bottom of the body:
```html
<script src="/path/SUM.min.js"></script>
```
Then you're done! 
Oh wait, that was one step.

# Using SUM in HTML

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

To display user information simply use the id or name that you used in the form as a tag e.g.
 ```html
 <username></username>
 <email></email>
 ```
 Note: if you try to display the users password it will appear as a hash, because that's what's being stored.

More documentation is on the way...
