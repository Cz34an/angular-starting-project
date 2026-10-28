import { TestBed } from '@angular/core/testing';

import { App } from './app';
import { appConfig } from './app.config';

describe('App', () => {
  it('renders with the application providers', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: appConfig.providers,
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Hello world!');
  });
});
