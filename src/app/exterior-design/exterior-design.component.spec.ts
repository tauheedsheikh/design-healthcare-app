import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorDesignComponent } from './exterior-design.component';

describe('ExteriorDesignComponent', () => {
  let component: ExteriorDesignComponent;
  let fixture: ComponentFixture<ExteriorDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExteriorDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExteriorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
