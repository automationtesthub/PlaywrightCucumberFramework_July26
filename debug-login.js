const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:100', { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log('before user visible:', await page.locator("//input[@name='user_name']").isVisible({ timeout: 10000 }).catch(err => 'ERR: ' + err.message));

  await page.fill("//input[@name='user_name']", 'admin123');
  await page.fill("//input[@name='user_password']", 'admin123455');
  await page.click("//input[@name='Login']");
  await page.waitForTimeout(3000);

  console.log('after-login user visible:', await page.locator("//input[@name='user_name']").isVisible({ timeout: 10000 }).catch(err => 'ERR: ' + err.message));
  console.log('error visible:', await page.locator("//*[contains(text(),'You must specify a valid username and password.')]" ).isVisible({ timeout: 10000 }).catch(err => 'ERR: ' + err.message));

  await browser.close();
})();
