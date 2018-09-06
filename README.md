# AngularService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

============================================================================================================
Service is a class in Angular which act as central Repositry. Where we can centralize you data

Dependency -> A class(Component) will depend on services (HttpService to get value from backend, logging service , etc)
Dependency Injection -> Service class instance is injected/instanitated in our Componet(class)
How to provide a service ?
Provide service means we tell angular we want to use service in our class
We can provide a service at -> Component level 
                            -> Module level
->Class level : 

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [MyLoggingService]
})

->Module level :

