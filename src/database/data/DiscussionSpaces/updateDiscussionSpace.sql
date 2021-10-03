UPDATE dbo.discussionspaces
SET [Name]=@Name,
    [Purpose]=@Purpose,
    [Privacy]=@Privacy,
    [DateUpdated]=@DateUpdated,
    [ExpiryDate]=@ExpiryDate,
    [Status]=@Status,
    [Rules]=@Rules,
    [AcceptByInvite]=@AcceptByInvite,
    [AcceptByApproval]=@AcceptByApproval,
    [OwnerID]=@OwnerID,
    [OwnerType]=@OwnerType,
WHERE [Id]=@Id

SELECT  [Name],
        [Purpose],
        [Privacy],
        [DateUpdated],
        [ExpiryDate],
        [Status],
        [Rules],
        [AcceptByInvite],
        [AcceptByApproval],
        [OwnerID],
        [OwnerType],
FROM dbo.discussionspaces
WHERE [Id]=@Id

