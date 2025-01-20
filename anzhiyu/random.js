var posts=["2025/01/20/突然觉得自己就像一只鸵鸟/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };