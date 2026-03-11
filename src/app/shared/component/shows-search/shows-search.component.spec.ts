import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsSearchComponent } from './shows-search.component';

describe('ShowsSearchComponent', () => {
  let component: ShowsSearchComponent;
  let fixture: ComponentFixture<ShowsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
