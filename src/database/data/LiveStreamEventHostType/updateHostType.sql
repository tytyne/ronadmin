UPDATE dbo.LiveStreamEventHostType
SET [HostType]=@HostType,
    
WHERE [Id]=@Id

SELECT  [HostType],
FROM dbo.LiveStreamEventHostType
WHERE [Id]=@Id