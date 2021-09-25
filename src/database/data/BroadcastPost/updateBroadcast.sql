UPDATE dbo.BroadcastPosts
SET [Comment]=@Comment,
    [TargetType]=@TargetType,
    [TargetID]=@TargetID,
    [MediaType]=@MediaType,
    [MediaURL]=@MediaURL,
    [Status]=@Status
WHERE [Id]=@Id

SELECT  [Comment]
        ,[TargetType]
        ,[TargetID]
        ,[MediaType]
        ,[MediaURL]
        [Status]
FROM  dbo.BroadcastPosts
WHERE [Id]=@Id

