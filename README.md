
<br>
# playwright-cucumber-TS-sample

### **Overview**

- **Framework Description**:
  - Sample test automation framework developed using **Playwright** with **Cucumber** and **TypeScript (TS)**.

#### **Playwright**
- **Definition**: 
  - A robust framework designed for web testing and automation.
  
- **Key Features**:
  - Supports testing across multiple browsers including Chromium, Firefox, and WebKit.
  - Offers a single API for cross-browser web automation.
  - Optimized for speed, reliability, and capability in web automation.
  - Always up-to-date with modern web standards (ever-green).

#### **Cucumber**
- **Definition**: 
  - A tool for executing automated tests written in plain language.
  
- **Advantages**:
  - Tests are written in plain language, making them accessible to all team members, regardless of technical expertise.
  - Enhances communication, collaboration, and trust within the team.
  - Supports Behavior-Driven Development (BDD), improving clarity of requirements and functionality.

- **Gherkin**:
  - Utilizes a natural language parser known as Gherkin, which is central to the Cucumber BDD approach.

#### **Demo Test Cases**
- **Web UI Testing**:
  - Test cases created for the Polestar website: [Polestar](https://www.polestar.com/us).

- **API Testing**:
  - API test cases developed for the following endpoints:
    - SOAP API: [DNE Online Calculator API](http://www.dneonline.com/calculator.asmx)
    - REST Information API: [Library Information System REST Service](https://www.libraryinformationsystem.org/Services/RestService.svc).

This structure clearly outlines the framework features and technologies while emphasizing the benefits and application of Playwright and Cucumber in test automation.

## Features

- Here’s a rewritten version organized into bullet points and phases for clarity:

### Testing Framework Features

#### 1. **Development and Design**
- **BDD Support**: 
  - Framework supports Behavior Driven Development (BDD).
  - Tests are written in plain English text using Gherkin syntax.

#### 2. **Core Functionality**
- **Multi-Protocol Support**: 
  - Built-in library to operate on various interfaces:
    - UI testing
    - API testing (supports both SOAP and REST APIs)
    - Database testing (compatible with MSSQL, DB2, and Oracle)

#### 3. **Execution Capabilities**
- **Cross-Browser Testing**: 
  - Supports execution of tests in multiple browsers.
  
- **Parallel Execution**:
  - Allows running scenarios in parallel mode (default configuration runs 2 scenarios simultaneously).
  
- **Retries for Flaky Scenarios**:
  - Flaky scenarios can be retried multiple times until they pass or reach the maximum number of attempts.
  - This feature can be enabled via the retry configuration option.

- **Failure Management**:
  - Supports rerunning of failed scenarios for better coverage.

#### 4. **Test Management**
- **Scenario Management**: 
  - Scenarios can be easily skipped by adding the `@ignore` tag.
  
- **Dry Run Feature**: 
  - Supports a dry run of scenarios, which helps identify undefined and ambiguous steps.

#### 5. **Utility Functions**
- **File Handling**: 
  - Built-in utilities for file downloads and reading PDF files.

#### 6. **Reporting**
- **Report Generation**:
  - Generates Cucumber HTML Reports and standard HTML Reports.
  - Reports include snapshots and videos of failed scenarios for better debugging.

- **Logging**: 
  - Captures test execution logs in a log file for traceability.
  
#### 7. **Configuration Management**
- **Environment Configuration**:
  - All configurations are controlled via a `.env` file.
  - Environment variables can be modified at runtime.

#### 8. **Integration**
- **CI/CD Integration**: 
  - Offers easy and simple integration with CI/CD tools like GitHub Action/AWS/Jenkins for seamless deployment and testing processes. 

This structure clearly organizes the features and capabilities of the testing framework, making it easily understandable and digestible.

## Supported Browsers

1. Chrome - default browser
2. Firefox
3. MS Edge
4. WebKit - web browser engine used by Safari


#### Steps to use
##### 1. Installation

Playwright framework requires [Node.js](https://nodejs.org/) v14+ to run.

Code from github need to be [download](https://github.com/kundansingh3488/playwright-cucumber-sample-master/archive/refs/heads/main.zip) OR [cloned](https://github.com/kundansingh3488/playwright-cucumber-sample-master.git) using git command.

Installing the dependencies.
```sh
npm ci
```
##### 2. Test creation
- Test scenarios are organized into features and these feature files should be placed inside features folder.
- Step definitions connect Gherkin steps in feature files to programming code. A step definition carries out the action that should be performed by the scenario steps. These step definitions should placed inside steps folder in different packages.
- For web UI based tests maintain all the selectors inside pages folder.

##### 3. Execution
To run test scenarios use below command.
```sh
npm run test
```
To run specific scenario, use tags command. Below are few examples.
```sh
npm run test:tags "@sanity"
npm run test:tags "@calculator or @author"
npm run test:tags "@rest and @author"
```
To dry run test scenarios use below command.
```sh
npm run dry:test
```
To rerun the failed test scenarios use below command.
```sh
npm run failed:test
```
To change any environment configuration in .env file at run time use set command.
Eg: To change browser to Firefox use below command
```sh
set BROWSER=firefox
```
Similar command can be used to update other environment configuration

To generate HTML and Cucumber report use below command
```sh
npm run report
```
To generate auto code by codegen
```sh
npx playwright codegen
```
##### 4. Report & Logs
Cucumber HTML report will be present inside
```sh
test-results/reports/cucumber.html
```
HTML report will be present inside
```sh
test-results/reports/html/index.html
```
Execution log will be present in the log file.
```sh
test-results/logs/execution.log
```
#### Steps to use Load Testing
##### 1. Installation
Create and initialize a new script by running the following command:
```sh
 k6 new
```
##### 2. Test creation 
Run k6 with the following command:
```sh
 k6 run script.js
```
##### 3. To Add Virtuals Users 
Run a load test with more than one virtual user and a longer duration:
For eg: 10 virtual users for 30 seconds.
```sh
 k6 run --vus 10 --duration 30s script.js
```
