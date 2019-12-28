import { TestBed, async } from '@angular/core/testing';
import { AppHotelsComponent } from './app.component';

describe('AppHotelsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHotelsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppHotelsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hillel-hw2'`, () => {
    const fixture = TestBed.createComponent(AppHotelsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hillel-hw2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppHotelsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hillel-hw2 app is running!');
  });
});
