import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySampleComponent } from './entity-sample.component';

describe('EntitySampleComponent', () => {
  let component: EntitySampleComponent;
  let fixture: ComponentFixture<EntitySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([], { useHash: true })],
      declarations: [EntitySampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
