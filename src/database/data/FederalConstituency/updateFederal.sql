UPDATE dbo.FederalConstituency
SET [FcName]=@FcName, 
WHERE [id]=@EventCatID

SELECT  [Description],
FROM dbo.FederalConstituency 
WHERE [id]=@EventCatID