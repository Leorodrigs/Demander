import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteiroParaRomanoComponent } from './inteiro-para-romano.component';

describe('InteiroParaRomanoComponent', () => {
  let component: InteiroParaRomanoComponent;
  let fixture: ComponentFixture<InteiroParaRomanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteiroParaRomanoComponent],
    });
    fixture = TestBed.createComponent(InteiroParaRomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
