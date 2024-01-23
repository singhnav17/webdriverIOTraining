import { expect as expectchai } from 'chai'

describe('Functional Testing Test Suite',async()=>
{

    xit('Suggestive Dropdown', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.pause(6000)
        await $("#autocomplete").setValue("Ind")
        await browser.pause(3000)

        let suggestions = $$("[class='ui-menu-item'] div")

        for (let i=0; i < await suggestions.length; i++)
        {
            const suggestionText = await suggestions[i].getText()
            console.log(suggestionText)

                if (await suggestionText === 'India')
                {
                    await suggestions[i].click()
                    expectchai(suggestionText).to.equal("India")
                
                }
        }
        
        // const desiredLocator = suggestions.filter(async item => item.getText() === 'India')
        // desiredLocator[0].click()
        // await browser.pause(3000)
        
        // expectchai(desiredLocator).to.equal("India")


    })

    xit('Alert pop up', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        
        await $("#mousehover").moveTo()


    })


    xit('Sort Tables Validation', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("//tr/th[1]").click()

        const veggieLocators = $$("//tr/td[1]")
        const veggieNames = await veggieLocators.map(async veggies => veggies.getText())
        const sortedVeggies = veggieNames.sort()
        expectchai(sortedVeggies).to.equal(veggieNames)

    })

    it("JavaScript Stream functions", async()=>
    {
        // There is an array that I need to filter and create a new array with only even numbers and then multiply it by 4 and fu=inally sum them 
        
        let startingArray = [10, 11, 12, 15, 30, 65, 90, 112, 360]

        let evenNumberArray = startingArray.filter(number => number%2 === 0)
        console.log(evenNumberArray)
        let multipliedArray = evenNumberArray.map(number => number * 4)
        console.log(multipliedArray)
        console.log(multipliedArray.reduce((sum,number)=> sum + number, 0))



    })


})