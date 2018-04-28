
const selectors= {
    joinButton: "button[placeholder='cta_link_startSignup']",
}


export async function clickOnJoinFreeForMonth(nemo){
    console.log("click on join for free month")
    await nemo.driver.sleep(1000)
    await nemo.view._waitVisible(selectors.joinButton, 5000)
    await nemo.view._find(selectors.joinButton).click()
    await nemo.driver.sleep(5000)
}


