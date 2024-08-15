import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent

  beforeEach(async () => TestBed.configureTestingModule({
    declarations: [AppComponent, NavComponent, FooterComponent ],
    imports: [ RouterOutlet ]
  }).compileComponents());

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`debe tener como título 'CRUD-TO-TEST'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CRUD-TO-TEST');
  });
});
