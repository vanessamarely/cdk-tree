import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTreeMaterialComponent } from './main-tree-material.component';

describe('MainTreeMaterialComponent', () => {
  let component: MainTreeMaterialComponent;
  let fixture: ComponentFixture<MainTreeMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTreeMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTreeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
