UPDATE dbo.ElectedPositions
SET [Description]=@Description
    [MinVoteRequired]=
    [MinNominationsRequired]
    [DateUpdated]
    [Criteria]
    
WHERE [positionID]=@positionID

SELECT  [Description]
        [MinVoteRequired]
        [MinNominationsRequired]
        [DateUpdated]
        [Criteria]
FROM dbo.ElectedPositions
WHERE [positionID]=@positionID
