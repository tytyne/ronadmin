UPDATE dbo.Gateway
SET [Description]=@Description,
    [GKey1]=@GKey1,
    [GKey2]=@GKey2,

    [DateCreated]=@DateCreated,

    [DateUpdated]=@DateUpdated,
    
WHERE [Id]=@Id

SELECT  [Description],
        [GKey1],
        [GKey2],

        [DateCreated],

        [DateUpdated],
FROM dbo.Gateway 
WHERE [Id]=@Id


