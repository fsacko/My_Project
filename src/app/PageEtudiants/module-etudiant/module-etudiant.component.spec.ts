import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleEtudiantComponent } from './module-etudiant.component';

describe('ModuleEtudiantComponent', () => {
  let component: ModuleEtudiantComponent;
  let fixture: ComponentFixture<ModuleEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
