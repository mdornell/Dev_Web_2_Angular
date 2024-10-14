import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorFormComponent } from './ator-form.component';

describe('AtorFormComponent', () => {
  let component: AtorFormComponent;
  let fixture: ComponentFixture<AtorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
