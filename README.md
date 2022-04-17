# ReactNative-LoansCalculator
College assignment, simple loans calculator for mobile platform. The app calculate from 2 form of customer input: total vehicle cost and total month of loan. Then calculate the result based on predetermined formula as follows:
* Down payment 30% from credit value in accordance with applicable regulations. 
* The car loan interest rate charged is 4.8% per year (flat) 
* The period taken is 5 years. 
* The insurance fee is 5%, 
* The provision fee is 0.5%
* The insurance policy fee is IDR 40 thousand 
* The administration fee is IDR 700 thousand.
* Loan ceiling = Vehicle Price – Down Payment<br>
* The number of installments per month = Monthly principal installment + monthly interest installment<br>
* Principal installment per month = Loan ceiling / Tenor (total loan months)<br>
* Interest installments per month = (Loan ceiling x Interest rate) / 12<br>
* First payment = Downpayment + First Installment + Insurance (Percent of car price) + Provision (Percent of loan ceiling) + Insurance Policy + Administration

# Preview
![Loans](https://user-images.githubusercontent.com/103828697/163724832-c3bb7a1b-244d-43ca-87c5-7bd2f10f9878.png)

# How to build/Download
* Normal user: [Release](https://github.com/ArigathanksGozaimuch/ReactNative-LoansCalculator/releases/tag/v.1)
* Developer:
  * Create a react-native project from react-native CLI then build the template.
  * Import App.js from this repo.
  * Open CMD/Terminal then navigate to the Java Development Kit **bin** directory in your system.
  * input the following command:<br> <br> 
  ```
  keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
  ```
  * The prompt window will ask for some general information, fill as necesarry.
  * Enter the key and password (Note these down, important).
  * A keystore file will be generated, store this inside your project's `.\android\app`
  * Navigate to `.\android` then add the following lines to **gradle.properties**, adjust the values to previously filled informations<br> <br> 
  ```
  MYAPP_RELEASE_STORE_FILE=my-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=******
  MYAPP_RELEASE_KEY_PASSWORD=*******
  ```
  * Navigate to `.\android\app` then add/edit existing lines to the following lines into **build.gradle**, adjust as needed. <br> <br>
  ```
  android {
  ...
  signingConfigs {
      release {
          if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
              storeFile file(MYAPP_RELEASE_STORE_FILE)
              storePassword MYAPP_RELEASE_STORE_PASSWORD
              keyAlias MYAPP_RELEASE_KEY_ALIAS
              keyPassword MYAPP_RELEASE_KEY_PASSWORD
          }
      }
  }
  buildTypes {
      release {
          ......
          signingConfig signingConfigs.release
      }
  }
  ...
  }
  ```
  * Open another CMD/Terminal windows on `.\android` directory then execute `gradlew assembleRelease` to build your APK.
  * If previous steps were done correctly, the prompt should show that the build was succesfull.
  ![2022-04-18_00-53](https://user-images.githubusercontent.com/103828697/163726509-3e7784a8-b8c8-4bb3-8eb7-d78a286489c6.png)
  * Your can find `app-release.apk` inside `.\android\app\build\outputs\apk\release` directory and install it onto your phone.
  ![2022-04-18_00-54](https://user-images.githubusercontent.com/103828697/163726534-44118337-d471-43f0-a8f1-0371e13139ec.png)
