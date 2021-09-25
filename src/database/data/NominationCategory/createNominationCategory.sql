insert into dbo.NominationCategory
    (
        [NominationCatID],
        [Description],
        [DateCreated],
        [DateUpdated]

    )
VALUES 
    (
        @NominationCatID,
        @Description,
        @DateCreated,
        @DateUpdated   
       
    )
