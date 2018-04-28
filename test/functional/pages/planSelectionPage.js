
const selectors= {
    seePlansButton: "button[placeholder='button_see_plans']",
    basicPlan: "div.headerRow.show > div:nth-child(2) > span > div > div.selborder > div",
    stdPlan: "div.headerRow.show > div:nth-child(3) > span > div > div.selborder > div",
    premiumPlan: "div.headerRow.show > div:nth-child(4) > span > div > div.selborder > div",
    continueButton: "button[placeholder='planSelection_button_continue']",
}


export async function clickOnSeeThePlans(nemo){
    console.log("click on see plans")
    await nemo.driver.sleep(1000)
    await nemo.view._waitVisible(selectors.seePlansButton, 5000)
    await nemo.view._find(selectors.seePlansButton).click()
    await nemo.driver.sleep(1000)
}

export async function choosePlan(nemo, planType){
    console.log("choose plan")
    if(planType === 'Basic'){
        await nemo.view._waitVisible(selectors.basicPlan, 5000)
        await nemo.view._find(selectors.basicPlan).click()
        await nemo.driver.sleep(2000)
    } else if(planType === 'Standard'){
        await nemo.view._waitVisible(selectors.stdPlan, 5000)
        await nemo.view._find(selectors.stdPlan).click()
        await nemo.driver.sleep(2000)
    }else if(planType === 'Premium'){
        await nemo.view._waitVisible(selectors.premiumPlan, 5000)
        await nemo.view._find(selectors.premiumPlan).click()
        await nemo.driver.sleep(2000)
    }
}

export async function continueToChoosePlanType(nemo){
    console.log("click continue")
    await nemo.view._waitVisible(selectors.continueButton, 5000)
    await nemo.view._find(selectors.continueButton).click()
    await nemo.driver.sleep(5000)
}
