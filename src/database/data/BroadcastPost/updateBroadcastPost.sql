UPDATE  dbo.BroadcastPosts  
SET [Comment]=@Comment,
    [TargetType]=@TargetType,
    [TargetID]=@TargetID,
<<<<<<< HEAD
=======
    [UpdatedBy]=@UpdatedBy,
    [UpdatedAt]=@UpdatedAt,
>>>>>>> d317fd869b2979ef68db592d7e099cc1bd409b7e
    [MediaType]=@MediaType,
    [MediaURL]=@MediaURL,
    [Status]=@Status
WHERE [Id]=@Id

SELECT  [Comment],
        [TargetType],
        [TargetID],
<<<<<<< HEAD
=======
        [UpdatedBy],
        [UpdatedAt],
>>>>>>> d317fd869b2979ef68db592d7e099cc1bd409b7e
        [MediaType],
        [MediaURL],
        [Status]
  FROM  dbo.BroadcastPosts  
  WHERE [Id]=@Id


  
    