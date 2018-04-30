### Getting Started

#### Basic Information

```
This project consists of UI automation test for Netflix Sign-up flow (public urls)
Steps automated for Sign-up flow:
 1. Go to https://www.netflix.com/
 2. Choose join for free option
 3. Choose Plan option (Chosen standard plan-type as an example)
 4. Enter login credentials
 5. Choose payment type (Chosen credit card as example)
 6. Enter Credit card details and start membership
 NOTE: Since its fake card detail, on clicking start membership it would highlight to add correct details and end gracefully
```

#### Tech Stack

```
 1. Nemo.js to create tests and automation in Javascript
    About: Nemo provides a simple way to add selenium automation to your NodeJS web projects.
 2. Node.js
    This project is working on Node version v8.11.1 and npm version 5.6.0
 3. Sauce labs
    About: Sauce Labs allows users to run tests in the cloud on more than 700 different browser platform, operating system and device combinations,
    providing a comprehensive test infrastructure for automated and manual testing
```


#### Run Sign-up test on Local chrome browser

```
> Download node at: https://nodejs.org/en/download/
> git clone https://github.com/pratikshavpai/FunctionalUITesting.git
> cd FunctionalUITesting
> npm install
```

#### To run test on local chrome browser we need Chromedriver
Download latest at :``` https://sites.google.com/a/chromium.org/chromedriver/downloads```

```
> cd Downloads/
  unzip it and copy to /usr/local/bin
> cp chromedriver /usr/local/bin
```

#### Command to run test:
```
> npm run nemo -- -P chrome -G @signUp@
```

#### Sample Sign-up test running on local chromebrowser
![Sign-upnf](https://user-images.githubusercontent.com/3537441/39390855-cf74b960-4a4f-11e8-8731-f0bff920309e.gif)


### Run test on Sauce

Info: This project is hooked up with sauce labs, so that tests can run on different browsers, os and device combinations.
Below account is a temporary trial sauce account which provides only 2 concurrent sessions. For a paid account, more concurrent tests can be run.

##### Commands to runs test on chrome and firefox in parallel
```
NODE_ENV=saucelabs npm run nemo -- -P chrome, firefox -G @signUp@
```
or on phone and tablet
```
NODE_ENV=saucelabs npm run nemo -- -P phone, tab -G @signUp@
```

##### View running tests on sauce
```
https://saucelabs.com/beta/dashboard/tests
```

##### Sauce account info
```
userid: pratpai10
password: test123
```

#### Few example sauce video links to watch Sign-up test running on different browsers and device:

1. Running on Chrome: ```https://saucelabs.com/beta/tests/e1a61c9b2613426fafbfc5bbc1cd766c/watch#70```
2. Running on Firefox:``` https://saucelabs.com/beta/tests/566f986f1e9f47589c8f4332206e3d9f/watch#70```
3. Running on Tab: ```https://saucelabs.com/beta/tests/3159539f6b6a4aa6836fe0e1baef3ff8/watch#71```
Note: On tab setup takes little longer, so please forward video for a minute to watch running test.


