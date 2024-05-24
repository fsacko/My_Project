import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourEtudiantComponent } from './cour-etudiant.component';

describe('CourEtudiantComponent', () => {
  let component: CourEtudiantComponent;
  let fixture: ComponentFixture<CourEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
