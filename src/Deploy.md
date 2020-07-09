# How to Deploy in IIS server

## Build

Build the project by giving the following command.

`C:\projects>ng build --prod --base-href /Claim/`

The above command will create the `dist` folder in your project.

## Deploying in IIS server

1. Create a folder on the server where you have IIS installed and copy all the contents of the "dist"     folder.
(Ex: C:\ProjetBuild\Claim)
2. Open the IIS server.
3. Goto `Sites>Default Website`
4. Right click on 'Default Website' and select 'Add Application'. This will open a 'Add Application' window.
5. Give the Alias name (Ex:Claim) and select the 'physical path' (Ex: C:\ProjectBuild\Claim). It will create the 'Default Web site'.
6. Right click on the web site and select the 'Manage Applications>Browse', then the application will open in the browser `http://localhost/Claim/`

