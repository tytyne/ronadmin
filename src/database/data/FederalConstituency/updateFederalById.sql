UPDATE dbo.FederalConstituency
SET [FcName]=@FcName
WHERE [id]=@Id

SELECT  [FcName]
FROM dbo.FederalConstituency 
WHERE [id]=@Id