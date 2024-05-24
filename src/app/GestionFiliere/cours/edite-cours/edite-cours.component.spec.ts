import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCoursComponent } from './edite-cours.component';

describe('EditeCoursComponent', () => {
  let component: EditeCoursComponent;
  let fixture: ComponentFixture<EditeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditeCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
