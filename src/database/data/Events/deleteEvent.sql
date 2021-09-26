Delete from dbo.LiveStreamEventspeaker
WHERE  LiveStreamEventID =@Id

Delete from dbo.LiveStreamEventsRSVP
WHERE  (EventID = @Id)

Delete from dbo.LiveStreamEventReactions
WHERE  (LiveStreamEventID = @Id)

Delete from dbo.LiveStreamEventQuestion
WHERE  (LiveStreamID = @Id)

Delete from dbo.LiveStreamEventChats
WHERE  (LiveStreamEventID = @Id)

Delete from dbo.LiveStreamEventAttendanceLog
where AttendanceUID IN (
Select UID from dbo.LiveStreamEventAttendance 
where eventId = @Id)

Delete from dbo.LiveStreamEventAttendance 
where eventId = @Id

delete from dbo.LiveStreamEvents
Where Id = @Id