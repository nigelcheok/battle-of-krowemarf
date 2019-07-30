import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import puppeteer from 'puppeteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('main page', async () => {
  let browser = await puppeteer.launch({
    headless: false
  });
  let page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 800,
      height: 2400
    },
    userAgent: ''
  });

  await page.goto('http://localhost:3000/');

  test('page can load', async () => {
    await page.waitForSelector('#clan-header');

    const html = await page.$eval('#clan-header', e => e.innerHTML);
    expect(html).toBe('React War Room');
  }, 16000);

  test('can toggle team', async () => {
    page.click('#team-Vue');
    await page.waitFor(1000);

    const element = await page.$eval('#team-Vue');
    expect(element).toBe('<button type="button" class="btn btn-outline-primary font-weight-bold active" id="team-Vue"><div class="fab fa-vuejs fa-1x" style="display: inline-block; margin-right: 6px;"></div><div class="font-size-smaller display-inline-block">Vue</div></button>')

    // browser.close();
  }, 16000);
});
