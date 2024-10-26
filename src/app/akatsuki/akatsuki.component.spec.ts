import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkatsukiComponent } from './akatsuki.component';

describe('AkatsukiComponent', () => {
  let component: AkatsukiComponent;
  let fixture: ComponentFixture<AkatsukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkatsukiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkatsukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
