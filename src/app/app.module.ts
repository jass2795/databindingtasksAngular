import { ParentSiblingComponent } from './components/scenario6Service/parent.component';
import { SiblingComponent } from './components/scenario6Service/child1.component';
import { Parent6Component } from './components/scenario6/parent.component';
import { ChildTwoComponent } from './components/scenario6/child2.component';
import { ChildOneComponent } from './components/scenario6/child1.component';
import { Child5Component } from './components/scenario5/child.component';
import { Parent5Component } from './components/scenario5/parent.component';
import { Child4Component } from './components/scenario4/child.component';
import { Parent4Component } from './components/scenario4/parent.component';
import { ChildComponent } from './components/scenario3/child.component';
import { ParentComponent } from './components/scenario3/parent.component';
import { UserInputtypesComponent } from './components/scenario2/userinput.component';
import { UserInputComponent } from './components/scenario1/userinput.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrandparentComponent } from './components/scenario5/grandparent.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UserInputtypesComponent,
    ParentComponent,
    ChildComponent,
    Parent4Component,
    Child4Component,
    Parent5Component,
    GrandparentComponent,
    Child5Component,
    ChildOneComponent,
    ChildTwoComponent,
    Parent6Component,
    SiblingComponent,
    ParentSiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
