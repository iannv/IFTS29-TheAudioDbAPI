import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Albumes } from './albumes';

describe('Albumes', () => {
  let component: Albumes;
  let fixture: ComponentFixture<Albumes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Albumes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Albumes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
