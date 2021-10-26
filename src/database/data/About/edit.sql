UPDATE dbo.About
SET [Overview]=@Overview,
    [CoreValue]=@CoreValue,
    [Objectives]=@Objectives
WHERE [id]=@id

SELECT  [Overview]
        ,[CoreValue]
        ,[Objectives] 
FROM  dbo.About
WHERE [id]=@id

