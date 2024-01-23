class LoginPage
{

    get userName()
    {
        return $("#username")
    }

    get password()
    {
        return $("#password")
    }

    get signIn()
    {
        return $("#signInBtn")
    }

    // Login method to login to the eCommorce website
    async Login(userName,password)
    {
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.signIn.click()
    }
}

export default new LoginPage()
