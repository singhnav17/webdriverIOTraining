import {expect as expectchai} from 'chai'
import LoginPage from "../pageobjects/loginPage.js"
import Shop from "../pageobjects/shopPage.js"
import Review from "../pageobjects/reviewPage.js"
import finalStep from "../pageobjects/checkoutPage.js"
import fs from "fs"
const creds = JSON.parse(fs.readFileSync("test/testData/loginCredentials.json"))
const purchaseproducts = JSON.parse(fs.readFileSync("test/testData/PurchaseProducts.json"))


describe ("First End To End Test Suite Smoke", async ()=>
{
    creds.forEach(({username,password}) => {
    purchaseproducts.forEach(({productsToPurchase}) => {
    it ("Placing The Order", async ()=>
        
    {
        // here I'm going to login into the rahulshetty Academy
        await browser.url("/loginpagePractise/")
        await LoginPage.signIn.waitForExist()
        expect(await browser.getTitle()).toEqual("LoginPage Practise | Rahul Shetty Academy") // Validation to check if we are on the correct url
        await LoginPage.Login(username,password) // User should be able to login successfully

        const productsToBuy = productsToPurchase
        await Shop.checkoutBtn.waitForExist()
        await Shop.addProductsToCart(productsToBuy)
        await Shop.checkoutBtn.click()

        await Review.checkout.waitForExist() //waiting till the checkout button is displayed
        expect(await browser.getTitle()).toEqual("ProtoCommerce")

        let sumOfAllProducts = await Review.sumOfAllProducts()
        let totalValue = await Review.TotalIntValue()
        
        //Validation that the sum of all products is equal to the Total amount

        expectchai(sumOfAllProducts).to.equal(totalValue)  
        await Review.checkout.click()

        const country = 'India'
        await finalStep.purchaseBtn.waitForExist()
        await finalStep.purchase(country)
        
    })})})

})