SELECT FeedPosts.Comment ,Users.LastName,Users.FirstName,COUNT(PostLikes.React) as likes,FeedPosts.CreatedAt
FROM FeedPosts 

INNER JOIN Users ON FeedPosts.UserId = Users.Id
INNER JOIN PostLikes ON FeedPosts.Id  = PostLikes.PostId WHERE PostLikes.React=1
GROUP BY FeedPosts.Id,FeedPosts.Comment ,Users.LastName,Users.FirstName,FeedPosts.CreatedAt
ORDER BY FeedPosts.CreatedAt DESC




