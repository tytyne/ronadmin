insert into dbo.Lga
    (
        [LgaName],
        [State],
        [Created],
        [Id]

    )
VALUES 
    (
        @LgaName,
        @State,
        @Created,
        @Id   
       
    )
Select SCOPE_IDENTITY() AS LgaID;