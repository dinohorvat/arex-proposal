## Installation

### Dependencies

``` bash
# go into app's directory
$ cd arex-proposal

# install app's dependencies
$ npm install
```

## Usage

``` bash
# serve with hot reload at localhost:4200.
$ ng serve

# build for production
$ ng build --prod
```

## What's included

* Displaying the JSON Deals [x]
* Pagination [x]
* Sorting [x]
* Search Filter (All Fields) [x]
* Search Filter in Modal (Name & Type only) [x]
* Modal with favorites [x]
* Adding favorites [x]
* Removing favorites [x]

## Missing features
Reason for missing features was lack of time. I was sent the project on Thursday, 21.11.2019, and I was not able to start working on it before 9PM. So everything I've built was done in 4 hours.
* Unit Testing


## Application Structure

```
arex-proposal/
├── e2e/
├── src/
│   ├── app/
|   │   ├── containers/
|   │   ├── enums/
|   │   ├── models/
|   │   ├── pages/
|   │   |    ├── deals-manager/
|   │   |    |  ├── favorites-modal/
|   │   |    |  ├── statistics/
|   │   |    |  ├── table/
|   │   ├── services/
│   ├── assets/
│   ├── environments/
│   ├── scss/
│   ├── index.html
│   └── ...
├── .angular-cli.json
├── ...
├── package.json
└── ...
```

