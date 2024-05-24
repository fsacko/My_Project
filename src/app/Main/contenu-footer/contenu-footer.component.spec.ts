import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuFooterComponent } from './contenu-footer.component';

describe('ContenuFooterComponent', () => {
  let component: ContenuFooterComponent;
  let fixture: ComponentFixture<ContenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenuFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
