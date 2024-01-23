class Shop
{

    get checkoutBtn()
    {
        return $("*=Checkout")
    }

    // Login method to login to the eCommorce website
    
    async addProductsToCart(productsToBuy)
    {
        const cards = $$("//div[@class='card h-100']")
        for (let i = 0; i < await cards.length; i++)
        {
            const card = await cards[i].$("div h4 a")
            if (productsToBuy.includes(await card.getText()))
                await cards[i].$(".card-footer button").click() 
        }
    }
    
}

export default new Shop()
