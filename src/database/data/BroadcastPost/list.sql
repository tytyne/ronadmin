<<<<<<< HEAD
SELECT BroadcastPosts.Id,BroadcastPosts.Comment,BroadcastPosts.MediaType,BroadcastPostTargetType.Description as HostType,BroadcastPosts.CreatedAt,BroadcastPosts.Status
FROM BroadcastPosts
INNER JOIN BroadcastPostTargetType
ON BroadcastPosts.TargetType = BroadcastPostTargetType.Id
ORDER BY CreatedAt DESC;

=======
SELECT * FROM dbo.BroadcastPosts
>>>>>>> d317fd869b2979ef68db592d7e099cc1bd409b7e

