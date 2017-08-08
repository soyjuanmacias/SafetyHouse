import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSecurityComponent } from './contact-security.component';

describe('ContactSecurityComponent', () => {
  let component: ContactSecurityComponent;
  let fixture: ComponentFixture<ContactSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
