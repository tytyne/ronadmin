UPDATE dbo.NominationCategory
SET [Description]=@Description
   
    
WHERE [NominationCatID]=@Id

SELECT  [Description]
     
FROM dbo.NominationCategory 
WHERE [NominationCatID]=@Id