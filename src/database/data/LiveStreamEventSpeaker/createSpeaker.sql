insert into dbo.LiveStreamEventSpeaker
    (
  
        [Email],
        [UserID],
        [LiveStreamEventID],
        [Name],
        [Phone],
        [About],
        [Moderator],
        [Title],
        [CreatedBy],
        [Created],
        [UpdatedBy],
        [Updated]

    )
VALUES 
    (
     
     
        @Email,
        @UserID,
        @LiveStreamEventID,
        @Name,
        @Phone,
        @About,
        @Moderator,
        @Title,
        @CreatedBy,
        @Created,
        @UpdatedBy,
        @Updated
       
    )

Select SCOPE_IDENTITY() AS Id;
