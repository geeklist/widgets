# Geeklist Public APIs Documentation

## Get User Cards

Fire this HTTP Request:

    http://geekli.st/<username>/cards.json?page=<x>&per_page=<y>

Parameters:

- username: The user you want to get the cards of.

- x: The number page

- y: The number of cards per page.

Example:

Let's get the cards of Christian Sanz [csanz](http://geekli.st/csanz):

    http://geekli.st/csanz/cards.json?page=0&per_page=5
