import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCoursComponent } from './classe-cours.component';

describe('ClasseCoursComponent', () => {
  let component: ClasseCoursComponent;
  let fixture: ComponentFixture<ClasseCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
