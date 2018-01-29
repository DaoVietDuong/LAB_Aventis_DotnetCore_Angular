import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage} from './home.page.component';

describe('Home.PageComponent', () => {
  let component: Home.PageComponent;
  let fixture: ComponentFixture<Home.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
