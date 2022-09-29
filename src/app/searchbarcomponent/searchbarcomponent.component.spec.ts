import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarcomponentComponent } from './searchbarcomponent.component';

describe('SearchbarcomponentComponent', () => {
  let component: SearchbarcomponentComponent;
  let fixture: ComponentFixture<SearchbarcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
