import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiInputEditorComponent } from './emoji-input-editor.component';

describe('EmojiInputEditorComponent', () => {
  let component: EmojiInputEditorComponent;
  let fixture: ComponentFixture<EmojiInputEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiInputEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiInputEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
