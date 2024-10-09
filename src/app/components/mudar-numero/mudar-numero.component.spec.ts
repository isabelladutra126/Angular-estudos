import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarNumeroComponent } from './mudar-numero.component';

describe('MudarNumeroComponent', () => {
  let component: MudarNumeroComponent;
  let fixture: ComponentFixture<MudarNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MudarNumeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MudarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
