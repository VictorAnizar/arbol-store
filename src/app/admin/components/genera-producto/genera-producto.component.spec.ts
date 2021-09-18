import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraProductoComponent } from './genera-producto.component';

describe('GeneraProductoComponent', () => {
  let component: GeneraProductoComponent;
  let fixture: ComponentFixture<GeneraProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
