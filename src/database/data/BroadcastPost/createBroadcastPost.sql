insert into dbo.BroadcastPosts  
    
    (
        [Comment],
        [TargetType],
        [TargetID],
        [CreatedBy],
        [CreatedAt],
        [UpdatedBy],
        [UpdatedAt],
        [MediaType],
        [MediaURL],
        [Status]
    )
VALUES
    (
        @Comment,
        @TargetType,
        @TargetID,
        @CreatedBy,
        @CreatedAt,
        @UpdatedBy,
        @UpdatedAt,
        @MediaType,
        @MediaURL,
        @Status
 
    )

Select SCOPE_IDENTITY() AS Id;    
 