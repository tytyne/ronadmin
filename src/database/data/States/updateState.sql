UPDATE dbo.States
SET [Statename]=@Statename,
    [Created]=@Created,
    
WHERE [StateID]=@StateID

SELECT  [Statename],
        [Lga],
        
FROM dbo.States
WHERE [StateID]=@StateID

 