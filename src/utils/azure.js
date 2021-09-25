
const azureStorage = require("azure-storage")
const getStream = require('into-stream');
const dotenv =require("dotenv")
dotenv.config()

const azureStorageConfig = {
    accountName:process.env.AZURE_STORAGE_ACCOUNT_NAME,
    accountKey:process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY,
    blobURL:process.env.AZURE_BLOB_URL,
    containerName:process.env.AZURE_CONTAINER
};

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalName}`;
};
 
const  uploadFileToBlob = async (file) => {
     
    return new Promise((resolve, reject) => {
        const blobName = getBlobName(file.originalname);
        console.log(file)
        console.log(blobName)
        const stream = getStream(file.buffer);
        const streamLength = file.buffer.length;
 
        const blobService = azureStorage.createBlobService(azureStorageConfig.accountName, azureStorageConfig.accountKey); 
        blobService.createBlockBlobFromStream(azureStorageConfig.containerName, `${blobName}`, stream, streamLength, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ filename: blobName, 
                    originalname: file.originalname, 
                    size: streamLength, 
                    path: `${azureStorageConfig.containerName}/${blobName}`,
                    url: `${azureStorageConfig.blobURL}${azureStorageConfig.containerName}/${blobName}`,
                    mimetype: file.mimetype, });
            }
        });
 
    });
};

module.exports = {uploadFileToBlob};

