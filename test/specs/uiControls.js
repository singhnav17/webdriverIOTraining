import { expect as expectchai } from 'chai'


describe('UI Controls Test Suite',async()=>
{

    it('Successful login', async()=>
    {
        // Go to the url
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.waitUntil(async()=> await $("#signInBtn").getAttribute("value") === "Sign In"),{
            timeout: 5000,
            timeoutMsg: "Incorrect page url"
        
        }

        const title = browser.getTitle()
        expect(title === "LoginPage Practise | Rahul Shetty Academy")

        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        
        await $$(".radiotextsty")[1].click()

        const modal = $(".modal-body")
        await modal.waitForDisplayed()

        await $("#cancelBtn").click()
        expect(await $$(".radiotextsty")[0].getAttribute('value') === 'admin')

        //Again click user radio button and this time click ok

        $$(".radiotextsty")[1].click()
        await $("#okayBtn").click()

        //assertion to make sure user is selected after click ok button
        expect($$(".radiotextsty")[1].isSelected)

        //Now I will go to the dropdown and select Teacher from it and then verify that teacher is selected

        await $("select.form-control").selectByVisibleText("Teacher")
        
        expectchai(await $("select.form-control").getValue()).to.equal("teach")



        
})})