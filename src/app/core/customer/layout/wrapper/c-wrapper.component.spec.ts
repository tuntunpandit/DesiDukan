import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWrapperComponent } from './c-wrapper.component';

describe('CWrapperComponent', () => {
  let component: CWrapperComponent;
  let fixture: ComponentFixture<CWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
