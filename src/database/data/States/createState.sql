insert into dbo.States
    (
        [StateID],
        [Statename],
        [Created],
     
    )
VALUES 
    (
        @StateID,
        @Statename,
        @Created, 
       
    )

Select SCOPE_IDENTITY() AS Id;
