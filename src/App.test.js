import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import puppeteer from 'puppeteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('on normal device', async () => {
  test('page can load', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 40,
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 800,
        height: 600,
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000');

    await page.waitForSelector('#clan-header');

    let html;

    html = await page.$eval('#clan-header', e => e.innerHTML);
    expect(html).toBe('React War Room');

    await page.waitForSelector('#clan-header');

    page.click('#team-Vue');
    await page.waitFor(1000);

    html = await page.$eval('#clan-header', e => e.innerHTML);
    expect(html).toBe('Vue War Room');

  }, 16000);
});
