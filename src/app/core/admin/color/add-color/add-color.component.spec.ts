import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColorComponent } from './add-color.component';

describe('AddColorComponent', () => {
  let component: AddColorComponent;
  let fixture: ComponentFixture<AddColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
