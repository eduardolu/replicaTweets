import { v4 as uuidv4 } from "uuid";
import { size, remove } from "lodash";
import { TWEET } from "../utils/constants";

export function seveTweet(username, tweet) {
  const tweets = getTweetApi();
  if (size(tweets) === 0) {
    const tweetTemp = [
      { id: uuidv4(), username, tweet, createdAt: new Date() },
    ];
    localStorage.setItem(TWEET, JSON.stringify(tweetTemp));
  } else {
    tweets.push({ id: uuidv4(), username, tweet, createdAt: new Date() });
    localStorage.setItem(TWEET, JSON.stringify(tweets));
  }
}
export function getTweetApi() {
  const tweet = localStorage.getItem(TWEET);
  if (tweet) {
    return JSON.parse(tweet);
  }
  return [];
}

export function deleteTweetApi(idTweet) {
  const tweets = getTweetApi();
  remove(tweets, function (tweet) {
    return tweet.id === idTweet;
  });
  localStorage.setItem(TWEET, JSON.stringify(tweets));
}
