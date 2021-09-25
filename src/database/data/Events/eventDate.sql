SELECT * FROM dbo.LiveStreamEvents
WHERE   EventStartTime LIKE @input OR EventEndTime LIKE @input OR CreatedAt LIKE @input OR UpdatedAt LIKE @input