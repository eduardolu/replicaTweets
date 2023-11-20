import { v4 as uuidv4 } from "uuid";
import { size } from "lodash";
import { TWEET } from "../utils/constants";

export function seveTweet(tweet, username) {
  const tweets = getTweetApi();
  if (size(tweets) === 0) {
    const tweetTemp = [
      { id: uuidv4(), tweet, username, createdAt: new Date() },
    ];
    localStorage.setItem(TWEET, JSON.stringify(tweetTemp));
  } else {
    tweets.push({ id: uuidv4(), tweet, username, createdAt: new Date() });
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
