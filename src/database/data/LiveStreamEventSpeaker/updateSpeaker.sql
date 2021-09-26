UPDATE dbo.LiveStreamEventSpeaker
SET [Email]=@Email,
    [UserID]=@UserID,
    [LiveStreamEventID]=@LiveStreamEventID,
    [Name]=@Name,
    [Phone]=@Phone,
    [About]=@About,
    [Moderator]=@Moderator,
    [Title]=@Title
WHERE [Id]=@Id

SELECT  [Email]
        ,[UserID]
        ,[LiveStreamEventID]
        ,[Name]
        ,[Phone]
        ,[About]
        ,[Moderator]
        [Title]
FROM dbo.LiveStreamEventSpeaker
WHERE [Id]=@Id





