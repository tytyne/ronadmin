import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { AzureMediaServices } from '@azure/arm-mediaservices';
import { AzureMediaServicesOptions } from "@azure/arm-mediaservices/esm/models";

import  dotenv from "dotenv";
dotenv.config();


export const  main= async () => {
  
  const clientId = process.env.AZURE_CLIENT_ID 
  const secret = process.env.AZURE_CLIENT_SECRET 
  const tenantDomain = process.env.AAD_TENANT_DOMAIN 
  const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID
  const resourceGroup = process.env.AZURE_RESOURCE_GROUP
  const accountName = process.env.AZURE_MEDIA_ACCOUNT_NAME 

  let clientOptions: AzureMediaServicesOptions = {
    longRunningOperationRetryTimeout: 5, 
    noRetryPolicy: false 
  }

  const creds = await msRestNodeAuth.loginWithServicePrincipalSecret(clientId, secret, tenantDomain);
  const mediaClient = new AzureMediaServices(creds, subscriptionId, clientOptions);

  // List Assets in Account
  console.log("Listing Assets Names in account:")
  var assets = await mediaClient.assets.list(resourceGroup, accountName);

  assets.forEach(asset => {
    console.log(asset.name);
  });

  if (assets.odatanextLink) {
    console.log("There are more than 1000 assets in this account, use the assets.listNext() method to continue listing more assets if needed")
    console.log("For example:  assets = await mediaClient.assets.listNext(assets.odatanextLink)");
  }
}

main().catch((err) => {
  console.error("Error running sample:", err.message);
});