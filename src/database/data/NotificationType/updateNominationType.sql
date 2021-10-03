UPDATE dbo.Wards
SET [WardName]=@WardName,
    [Lga]=@Lga,
    [DateUpdated]=@DateUpdated,
    
WHERE [WardID]=@WardID

SELECT  [WardName],
        [Lga],
        [DateUpdated],
FROM dbo.Wards 
WHERE [WardID]=@WardID