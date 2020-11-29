import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IHaveWorkedForComponent } from './i-have-worked-for.component';

describe('IHaveWorkedForComponent', () => {
  let component: IHaveWorkedForComponent;
  let fixture: ComponentFixture<IHaveWorkedForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IHaveWorkedForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IHaveWorkedForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
