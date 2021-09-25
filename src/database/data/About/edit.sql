UPDATE dbo.About
SET [Overview]=@Comment,
    [CoreValue]=@TargetType,
    [Objectives]=@TargetID,
    [UpdatedBy]=@MediaURL,
WHERE [id]=@id

SELECT  [Overview]
        ,[CoreValue]
        ,[Objectives]
        ,[Updated]
        ,[UpdatedBy]
FROM  dbo.About
WHERE [id]=@id

