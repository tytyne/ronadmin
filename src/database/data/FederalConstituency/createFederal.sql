insert into dbo.FederalConstituency
    (
        [FcName],
        [Created]
      

    )
VALUES 
    (
        @FcName,
        @Created
   
       
    )

Select SCOPE_IDENTITY() AS id;
