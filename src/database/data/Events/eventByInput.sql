SELECT * FROM dbo.LiveStreamEvents
WHERE EventTitle=@Input  OR  EventDuration=@Input OR  EventDescription=@Input
