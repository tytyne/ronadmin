insert into dbo.Lga
    (
        [GatewayID],
        [GKey1],
        [GKey2],
        [DateCreated],
        [DateUpdated]

    )
VALUES 
    (
        @GatewayID,
        @LgaName,
        @State,
        @Created,
        @Id   
       
    )
 [GatewayID]
      ,[Description]
      ,[GKey1]
      ,[GKey2]
      ,[DateCreated]
      ,[DateUpdated]