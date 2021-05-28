# Convo Dark

This is a fork of the [Convo Messenger codebase](https://github.com/p2ppsr/convo), but for people who would prefer a dark theme.

The purpose is to demonstrate that when two apps use the same blockchain protocols, people can use the apps of their choosing.

Alice likes the Convo UX more, so she uses Convo Messenger. Ty likes dark things, so he can use Convo Dark. Alice and Ty can still talk to one another, and they each get their ideal UX.

Convo Messenger makes money when Alice sends messages in their app, while Convo Dark makes money when Ty sends his messages in the Dark app. The one with the best UX and lowest commissions will make the most money.

The Convo Dark commission is only taken on 1.5% of transactions, while the Convo commission is taken from 2% of transactions.

You can use Convo Dark on the internet by going to [convo-dark.netlify.app](https://convo-dark.netlify.app).

**NOTE:** Please send any pull requests to the [base repository](https://github.com/p2ppsr/convo) and not this one.

[View Convo Dark on the web](https://convo-dark.netlify.app)

## Overview (from the Convo repo)

This is a React app demonstrating the use of [Babbage](https://projectbabbage.com) technologies with a simple private messaging experience.

- The app relies on the Babbage SDK to provide user accounts, key management and account recovery
- Bridgeport is used to provide a universal state machine backend powered by BSV transactions and real-time message and profile updates
- Hashbrown will soon provide a place to store picture messages and user profile photos

## A note on the (ab)use of redux

Some uses of Redux in this application are—shall we say—*unconventional*.

This is due primarily to a lack of sound Redux knowledge on the part of your author. However, I have done my best to ensure that these violations don't impact 
your ability to understand CWI and build your applications.

Try not to be too bothered by the occasional `store.dispatch` inside a React component. Pull requests that address these shortcomings are welcome :)

## License

The license for the code in this repository is the Open BSV License.
