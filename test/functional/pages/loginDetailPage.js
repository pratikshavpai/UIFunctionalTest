
const selectors= {
    continueRegistrationButton: "button[placeholder='registration_button_continue']",
    email: "#id_email",
    passowrd: "#id_password",
    continueButton: "button[placeholder='regForm_button_continue']",
}

export async function continueToCreateAccount(nemo){
    console.log("click create account")
    await nemo.driver.sleep(1000)
    await nemo.view._waitVisible(selectors.continueRegistrationButton, 5000)
    await nemo.view._find(selectors.continueRegistrationButton).click()
    await nemo.driver.sleep(2000)

}

export async function registerEmail(nemo, email, pwd){
    console.log("register")
    await nemo.view._waitVisible(selectors.email, 5000)
    await nemo.view._find(selectors.email).sendKeys(email)
    await nemo.view._find(selectors.passowrd).sendKeys(pwd)
    await nemo.view._find(selectors.continueButton).click()
    await nemo.driver.sleep(2000)
}
