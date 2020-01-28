
# Angular 8 - The complete guide
(Udemy course - 2020 edition)

# Section 2 - The basics


## Quick start

Before starting you need to have **nodejs** / **npm** correctly set up.

Then you can issue:

```
npm install -g @angular\cli
ng new my-dream-app
cd my-dream-app
ng serve
```


## Module and components

1 *module*, 1 main *component* ( the *app* component ), 0..n other *components*.

A *component* is made of different parts:

* a component always has a *template* ( ie: the HTML file )
* a component possibly has some *styling* ( ie: the CSS file )
* a component always got some code ( ie: the TypeScript file )

## Directives

### Structural directives

*Structural directives* shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

Let's look, for example, at the *ngIf* directive:

```
<div *ngIf="hero" class="name">{{hero.name}}</div>
```

Note that the markup above is just syntactic sugar for:

```
<ng-template [ngIf]="hero">
  <div class="name">{{hero.name}}</div>
</ng-template>
```
