const{test,expect}=require("@playwright/test")

test.skip("Postive Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    const email=page.locator("//input[@name='email']")
    const password=page.locator("//input[@name='password']")
    const loginbtn=page.locator("//button[@name='Login']")
    const oldPassword=page.locator("//input[@name='oldPassword']")
    const newpassword=page.locator("//input[@name='password']")
    const confirmpassword=page.locator("//input[@name='confirmPassword']")
    const updatepassword=page.locator("//button[text()='Update']")
    await email.fill("tanveersalim24@gmail.com")
    await password.fill("Admin@11")
    await loginbtn.click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-user-large fa-1x navbar-toggler-icon mr-2']").click()
    await page.locator("//button[@class='rounded-0 btn btn-success']").click()
    await oldPassword.fill("Admin@11")
    await newpassword.fill("Admin@12")
    await confirmpassword.fill("Admin@12")
    await updatepassword.click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()

})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    const email=page.locator("//input[@name='email']")
    const password=page.locator("//input[@name='password']")
    const loginbtn=page.locator("//button[@name='Login']")
    const oldPassword=page.locator("//input[@name='oldPassword']")
    const newpassword=page.locator("//input[@name='password']")
    const confirmpassword=page.locator("//input[@name='confirmPassword']")
    const oldPassworderrormessage=page.locator("//div[text()='Password is invalid']")
    const newPassworderrormessage=page.locator("//div[text()='Password is required']")
    const updatepassword=page.locator("//button[text()='Update']")
    const cancelbtn=page.locator("//button[text()='Cancel']")
    await email.fill("tanveersalim24@gmail.com")
    await password.fill("Admin@12")
    await loginbtn.click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-user-large fa-1x navbar-toggler-icon mr-2']").click()
    await page.locator("//button[@class='rounded-0 btn btn-success']").click()
    await oldPassword.fill("")
    await newpassword.fill("")
    await confirmpassword.fill("")
    await updatepassword.click()
    await expect.soft(oldPassworderrormessage).toContainText("Password is invalid")
    await expect.soft(newPassworderrormessage).toContainText("Password is required")
    await cancelbtn.click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
})

test.skip("Negative2 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    const email=page.locator("//input[@name='email']")
    const password=page.locator("//input[@name='password']")
    const loginbtn=page.locator("//button[@name='Login']")
    const oldPassword=page.locator("//input[@name='oldPassword']")
    const newpassword=page.locator("//input[@name='password']")
    const confirmpassword=page.locator("//input[@name='confirmPassword']")
    const confirmpassworderrormessage=page.locator("//div[@class='style_inValidConfirmPassword__kjRbh']")
    const updatepassword=page.locator("//button[text()='Update']")
    const cancelbtn=page.locator("//button[text()='Cancel']")
    await email.fill("tanveersalim24@gmail.com")
    await password.fill("Admin@12")
    await loginbtn.click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-user-large fa-1x navbar-toggler-icon mr-2']").click()
    await page.locator("//button[@class='rounded-0 btn btn-success']").click()
    await oldPassword.fill("Admin@12")
    await newpassword.fill("Admin@11")
    await confirmpassword.fill("Admin@13")
    await updatepassword.click()
    await expect.soft(confirmpassworderrormessage).toContainText("Confirm Password Doesn't Match")
    await cancelbtn.click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
  
})

test.skip("Negative3 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    const email=page.locator("//input[@name='email']")
    const password=page.locator("//input[@name='password']")
    const loginbtn=page.locator("//button[@name='Login']")
    const oldPassword=page.locator("//input[@name='oldPassword']")
    const newpassword=page.locator("//input[@name='password']")
    const confirmpassword=page.locator("//input[@name='confirmPassword']")
    const confirmpassworderrormessage=page.locator("//div[@class='style_inValidConfirmPassword__kjRbh']")
    const updatepassword=page.locator("//button[text()='Update']")
    const cancelbtn=page.locator("//button[text()='Cancel']")
    await email.fill("tanveersalim24@gmail.com")
    await password.fill("Admin@12")
    await loginbtn.click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-user-large fa-1x navbar-toggler-icon mr-2']").click()
    await page.locator("//button[@class='rounded-0 btn btn-success']").click()
    await oldPassword.fill("Admin@12")
    await newpassword.fill("Admin")
    await confirmpassword.fill("Admin")
    await updatepassword.click()
    await expect.soft(newpassword).toHaveValue(/[A-Za-z0-9@]{8}/)
    await cancelbtn.click()
    await page.locator("//img[@class='style_imgFloatLeft__yPtNb d-none d-lg-inline']").click()
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
  
})

