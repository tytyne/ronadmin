UPDATE dbo.FederalConstituency
SET [FcName]=@FcName, 
WHERE [id]=@id

SELECT  [FcName],
FROM dbo.FederalConstituency 
WHERE [id]=@id