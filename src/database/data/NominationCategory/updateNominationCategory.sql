UPDATE dbo.NominationCategory
SET [Description]=@Description,

    [DateCreated]=@DateCreated,

    [DateUpdated]=@DateUpdated,
    
WHERE [NominationCatID]=@NominationCatID

SELECT  [Description],

        [DateCreated],

        [DateUpdated],
FROM dbo.NominationCategory 
WHERE [NominationCatID]=@NominationCatID