import { Routes } from "@angular/router"



export const routes: Routes = [
    { path: 'list', component: EmployeeListComponent },
    { path: 'details/:id', component: EmployeeDetailsComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit', component: EditEmployeeComponent }
]