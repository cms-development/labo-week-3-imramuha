import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRecipesComponent } from './archive-recipes.component';

describe('ArchiveRecipesComponent', () => {
  let component: ArchiveRecipesComponent;
  let fixture: ComponentFixture<ArchiveRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
