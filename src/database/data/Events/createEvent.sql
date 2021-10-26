insert into dbo.LiveStreamEvents
    (
        [Id],
        [EventTitle],
        [EventStartTime],
        [EventEndTime],
        [EventDuration],
        [EventDescription],
        [EventStreamEnbedCode],
        [EventStreamEmbedType],
        [HostDiscussionSpaceId],
        [CreatedAt],
        [CreatedBy],
        [UpdatedAt],
        [UpdatedBy],
        [HostType],
        [EventStatus]

    )
VALUES 
    (
        @Id,
        @EventTitle,
        @EventStartTime,
        @EventEndTime,
        @EventDuration,
        @EventDescription,
        @EventStreamEnbedCode,
        @EventStreamEmbedType,
        @HostDiscussionSpaceId,
        @CreatedAt,
        @CreatedBy,
        @UpdatedAt,
        @UpdatedBy,
        @HostType,
        @EventStatus
       
       
    )




