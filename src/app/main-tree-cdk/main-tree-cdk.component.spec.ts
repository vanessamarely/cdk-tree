import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTreeCdkComponent } from './main-tree-cdk.component';

describe('MainTreeCdkComponent', () => {
  let component: MainTreeCdkComponent;
  let fixture: ComponentFixture<MainTreeCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTreeCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTreeCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
