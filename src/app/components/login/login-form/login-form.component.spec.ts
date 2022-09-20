import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El botón enviar se deshabilita', () => {
    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón enviar se habilita', () => {
    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    let inputEmail = component.formularioLogin.controls['email']
    let inputPass = component.formularioLogin.controls['password']

    inputEmail.setValue('a@a.com')
    inputPass.setValue('meh')
    fixture.detectChanges();
    
    expect(btnElement.nativeElement.disabled).toBeFalse()
  });
});
