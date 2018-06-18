import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSampleComponent } from './search-sample.component';
import { RouterModule } from '@angular/router';
import { Id0001UnitService } from '../id0001-unit.service';

describe('SearchSampleComponent', () => {
  let component: SearchSampleComponent;
  let fixture: ComponentFixture<SearchSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([], { useHash: true })],
      declarations: [SearchSampleComponent],
      providers: [Id0001UnitService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
