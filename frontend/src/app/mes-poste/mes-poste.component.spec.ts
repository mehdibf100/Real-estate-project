import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPosteComponent } from './mes-poste.component';

describe('MesPosteComponent', () => {
  let component: MesPosteComponent;
  let fixture: ComponentFixture<MesPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesPosteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
