insert into dbo.NominationCategory
    (

        [Description],
        [DateCreated],
        [DateUpdated]

    )
VALUES 
    (
        @Description,
        @DateCreated,
        @DateUpdated   
       
    )

Select SCOPE_IDENTITY() AS NominationCatID;
