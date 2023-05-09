import testData from '../../data/data.js';

describe('Product search with filters on eBay', () => {
    const data = testData.smartphones[0];

    it(`should apply multiple filters to search for ${data.category}`, async () => {
      await browser.url('https://www.ebay.com/');

    // Navigate to Search by category > Electronics > Cell Phones & accessories
    const electronicsMenu = await browser.$("//li/a[contains(text(), 'Electronics')]");
    await electronicsMenu.waitForDisplayed({ timeout: 5000 });
    await electronicsMenu.moveTo();
    const cellPhonesCategory = await browser.$(`//li/a[contains(text(), '${data.category}')]`);
    await cellPhonesCategory.waitForDisplayed({ timeout: 5000 });
    await cellPhonesCategory.click();

    // After the page loads, click Cell Phones & Smartphones in the left-hand side navigation section
    const cellPhonesSubCategory = await browser.$(`//li/a[contains(text(), '${data.subCategory}')]`);
    await cellPhonesSubCategory.click();

    // Click on "See All" under Shop by brand or Shop by Network
    const seeAllLink = await browser.$('//span[contains(text(), "See All")]');
    await seeAllLink.waitForDisplayed({ timeout: 5000 });
    await seeAllLink.click();

    // Add 3 filters - screen size, Price and Item location appearing in the pop-up and click apply
    const screenSize = await browser.$('//div[@role="tab"]/span[text()="Screen Size"]');
    await screenSize.click();
    const screenSizeFilter = await browser.$(`//*[contains(text(), "Screen Size")]/following-sibling::div/div/span/label/span[contains(text(), "${data.screenSize}")]`);
    await screenSizeFilter.click();

    const price = await browser.$('//div[@role="tab"]/span[text()="Price"]');
    await price.click();
    const minPriceInput = await browser.$('//input[@aria-label="Minimum Value, US Dollar"]');
    await minPriceInput.setValue(data.minPrice);
    const maxPriceInput = await browser.$('//input[@aria-label="Maximum Value, US Dollar"]');
    await maxPriceInput.setValue(data.maxPrice);

    const itemLocation = await browser.$('//div[@role="tab"]/span[text()="Item Location"]');
    await itemLocation.click();
    const itemLocationRadioButton = await browser.$(`//span[contains(text(), "${data.itemLocation}")]/../../span`);
    await itemLocationRadioButton.waitForClickable({ timeout: 5000 });
    await itemLocationRadioButton.click();

    const applyFilterButton = await browser.$('//button[(text()= "Apply")]');
    await applyFilterButton.waitForClickable({ timeout: 5000 });
    await applyFilterButton.click();

    // Verify that the filter tags are applied
    const filtersApplied = await browser.$('//span[contains(text(), "filters applied")]');
    await filtersApplied.waitForClickable({ timeout: 5000 });
    await filtersApplied.click();

    const screenSizeFilterTag = await browser.$(`//span[contains(text(), "${data.screenSize}")]`);
    await expect(screenSizeFilterTag).toBeDisplayed()
    const priceFilterTag = await browser.$(`//span[contains(text(), "${data.minPrice}")]`);
    await expect(priceFilterTag).toBeDisplayed()
    const itemLocationFilterTag = await browser.$(`//span[contains(text(), "${data.itemLocation}")]`);
    await expect(itemLocationFilterTag).toBeDisplayed()


  });

});