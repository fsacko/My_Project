import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuHeaderComponent } from './contenu-header.component';

describe('ContenuHeaderComponent', () => {
  let component: ContenuHeaderComponent;
  let fixture: ComponentFixture<ContenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenuHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
