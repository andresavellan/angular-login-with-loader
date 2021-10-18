This was made with Angular and uses an express server as backend 

Two reactive forms with verification, and one loader for Http calls and Component loading.

It starts with a Login form at start, requires min 8 char, 1 uppercase and a number. Login takes you to a form for user registration (verification). 
This user registration form sends the user input with a post request to the backend server. This API call, like any http call gets intercepted with the loader that hides when the response returns. The same user input data is returned, with a success message or an error message. In either case, this data is then sent to a Dialog Box (material design) that pops up with the user input data and a message. 

The loader(material design or a custom made svg) triggers with a boolean (loadingIndicator) from the loading service. Is injected in a "HttpInterceptor" who intercepts every http-call. Shows loader when a call is made and hides it when it gets the response.(try with slower network to see).
Same loader is used when components are loaded, this happens in the app.component.ts with the help of the importation of the Router, Event, NavigationStart and NavigationEnd. 


# get started

cd into server folder and start server with: "node app.js".

New terminal window cd into project and start with : npm start (ng serve).


# to improve

Better verification messages for user experience.

Make a custom "type" for the User in registration. 



# default info ↓

# Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
