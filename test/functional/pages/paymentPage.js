
const selectors= {
    creditCardOption: "#creditOrDebitCardDisplayStringId",
    fName: "#id_firstName",
    lName: "#id_lastName",
    zipCode: "#id_creditZipcode",
    cardNumber: "#id_creditCardNumber",
    expiryDate: "#id_creditExpirationMonth",
    cvv: "#id_creditCardSecurityCode",
    startMembershipButtton: "#simplicityPayment-start"
}

export async function setUpPayment(nemo, paymentType){
    console.log("setup payment")
    await nemo.driver.sleep(1000)
    await nemo.view._waitVisible(selectors.creditCardOption, 5000)
    await nemo.view._find(selectors.creditCardOption).click()
    await nemo.driver.sleep(1000)
}


export async function enterCreditcardDetials(nemo){
    await nemo.view._waitVisible(selectors.fName, 5000)
    await nemo.view._find(selectors.fName).sendKeys('Maya')
    await nemo.view._find(selectors.lName).sendKeys('Seth')
    await nemo.view._find(selectors.zipCode).sendKeys('95121')
    await nemo.view._find(selectors.cardNumber).sendKeys('489078635678')
    await nemo.view._find(selectors.expiryDate).sendKeys('12/23')
    await nemo.view._find(selectors.cvv).sendKeys('287')
    await nemo.driver.sleep(2000)
}

export async function startMembership(nemo){
    console.log("start membership")
    await nemo.driver.sleep(1000)
    await nemo.view._waitVisible(selectors.startMembershipButtton, 5000)
    await nemo.view._find(selectors.startMembershipButtton).click()
    await nemo.driver.sleep(8000)
}