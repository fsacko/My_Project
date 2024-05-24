import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseQCMComponent } from './classe-qcm.component';

describe('ClasseQCMComponent', () => {
  let component: ClasseQCMComponent;
  let fixture: ComponentFixture<ClasseQCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseQCMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
