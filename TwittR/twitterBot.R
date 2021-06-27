#install.packages("rtweet")
library("rtweet")

source("secret.R")

#vignette("auth", "rtweet")

token <- create_token(
  app = "Project Soulidity",
  consumer_key = api_secret_key,
  consumer_secret = api_key,
  access_token = access_token,
  access_secret = access_token_secret
)

post_tweet("Hello from RunETH streak bot v2")

rstats <- search_tweets("rstats", retryonratelimit = T,n = 5)

post_favorite(rstats$status_id[1])
