import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDemosComponent } from './proj-demos.component';

describe('ProjDemosComponent', () => {
  let component: ProjDemosComponent;
  let fixture: ComponentFixture<ProjDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjDemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
