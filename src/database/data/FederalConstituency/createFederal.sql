insert into dbo.Wards
    (
        [WardID],
        [WardName],
        [Lga],
        [DateCreated],
        [DateUpdated]

    )
VALUES 
    (
        @WardID,
        @WardName,
        @Lga,
        @DateCreated,
        @DateUpdated   
       
    )
