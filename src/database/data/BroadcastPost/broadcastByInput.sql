

SELECT BroadcastPosts.Id,BroadcastPosts.Comment,BroadcastPosts.MediaType,BroadcastPostTargetType.Description as HostType,BroadcastPosts.CreatedAt
FROM BroadcastPosts
INNER JOIN BroadcastPostTargetType
ON BroadcastPosts.TargetType = BroadcastPostTargetType.Id
WHERE Comment=@Input  OR MediaType=@Input OR HostType=@Input
