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
->Component level : 

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [MyLoggingService]
})

->Module level :

@NgModule({
    --------
    --------
  providers: [MyLoggingService]
    --------
})

NOTE : *)If we provide Service instance at Component level (in providers array) then no need to 
provide the service instance inside the module level (in providers array).

*)If We provide Service at module level (inside providers array) then no need to provide the service instance
inside Any Component level of that module (in providers array).

*)In CASE OF PARENT-CHILD :- If provide the serivce instance in parent component (in provider array) then no need to serivce provide the instance in child component (in provider array), This is bcoz the servie instance provided in parent component will be inherited to all its child component.
Even though, If we try to provide the instance in the child component (in providers array) this will create a new instance of service at child compo which will override the instance inherited from parent component

-----------------------------------------------------------------------------------------------------------

Angular Dependency Injector is -> Hirearchical Injector
If we provide a service at parent component then angular will provide this service instances to that
parent component and to all its child components.
Note : All the child comp's will recieve the same instance of the parent component.

->If we provide the service at AppModule [inside the provider array in AppModule]-> then same instance of the
service will be avaiable Application-wide (i.e- this instance will be avaliable with all compo's, all directives, all other services{we can inject service into service} )

->If we provide the service at AppComponent -> Then same instance of the service will be avaiable for this 
parent component(AppComponent) & all its child components.
Note : If we provide the instance at child component then same instance will NOT be avaible to parent comp
(Service instance only goes down in the Tree NOT in the upward)

->If we provide the service to a component (which is at bottom of tree) -> then only instance will be avaiable
only for this component (no instance will be avaiable for any other component bcoz- there r no childs for this compo)


------------------------------------------------------------------------------------------------------------

