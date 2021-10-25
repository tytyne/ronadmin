SELECT BroadcastPosts.Id,BroadcastPosts.Comment,BroadcastPosts.MediaType,BroadcastPostTargetType.Description as HostType,BroadcastPosts.CreatedAt,BroadcastPosts.Status
FROM BroadcastPosts
INNER JOIN BroadcastPostTargetType
ON BroadcastPosts.TargetType = BroadcastPostTargetType.Id
ORDER BY CreatedAt DESC;


