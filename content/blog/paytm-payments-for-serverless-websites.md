---
title: Paytm payments for serverless websites
description: Paytm payments integration for serverless JAMstack websites using
  Netlify lambda functions. This repo will save you from the nightmare of
  setting up a serverless payment integration from scratch.
date: 2020-08-17
author: 
   name: Sambit Sahoo
   github: soulsam480 
banner: /group-1.png
---
## Paytm-Netlify-Lambda 🚀

[Paytm](https://paytm.com) payments integration for serverless JAMstack websites using [Netlify lambda](https://www.netlify.com/products/functions/) functions. This repo will save you from the nightmare of setting up a serverless payment integration from scratch.

🚀 It's live [here](https://tiaamo.com) 

💥 GitHub repo is [here](https://github.com/soulsam480/paytm-netlify-lambda)

### 📑 Table of Contents

* 🔰 [Getting Started
* 📐 Setup
	* 🌱 Basic Setup
	* 🔥 Usage with Firebase
* 🗜 Integration
* 📓 Notes
	* 🤓 How it Works ?
	* 🌋 Errors
	* 📔 References

### Getting Started

To get started clone this repo.
```shell
git clone git@github.com:soulsam480/paytm-netlify-lambda.git

cd paytm-netlify-lambda

npm install
```
To serve the lambda functions locally we can run 
```shell
npm run start
```
But before that we have to setup the functions otherwise there will be errors!!

### Setup 

Open the repo in your favorite text-editor and the file structure will be like this

* config
* dist
* src
	* cred
	* paytm
		* checksum.js
		* crypt.js
		* paytm_config.js
		* paytmChecksum.js
	* payConf.js
	* payment.js

Webpack cofig sits inside the config folder. All our functions will be build into the dist folder. So it's good if we don't touch that folder.

#### Basic Setup

Open paytm_config.js inside the paytm folder.
```javascript
module.exports = {
  paytm_config: {
    PAYTM_ENVIRONMENT: "TEST", //possible values:  TEST | PROD
    MID: " Your MID", // Get it From https://dashboard.paytm.com/next/apikeys use Test id for test purpose and Production id for Production Purpose
    WEBSITE: "WEBSTAGING", // USE WEBSTAGING for testing, You Will get it for Production here https://dashboard.paytm.com/next/apikeys
    CHANNEL_ID: "WEB", // Use WEB for Desktop Website and WAP for Mobile Website
    INDUSTRY_TYPE_ID: "Retail", // Use Retail for Testing, For Production You Can Get it from here https://dashboard.paytm.com/next/apikeys
    MERCHANT_KEY: " Your MERCHANT_KEY", // Get it From https://dashboard.paytm.com/next/apikeys use Test key for test purpose and Production key for Production Purpose
    CALLBACK_URL:
      "https://your_unique_site_id.netlify.app/.netlify/functions/payConf", // Modify and Use this url for verifying payment
  },
};
```
Change the MID and Merchant Key to your paytm merchant account. The callback url will be updated after you have deployed these functions to netlify. So we will leave it as it is. Again if you wish to change the parameters for production build, the respective fields will be changed with the production credentials.

If you don't wish to use firebase for order validation and confirmation, you can stop here and remove firebase completely from the project. If you wish to use, let's move in to the next step.

#### Usage with Firebase
We will use [firebase-admin](https://npmjs.com/package/firebase-admin) sdk for nodejs to access admin privilages. With firebase admin running on server we can perform CRUD operations on realtime database easily.

To setup admin sdk you need a firebase service account. To get yourself one open you firebase admin dashboard and then project settings > service accounts. Create one for your project and download the credentials in json. Then open src/cred/authKey.js . Add the credentials in their respective places.
```javascript
module.exports = {
  authKey: {
    type: "service_account",
    project_id: "Your Project id",
    private_key_id: " Your PRIVATE_KEY_ID",
    private_key: "Your PRIVATE_KEY",
    client_email: "Your client email",
    client_id: "Your client id",
    auth_uri: "your auth uri",
    token_uri: "auth token uri",
    auth_provider_x509_cert_url: "cert url provider",
    client_x509_cert_url: " your CERT_URL",
  },
};
```

Then open src/payConf.js and add your database URL. With this the setup is complete.

After each successful payment firebase-admin will create an order inside 
```javascript
Orders/dd_mm_yy(current date)/orderId
```
this could be further used to verify an proceed with the payment. This is the only advantage of using firebase inside this project. If you don't wish to verify your orders, you can drop firebase completely and move on with the basic approach.

As the setup is complete you can deploy this project to netlify by pushing the code into an it repo. The instruction on how to deploy from a git repo is [here](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings)

There are two methods to integrate these functions to your project.

### Integration
 

This method makes a POST request to the api and creates and submits the form clent-side in browser. 
Let's move further for a good explanation.

To make API calls you have to pass these parameters inside the body of your post request. Here is an example using axios. 
```javascript
axios({
        method: "post",
        url:
          "https://your_unique_netliy_appname.netlify.app/.netlify/functions/payment",
        data: {
          amount: payment amount, //must be an integer Mandatory
          name: "customer_name", // _ is allowed.no space allowed inbetween. ex. Sambit_sahoo
          email: "customer_email", //valid customer email
          orderid: "Order_id", //mandatory.no space allowed inbetween ex. OD123231 or OD_12324
          mobile: "customer_mobileno",
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          console.log(res);
          const params = res.data.params;
          params["CHECKSUMHASH"] = res.data.checksum;
          
          //Here the helper function post.js creates the from api response and submits.
          
          post({
            action: res.data.action,
            target: "_self",
            params: params,
          });
        })
        .catch((err) => {
          window.alert(err);
        });

```
Here is the helper function which creates and submits the form client side inside browser.

```javascript
//This plugin is used to perform form action request from jsvascript.
//This is derived from https://github.com/jisaacks/react-post/blob/master/src/post.js
function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === "[object Date]";
}

function isObj(val) {
  return typeof val === "object";
}

export function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, target, params }) {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", action);
  form.setAttribute("target", target);

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

export default function post(details) {
  const form = buildForm(details);
  console.log(form);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}
```
Again after a successful payment you will be redirected to the page sent from the payment confirmation function i.e. payConf.js. 

To change your response URLs 
go to line 89 for payment success URL, line 93 and 96 for Failure URL.

### Notes
This project is an wrapper and improvement over the project created by [Satyam](https://github.com/imlolman). You can find the github repo  [here](https://github.com/imlolman/Paytm-Payment-Gateway-Integration-using-Google-Cloud-Function). He implemented this approach using firebase cloud functions.

#### How it Works
[Netlify functions](https://docs.netlify.com/functions/overview/) are AWS lambda functions which return a callback for an API request. I originally intended to implement this approach without [experess.js](https://expressjs.com/). But I ran into many errors and couldn't figure a way out. So i went with the Express way 😂. 

When you hit the payment endpoint with the data inside a POST request, it generates a checksum for the provided orderid using paytm's generate checksum logic. After successful generation it responds with the credentials for the payment page. The response from the promise by axios is used to create the HTML form by the elper function post.js and submitted immediately.

After Successful payment, your callback function which is src/payConf.js verifies the status of the transaction from paytm transaction status api through an unique signature. after successful verification, the callback function creates an order on your firebase database and responds with your payment succes page url.

#### Errors
I have handled most of the errors 😌. Still there is always a bug 🐛. If you ran into any issues try using console.log() to find and fix the error by using google. If you don't find any way reach me [here](mailto:soulsam480@hotmail.com). I'll be happy to help 👏🏼👏🏼 !!
#### References
Links to some of the resources that helped me create this project.
* [Satyam's Repo](https://github.com/imlolman/Paytm-Payment-Gateway-Integration-using-Google-Cloud-Function) 👏🏼
* [His post on his approach](https://medium.com/imlolman/integrate-paytm-payment-gateway-for-static-hosted-website-using-google-cloud-function-4c78385cda9f) 👌🏼
* [Netlify Lambda Repo](https://github.com/netlify/netlify-lambda) For improvements and bugs. 🐛
* [Serverless HTTP](https://github.com/dougmoscrop/serverless-http) For more bugs 🐛🐛
* [Netlify Functions](https://docs.netlify.com/functions/overview/) For reference 🎇
* [Paytm Documentation](https://developer.paytm.com/docs/v1/payment-gateway/) For more reference 🎇🎇

I'm not good at writing documentations. So if i missed something and you ran into an unknown issue please reach me on

[mail](mailto:soulsam480@hotmail.com) 📧 / [twitter](https://twitter.com/sambitsahoojs) 🕊 / [instagram](https://instagram.com/sambitsahoo.js) 🖼

Thank You! ✌🏼
