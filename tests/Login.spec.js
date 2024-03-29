const{test,expect}=require('@playwright/test')

/*const logindata=[{
    email:"tanveersalim24@gmail.com",
    password:"Admin@12"
},
{
    email:"tanveersalim21@gmail.com",
    password:"Admin@11"
}]

logindata.forEach(data=>{
    test(`Postive Test Case ${data.email}`,async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/login")
        const email= page.locator("//input[@name='email']")
        const password=page.locator("//input[@name='password']")
        const emailerrormessage=page.locator("//div[@class='style_errorDiv__rVyU+']")
        const name=page.locator("//span[text()='tanveer']")
        console.log("Before entering email: ",await email.inputValue())
        console.log("Before entering password: ",await password.inputValue())
        await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
        await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
        await email.fill(data.email)
        await password.fill(data.password)
        console.log("After entering email: ",await email.inputValue())
        console.log("After entering password: ",await password.inputValue())
        await expect.soft(email).toHaveAttribute("value",await email.inputValue())
        await expect.soft(password).toHaveAttribute("value",await password.inputValue())
        const loginbtn=page.locator("//button[@name='Login']")
        loginbtn.click()
        //await page.locator("//span[text()='Fffff']").click()
        //await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
        
        
        })
        

})*/



test.skip('Positive Test Case', async({page, context}) => {

    const logindata = [
        {
            email:"tanveersalim24@gmail.com",
            password:"Admin@12"
        },
        {
            email:"tanveersalim21@gmail.com",
            password:"Admin@14"
        }
    ]

    for (let i=0; i < logindata.length; i++) {
        const emaildata = logindata[i].email
        const passworddata = logindata[i].password

        await page.goto("https://testing.ui.plentyz.pk/login")
        const email= page.locator("//input[@name='email']")
        const password=page.locator("//input[@name='password']")
        //const emailerrormessage=page.locator("//div[@class='style_errorDiv__rVyU+']")
        //const name=page.locator("//span[text()='tanveer']")
        console.log("Before entering email: ",await email.inputValue())
        console.log("Before entering password: ",await password.inputValue())
        await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
        await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
        await email.fill(emaildata)
        await password.fill(passworddata)
        console.log("After entering email: ",await email.inputValue())
        console.log("After entering password: ",await password.inputValue())
        await expect.soft(email).toHaveAttribute("value",await email.inputValue())
        await expect.soft(password).toHaveAttribute("value",await password.inputValue())
        const loginbtn=page.locator("//button[@name='Login']")
        loginbtn.click()
        
        
    }
})


test.skip("Negative1 Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/login")
const email= page.locator("//input[@name='email']")
const password=page.locator("//input[@name='password']")
const emailerrormessage=page.locator("//div[@class='col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10']//div[@class='invalid-feedback'][normalize-space()='Please provide valid email']")
const passworderrormessage=page.locator("//div[contains(text(),'Please enter a password')]")
console.log("Before entering email: ",await email.inputValue())
console.log("Before entering password: ",await password.inputValue())
await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
await email.fill("")
await password.fill("")
console.log("After no entering email: ",await email.inputValue())
console.log("After no entering password: ",await password.inputValue())
const loginbtn=page.locator("//button[@name='Login']")
loginbtn.click()
await expect.soft(emailerrormessage).toContainText("Please provide valid email")
await expect.soft(passworderrormessage).toContainText("Please enter a password")
})
    
test.skip("Negative2 Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/login")
const email= page.locator("//input[@name='email']")
const password=page.locator("//input[@name='password']")
const emailerrormessage=page.locator("//div[@class='col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10']//div[@class='invalid-feedback'][normalize-space()='Please provide valid email']")
const passworderrormessage=page.locator("//div[contains(text(),'Please enter a password')]")
console.log("Before entering email: ",await email.inputValue())
console.log("Before entering password: ",await password.inputValue())
await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
await email.fill("tanveersalim")
await password.fill("Admin@11")
console.log("After entering email: ",await email.inputValue())
console.log("After entering password: ",await password.inputValue())
const loginbtn=page.locator("//button[@name='Login']")
loginbtn.click()
await expect.soft(emailerrormessage).toContainText("Please provide valid email")
})

    
test.skip("Negative3 Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/login")
const email= page.locator("//input[@name='email']")
const password=page.locator("//input[@name='password']")
const emailerrormessage=page.locator("//div[@class='col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10']//div[@class='invalid-feedback'][normalize-space()='Please provide valid email']")
const passworderrormessage=page.locator("//div[text()='Wrong password. Try again or click Forgot password to reset it.']")
console.log("Before entering email: ",await email.inputValue())
console.log("Before entering password: ",await password.inputValue())
await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
await email.fill("tanveersalim24@gmail.com")
await password.fill("Admin")
console.log("After entering email: ",await email.inputValue())
console.log("After entering password: ",await password.inputValue())
const loginbtn=page.locator("//button[@name='Login']")
loginbtn.click()
await expect.soft(password).toHaveValue(/[A-Za-z0-9@]{8}/)
})

test.skip("Negative4 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    const email= page.locator("//input[@name='email']")
    const password=page.locator("//input[@name='password']")
    const emailerrormessage=page.locator("//div[@class='style_errorDiv__rVyU+']")
    const passworderrormessage=page.locator("//div[contains(text(),'Please enter a password')]")
    console.log("Before entering email: ",await email.inputValue())
    console.log("Before entering password: ",await password.inputValue())
    await expect.soft(email).toHaveAttribute("placeholder","Email or phone number *")
    await expect.soft(password).toHaveAttribute("placeholder","Enter Password *")
    await email.fill("tanveersalim23@gmail.com")
    await password.fill("Admin@11")
    console.log("After entering email: ",await email.inputValue())
    console.log("After entering password: ",await password.inputValue())
    const loginbtn=page.locator("//button[@name='Login']")
    loginbtn.click()
    await expect.soft(emailerrormessage).toContainText("Couldn't find your Account")
    
})