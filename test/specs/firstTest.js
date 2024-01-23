describe('Ecommerce Application',async()=>
{
    xit('invalid login credentials',async()=>
    {
        // Here I'm going to a new URL
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        // The wegpage title is printed in the console

        await console.log(await browser.getTitle())
        
        // Assertion to verify if the page Title is same as expected
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

        // userName is added

        await $("#username").setValue("rahulshettyacademy")
        
        //Password is added here:

        await $("#password").setValue("wrongpwd")
        
        // Sign In button is clicked 

        await $("#signInBtn").click()
        
        // This is a dynamic wait added to the script the browser will wait until the condition is met. 
        // If the not then it will wait for the maximum of 5 seconds
        
        await browser.waitUntil(async()=> await $("#signInBtn").getAttribute("value") === "Sign In", {
            timeout: 5000,
            timeoutMsg: "Error message is not displayed"
        })

        // Here we need to get the error text and print it into the console

        let error = $(".alert-danger").getText()

        await console.log(await error)
        await expect(error === "Incorrect username/password.")

        await expect($("p[class='text-center text-white']").toHaveText("(username is rahulshettyacademy and Password is learning)"))
    })

    it('Successful login', async()=>
    {
        // Go to the url
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.waitUntil(async()=> await $("#signInBtn").getAttribute("value") === "Sign In"),{
            timeout: 5000,
            timeoutMsg: "Incorrect page url"
        
        }

        let title = browser.getTitle()
        expect(title === "LoginPage Practise | Rahul Shetty Academy")

        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()

        browser.waitUntil(async()=> (await $(".btn-primary")).isClickable,
        {
            timeout: 5000,
            timeoutMsg: "Incorrect page url, CheckOut button is not present"

        })

        
})})