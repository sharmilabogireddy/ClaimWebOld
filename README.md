# 1. Introduction
This web application allows you to search for Claim details.

# 2. Development Requirements

Following tools are required to run the project in your local.
1. git or (you can download project from [github](https://github.com/sharmilabogireddy/ClaimWeb))
2. nodejs & npm
3. angularCLI

## 2.1 Installation

### 2.1.1 Cloning GitHub Project

Create a folder (Ex: `C:\projects`) and navigate to that folder in command prompt. Clone the project by giving the below command.

```
C:\projects>git clone https://github.com/sharmilabogireddy/ClaimWeb.git
```

This will create a folder as following - `C:\projects\ClaimWeb`

### 2.1.2 NodeJS and npm Installation

Downlaod and install the nodeJs from the following site https://nodejs.org

### 2.1.3 Install AngularCLI

To run the project you need to install the angularCLI as a global npm package. Run the following commands in command prompt.

`npm install -g @angular/cli`

## 2.2 Install Project Dependencies

To run the project you need to install all the dependencies in your project. Run the following command.
`C:\projects\ClaimWeb>npm install`

## 2.3 Run the Project locally

Run the following command `C:\projects\ClaimWeb>ng serve -o`

Now the application will open in the browser `http://localhost:4200/`


# 3. Build for Release

Before deploying into other http servers you need to build the project and create a package for deployment.

Build the project by giving the following command.

`C:\projects>ng build --prod --base-href /Claim/`

The above command will create the `dist` folder in your project.

# 4. Deploying in IIS server

See documentation [here](src/Deploy.md)


