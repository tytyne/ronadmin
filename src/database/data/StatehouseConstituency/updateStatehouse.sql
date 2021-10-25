UPDATE dbo.StateHouseConstituency
SET [ShcName]=@ShcName,   
WHERE [id]=@Id

SELECT  [ShcName],
              
FROM dbo.StateHouseConstituency
WHERE [id]=@Id
