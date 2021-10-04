insert into dbo.Gateway
    (
        [Description],
        [GKey1],
        [GKey2],
        [DateCreated],
        [DateUpdated]

    )
VALUES 
    (
        @Description,
        @GKey1,
        @GKey2,
        @DateCreated
        @DateUpdated
       
    )
Select SCOPE_IDENTITY() AS Id;