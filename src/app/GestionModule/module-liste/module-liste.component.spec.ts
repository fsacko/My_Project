import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListeComponent } from './module-liste.component';

describe('ModuleListeComponent', () => {
  let component: ModuleListeComponent;
  let fixture: ComponentFixture<ModuleListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
