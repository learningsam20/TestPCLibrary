const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const urlList = [{url:"https://github.com",btnselector:"form.home-hero-signup > button"},
  {url:"https://www.amazon.in/",btnselector:"#nav-logo > a.nav-logo-tagline.nav-sprite.nav-prime-try"}]
  for (let i = 0; i < urlList.length; i++){
    await page.goto(urlList[i].url);
    await page.screenshot({ path: 'screenshots/pic' +i+ '1.png' });
    await page.click(urlList[i].btnselector);
    await page.waitForNavigation();
    await page.screenshot({ path: 'screenshots/pic'+i+'2.png' });
  };
  browser.close();
}

run();
