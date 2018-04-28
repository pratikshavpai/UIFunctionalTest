import {clickOnJoinFreeForMonth} from './pages/homePage'
import {continueToCreateAccount, registerEmail} from './pages/loginDetailPage'
import {enterCreditcardDetials,setUpPayment, startMembership} from './pages/paymentPage'
import {clickOnSeeThePlans, choosePlan, continueToChoosePlanType} from './pages/planSelectionPage'

describe('@signUp@', function () {

    it('signup flow', async function () {
        let nemo = this.nemo;

        console.log("sign up for a netflix account")

        let planType ="Standard", paymentType ="credit"
        const email = "pratpai10@gmail.com", pwd ="testing123"

        await nemo.driver.get(nemo.data.HOST_URL);
        await clickOnJoinFreeForMonth(nemo);
        await clickOnSeeThePlans(nemo);
        await choosePlan(nemo, planType);
        await continueToChoosePlanType(nemo);
        await continueToCreateAccount(nemo);
        await registerEmail(nemo, email, pwd);
        await setUpPayment(nemo, paymentType);
        await enterCreditcardDetials(nemo);
        await startMembership(nemo);
    });
});
