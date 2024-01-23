import {expect as expectchai} from 'chai'
import LoginPage from "../pageobjects/loginPage.js"

describe ("First End To End Test Suite", async ()=>
{

    it ("Placing The Order", async ()=>
    {
        // here I'm going to login into the rahulshetty Academy

        await browser.url("/loginpagePractise/")
        await LoginPage.signIn.waitForExist()
        expect(await browser.getTitle()).toEqual("LoginPage Practise | Rahul Shetty Academy") // Validation to check if we are on the correct url
        await LoginPage.Login("rahulshettyacademy","learning") // User should be able to login successfully

        // Here I'm going to add the Products to the cart
        let productsToBuy = ['Blackberry', 'Samsung Note 8']
        await $("*=Checkout").waitForExist()
        const productCards = await $$("//div[@class='card h-100']")
        
        // Here I'm running the loop to go through each product card to find the match text in relation to the productsToBuy
        
        for (var i = 0; i < await productCards.length; i++)
        {
            const card = await productCards[i].$("div h4 a")
            if (productsToBuy.includes(await card.getText()))
                await productCards[i].$(".card-footer button").click() 
        }

        await $("*=Checkout").click()
        await $(".btn-success").waitForExist() //waiting till the checkout button is displayed
        expect(await browser.getTitle()).toEqual("ProtoCommerce")

        const totalUnitPriceLocators = await $$("//tr/td[4]/strong")

        const sumOfProducts = (await Promise.all(await totalUnitPriceLocators.map(async (prices) => parseInt((await prices.getText()).split(".")[1].trim())))).reduce((acc,total) =>  acc + total,0)
        
        console.log(sumOfProducts)

        const TotalValue = await $("h3 strong").getText()
        const TotalIntValue = parseInt(TotalValue.split(".")[1].trim())
        
        //Validation that the sum of all products is equal to the Total amount

        await expectchai(sumOfProducts).to.equal(TotalIntValue)  
        
        await $(".btn-success").click()
        await $("#country").setValue("Ind")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type='submit']").click()
        const successText = await $(".alert-success").getText()
        expectchai(successText).to.equal("×\nSuccess! Thank you! Your order will be delivered in next few weeks :-).")




    })
})