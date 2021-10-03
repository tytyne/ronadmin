UPDATE dbo.Lga
SET [LgaName]=@WardName,
    [State]=@Lga,
    [Created]=@DateUpdated,
    
WHERE [LgaID]=@LgaID

SELECT  [LgaName],
        [State],
        [Created],
FROM dbo.Lga
WHERE [LgaID]=@LgaID

 