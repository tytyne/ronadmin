UPDATE dbo.SenatorialDistrict
SET [SDName]=@SDName,
    [Created]=@Created,
      
WHERE [id]=@id

SELECT  [SDName],
        [Created],
FROM dbo.SenatorialDistrict
WHERE [id]=@id