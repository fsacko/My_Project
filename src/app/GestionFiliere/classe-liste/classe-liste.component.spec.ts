import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseListeComponent } from './classe-liste.component';

describe('ClasseListeComponent', () => {
  let component: ClasseListeComponent;
  let fixture: ComponentFixture<ClasseListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
