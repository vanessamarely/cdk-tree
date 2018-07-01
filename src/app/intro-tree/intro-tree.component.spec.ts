import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTreeComponent } from './intro-tree.component';

describe('IntroTreeComponent', () => {
  let component: IntroTreeComponent;
  let fixture: ComponentFixture<IntroTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
