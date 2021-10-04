
insert into dbo.BroadcastPostTargetType
    (
        [Description],
        [CreatedAt],
     
    )
 VALUES 
    (
        @Description,
        @CreatedAt, 
       
    )

Select SCOPE_IDENTITY() AS Id;