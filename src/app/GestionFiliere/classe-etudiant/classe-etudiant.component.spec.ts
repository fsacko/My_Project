import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEtudiantComponent } from './classe-etudiant.component';

describe('ClasseEtudiantComponent', () => {
  let component: ClasseEtudiantComponent;
  let fixture: ComponentFixture<ClasseEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
