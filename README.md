# ReactNative-LoansCalculator
College assignment, simple loans calculator for mobile platform. The app calculate from 2 form of customer input: total vehicle cost and total month of loan. Then calculate the result based on predetermined formula as follows:<br><br>
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

# Download
[Release](https://github.com/ArigathanksGozaimuch/ReactNative-LoansCalculator/releases/tag/v.1)

# Preview
![Loans](https://user-images.githubusercontent.com/103828697/163724832-c3bb7a1b-244d-43ca-87c5-7bd2f10f9878.png)

# How to build for developer
* Create a react native project from react native CLI
* *
