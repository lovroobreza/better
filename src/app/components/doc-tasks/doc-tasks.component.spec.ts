import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTasksComponent } from './doc-tasks.component';

describe('DocTasksComponent', () => {
  let component: DocTasksComponent;
  let fixture: ComponentFixture<DocTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
