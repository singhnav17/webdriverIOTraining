import {expect as expectchai} from 'chai'

class finalStep
{
    get purchaseBtn()
    {
        return $(".btn-lg")
    }
        
    get inputBox()
    {
        return $("#country")
    }

    get ellipsis()
    {
        return $(".lds-ellipsis")
    }

    get selection()
    {
        return $("=India")
    }

    get successMessage()
    {
        return $(".alert-success")
    }
        
    
    async purchase(country)
    {
        await this.inputBox.setValue("Ind")
        await this.ellipsis.waitForExist({reverse:true})
            
            if (country === 'India')
                {
                 await this.selection.click()
                }

        await this.purchaseBtn.click()
        const successText = await this.successMessage.getText()
        expectchai(successText).to.equal("×\nSuccess! Thank you! Your order will be delivered in next few weeks :-).")
    }
}

export default new finalStep()