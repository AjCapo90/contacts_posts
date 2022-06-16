# Qwentes Application

## Premise

Developing a portal that has the following pages:
- login
- contact list
- contact detail
- post list
- post detail

## Login
The portal provides a fake login, the required fields for authentication are:
- email - checking that it is a valid email
- password - minimum 4 characters

If the fields are not valid, the button must not be enabled and the input in error must have a red border.
If the fields are valid, set a `token` key in the localStorage with a value of your choice and redirect to the contact list page.
After logging in, a *logout* button will always be visible at the bottom right which will delete the `token` in the localStorage and bring the user back to login.

## Contact list
Users must be taken via an http call in GET: `https://jsonplaceholder.typicode.com/users`.
Each user must show:
- Full name
- Street
- City
- Initials of the name and surname *(Ex: if the name is Mario Rossi, the initials will be MR)*

## Contact detail
The user detail is obtained through an http call in GET: `https://jsonplaceholder.typicode.com/users/{userId}`.
The page must show a form that allows the modification of some user information:
- Name - minimum 6 characters
- email - checking that it is a valid email
- Company Name

The required fields must be validated and must behave like the login in case of an error. The same goes for the form button.
Once the form is valid, the button is enabled and upon click a PATCH call must start: `https://jsonplaceholder.typicode.com/users/{userId}` passing as payload.
```js
{
	name: "<form value>",
	email: "<form value>",
	company: {
		name: "<form value>"
	}
}
```
Obviously the PATCH call will not really change the data since the APIs are only placeholders, the important thing is to send the payload and have a 200 as a response.
Below the form you must see the posts created by the user we are viewing, they can be obtained by making an http call in GET: `https://jsonplaceholder.typicode.com/posts?userId={userId}`
Each post must show:
- Post title
- Post body

## Post list
This is a simple list of posts, the data to be displayed is obtained by making an http call in GET: `https://jsonplaceholder.typicode.com/posts`.
Each post must show:
- Post title
- Post body

## Post detail
The information to be shown in detail is:
- Post title
- Post body

Available via http call in GET: `https://jsonplaceholder.typicode.com/posts/{postId}`

The author of the post with the information shown in the contact list, available via http call in GET: `https://jsonplaceholder.typicode.com/users/{userId}`

A list of comments, where each comment must show
- Comment name
- Comment body

Available via http call in GET: `https://jsonplaceholder.typicode.com/comments?postId={postId}`

## Plus
- Make the modules lazy (lazy routes) so that you download the module only when you actually need it
- Add the login control within the Route Guards so as to correctly block the user in case he tries to access sections via URL even if he is not logged in
- Using reactive forms