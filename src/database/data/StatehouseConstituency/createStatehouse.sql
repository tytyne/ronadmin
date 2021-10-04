insert into dbo.StateHouseConstituency
    (
      
        [ShcName],
        [Created]

    )
VALUES 
    (
        @ShcName,
        @Created 
       
    )

Select SCOPE_IDENTITY() AS id;