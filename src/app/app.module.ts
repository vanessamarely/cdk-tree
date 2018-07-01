import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatBadgeModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MainTableComponent } from './main-table/main-table.component';
import { MainTreeMaterialComponent } from './main-tree-material/main-tree-material.component';
import { IntroTreeComponent } from './intro-tree/intro-tree.component';
import { MainTreeCdkComponent } from './main-tree-cdk/main-tree-cdk.component';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainTableComponent,
    MainTreeMaterialComponent,
    IntroTreeComponent,
    MainTreeCdkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    CdkTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
