import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonsComponent } from './content-buttons.component';

describe('ContentButtonsComponent', () => {
  let component: ContentButtonsComponent;
  let fixture: ComponentFixture<ContentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
