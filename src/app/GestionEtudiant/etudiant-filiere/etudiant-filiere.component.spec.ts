import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFiliereComponent } from './etudiant-filiere.component';

describe('EtudiantFiliereComponent', () => {
  let component: EtudiantFiliereComponent;
  let fixture: ComponentFixture<EtudiantFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantFiliereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
