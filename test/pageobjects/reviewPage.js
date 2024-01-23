class Review
{

    get checkout()
    {
        return $(".btn-success")
    }

    get totalUnitPriceLocators()
    {
        return $$("//tr/td[4]/strong")
    }

    get totalValue()
    {
        return $("h3 strong")
    }

    // Login method to login to the eCommorce website
    
    async sumOfAllProducts()
    {
        const productPrices = this.totalUnitPriceLocators.map(async (products) => parseInt((await products.getText()).split(".").trim())).reduce((acc,price) => acc + price, 0)
        console.log(productPrices)
    }
    
    async TotalIntValue()
    {
        const TotalValue = await this.totalValue.getText()
        const TotalIntValue = parseInt(TotalValue.split(".")[1].trim())
        console.log(TotalIntValue)
    }
}

export default new Review()
