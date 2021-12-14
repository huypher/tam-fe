import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TalentNewComponent } from './talent-new.component';

describe('TalentNewComponent', () => {
  let component: TalentNewComponent;
  let fixture: ComponentFixture<TalentNewComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
