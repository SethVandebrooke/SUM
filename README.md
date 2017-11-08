# SUM
Serverless User Management

# Use in HTML only (optional)

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
