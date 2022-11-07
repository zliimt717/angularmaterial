import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes,RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';


const routes:Routes=[
  {path:'', component:ContactmanagerAppComponent,
   children:[
    {path:':id',component:MainContentComponent},
    {path:'',component:MainContentComponent}
   ]
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    UserService
  ]
})
export class ContactmanagerModule {
  
 }
