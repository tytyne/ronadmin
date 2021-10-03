UPDATE dbo.NominationCategory
SET [Description]=@Description,
    [DateUpdated]=@DateUpdated,
    
WHERE [NominationCatID]=@NominationCatID

SELECT  [Description],
        [DateUpdated],
FROM dbo.NominationCategory 
WHERE [NominationCatID]=@NominationCatID