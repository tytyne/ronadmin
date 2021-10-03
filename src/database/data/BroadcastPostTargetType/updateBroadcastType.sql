UPDATE dbo.BroadcastPostTargetType
SET [Description]=@Description, 
WHERE [Id]=@Id

SELECT  [Description],
FROM dbo.BroadcastPostTargetType 
WHERE [Id]=@Id