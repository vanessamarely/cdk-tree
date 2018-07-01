import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroTreeComponent } from './intro-tree/intro-tree.component';
import { MainTreeMaterialComponent } from './main-tree-material/main-tree-material.component';
import { MainTreeCdkComponent } from './main-tree-cdk/main-tree-cdk.component';

const routes: Routes = [
  { path: '', component:  IntroTreeComponent},
  { path: 'material-tree', component:  MainTreeMaterialComponent},
  { path: 'material-tree-cdk', component:  MainTreeCdkComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
