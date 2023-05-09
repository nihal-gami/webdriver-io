import testData from '../../data/data.js';

describe('Ebay search functionality', () => {
  it('should access a product via search', async () => {
    await browser.url('https://www.ebay.com/');

    // Use the search query and category from the test data
    const searchQuery = testData.laptops[0].searchQuery;
    const category = testData.laptops[0].category;

    const searchInput = await browser.$('//input[@placeholder="Search for anything"]');
    await searchInput.setValue(searchQuery);

    const selectElement = await browser.$('//select[@aria-label="Select a category for search"]');
    await selectElement.selectByVisibleText(category);

    const searchButton = await browser.$('//input[@type="submit"]');
    await searchButton.click();

    await browser.waitUntil(async () => {
      const pageState = await browser.execute(() => document.readyState);
      return pageState === 'complete';
    }, { timeout: 5000 });

    // Verify that the first result name matches with the search string.
    const firstResultName = await browser.$('//*[@id="item4d8cbf0397"]/div/div[2]/a/div/span/span');
    await expect(firstResultName).toHaveTextContaining(searchQuery);
  });
});
