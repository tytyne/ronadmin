UPDATE dbo.LiveStreamEvents
SET [EventTitle]=@EventTitle,
    [EventStartTime]=@EventStartTime,
    [EventEndTime]=@EventEndTime,
    [EventDuration]=@EventDuration,
    [EventDescription]=@EventDescription,
    [EventStreamEnbedCode]=@EventStreamEnbedCode,
    [EventStreamEmbedType]=@EventStreamEmbedType,
    [HostDiscussionSpaceId]=@HostDiscussionSpaceId,
    [UpdatedAt]=@UpdatedAt,
    [UpdatedBy]=@UpdatedBy,
    [HostType]=@HostType,
    [EventStatus]=@EventStatus
WHERE [Id]=@Id

SELECT  [EventTitle],
        [EventStartTime],
        [EventEndTime],
        [EventDuration],
        [EventDescription],
        [EventStreamEnbedCode],
        [EventStreamEmbedType],
        [HostDiscussionSpaceId],
        [UpdatedAt],
        [UpdatedBy],
        [HostType],
        [EventStatus]
  FROM dbo.LiveStreamEvents
  WHERE [Id]=@Id