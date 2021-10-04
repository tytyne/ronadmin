insert into dbo.SenatorialDistrict
    (
        [SDName],
        [Created]
      

    )
VALUES 
    (
        @SDName,
        @Created
          
    )

Select SCOPE_IDENTITY() AS id;
