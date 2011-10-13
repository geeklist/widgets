# Geeklist Public APIs Documentation

## Get User Cards

Fire this HTTP Request:

    http://geekli.st/<username>/cards.json?per_page=<x>&page=<y>&is_author=<true>

Parameters (all optional):

- username: The user you want to get the cards of.

- per_page=x: How many cards per page do you want displayed (ex: per_page=3)

- page=y: The number of the page of cards (ex: if I've chosen 'per_page=3', page=2 will give me cards 4 to 6).

- is_author=true: If you want to displayed just the cards created by the user, you set this value on 'true'.

Example:

Let's get the cards of Christian Sanz [csanz](http://geekli.st/csanz):

I want 5 cards per page, want to see the cards from 6 to 10 (in that division), and just the cards authored by him:

    http://geekli.st/csanz/cards.json?per_page=5&page=2&is_author=true
    
Now, I want all the cards where [csanz](http://geekli.st/csanz) appears, both as author, as a contributor:

    http://geekli.st/csanz/cards.json
    
Or every card where csanz appeared, but from 10 to 10...

    http://geekli.sr/csanz/cards.json?per_page=10&page=1
    http://geekli.sr/csanz/cards.json?per_page=10&page=2
    ....
    http://geekli.sr/csanz/cards.json?per_page=10&page=10

Combine this JSON API with your favorite web app framework/api/solution/flavor to show your cards in your web sites!
