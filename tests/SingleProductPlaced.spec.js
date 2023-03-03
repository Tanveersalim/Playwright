const{test,expect}=require("@playwright/test")

test.skip("OrderPlaced",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    await page.locator("//input[@name='email']").type("tanveersalim24@gmail.com")
    await page.locator("//input[@name='password']").type("Admin@11")
    await page.locator("//button[@name='Login']").click()
    await page.goto("https://testing.ui.plentyz.pk/products/express-power-washing-powder-1kg/7537")
    await page.locator("//button[@class='style_addToCart__jfcXi btn btn-primary btn-block']").click()
    await page.locator("//span[text()='Cart']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-arrows-rotate fa-xl ']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-circle-plus fa-xl ']").click()
    await page.locator("//input[@name='firstName']").fill("rohan")
    await page.locator("//input[@name='lastName']").fill("rohan")
    await page.locator("//input[@name='houseNumber']").fill("PECHS")
    await page.locator("//input[@name='address2']").click()
    await page.locator("//div[text()='Sindh']").click()
    await page.locator("//div[text()='Karachi']").click()
    await page.locator("//div[text()='AB Sinia Colony']").click()
    await page.locator("//input[@name='zipCode']").fill("543453")
    await page.waitForTimeout(2000)
    await page.locator("//input[@type='tel']").fill("3361122876")
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-building fa-md ']").click()
    await page.locator("//button[@class=' style_yelloutlineCustomBtn__bH130 btn btn-primary']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='Cash on Delivery']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-circle-check fa-xl '] ").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[@class='style_newPlaceOrder__d4BDc btn btn-primary btn-block']").click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-cart-plus fa-1x navbar-toggler-icon mr-2']").click()
    await page.locator("//button[@class='style_redCustomBtn__KrLKU btn btn-primary btn-block']").click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()

})