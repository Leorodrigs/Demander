import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanoParaInteiroComponent } from './romano-para-inteiro.component';

describe('RomanoParaInteiroComponent', () => {
  let component: RomanoParaInteiroComponent;
  let fixture: ComponentFixture<RomanoParaInteiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanoParaInteiroComponent],
    });
    fixture = TestBed.createComponent(RomanoParaInteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
