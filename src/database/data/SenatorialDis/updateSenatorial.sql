UPDATE dbo.SenatorialDistrict
SET [SDName]=@SDName
 
      
WHERE [id]=@Id

SELECT  [SDName]
       
FROM dbo.SenatorialDistrict
WHERE [id]=@Id