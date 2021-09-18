import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProductoComponent } from './edita-producto.component';

describe('EditaProductoComponent', () => {
  let component: EditaProductoComponent;
  let fixture: ComponentFixture<EditaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
