const { chromium, firefox, webkit } = require('Playwright');


(async () => {
  // Define the test code
  const runTest = async (browserType) => {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.lambdatest.com/');
    // Add test code here
    await browser.close();
  };


  // Run the test in multiple browsers
  await Promise.all([
    runTest(chromium),
    runTest(firefox),
    runTest(webkit),
  ]);
})();
