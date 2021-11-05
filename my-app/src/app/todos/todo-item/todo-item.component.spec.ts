import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 1, title: 'ABC', completed: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ABC in template', () => {
    expect(fixture.nativeElement.textContent).toContain('ABC');
  });

  it('should emit delete when user click on button', () => {
    const spy = jasmine.createSpy();
    component.delete.subscribe(spy);

    const btnEl = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    btnEl.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalled();
  });
});
