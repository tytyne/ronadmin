UPDATE dbo.Gateways
SET [Description]=@Description
   
    
WHERE [GatewayID]=@Id

SELECT  [Description]
    
FROM dbo.Gateway 
WHERE [GatewayID]=@Id


