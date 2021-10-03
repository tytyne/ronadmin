UPDATE dbo.EventCategory
SET [Description]=@Description, 
WHERE [EventCatID]=@EventCatID

SELECT  [Description],
FROM dbo.EventCategory 
WHERE [EventCatID]=@EventCatID