UPDATE dbo.StateHouseConstituency
SET [ShcName]=@ShcName,   
WHERE [id]=@id

SELECT  [ShcName],
              
FROM dbo.StateHouseConstituency
WHERE [id]=@id
