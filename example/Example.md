


Run following curl 

curl -X POST --header 'Content-Type: application/json' http://localhost:3000/ -d @src/gql.json > rewards_result.json

Resulting rewards_result.json has following fields of rewards:

{
  "data": {
    "query": {
      "rewards": {
        "nodes": [
          {
            "id": "92-bZMXa9HCYxJ4AEGCErdh1pB2L3TetpN4pMCr4HvNjqGoo8Z",
            "accountId": "bZMXa9HCYxJ4AEGCErdh1pB2L3TetpN4pMCr4HvNjqGoo8Z",
            "smartContract": "{\"evm\":\"0x101b453a02f961b4e3f0526ecd4c533c3a80d795\"}",
            "balanceOf": "962629188790722355"
          },
...

get down to the array of objects with command:

jq -r '.data.query.rewards.nodes' result.json > refined_results.json

Now we have this
[
  {
    "id": "92-bZMXa9HCYxJ4AEGCErdh1pB2L3TetpN4pMCr4HvNjqGoo8Z",
    "accountId": "bZMXa9HCYxJ4AEGCErdh1pB2L3TetpN4pMCr4HvNjqGoo8Z",
    "smartContract": "{\"evm\":\"0x101b453a02f961b4e3f0526ecd4c533c3a80d795\"}",
    "balanceOf": "962629188790722355"
  },
  {
    "id": "92-bZNB7zMdttmYVqDTDsUPrWWsi9CteX7md5KH2BayNqBPno2",
    "accountId": "bZNB7zMdttmYVqDTDsUPrWWsi9CteX7md5KH2BayNqBPno2",
    "smartContract": "{\"evm\":\"0xe915d2393a08a00c5a463053edd31bae2199b9e7\"}",
    "balanceOf": "1421352891189712608"
  },
  {
    "id": "92-bZcY3JjpaSdS2ByVurh8ogWEV6xw8zZmTkxFKDnZpdC8bZi",
    "accountId": "bZcY3JjpaSdS2ByVurh8ogWEV6xw8zZmTkxFKDnZpdC8bZi",
    "smartContract": "{\"evm\":\"0x101b453a02f961b4e3f0526ecd4c533c3a80d795\"}",
    "balanceOf": "10937266205453864116"
  },
  ....
]

cat refined_results.json| jq -r '(map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.])) as $rows | $cols, $rows[] | @csv' > results.csv

Imam puno 488933274902400000000 u rewardsima od devova, dok kod mene npr nema... (primjer ivan_test_gql.json)

  850  curl -X POST --header 'Content-Type: application/json' http://localhost:3000/ -d @ivan_rewards_gql.json > ivan_rewards.json

  855  jq -r '.data.query.rewards.nodes' ivan_rewards.json> ivan_rewards_refined.json

  859  cat ivan_rewards_refined.json | jq -r '(map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.])) as $rows | $cols, $rows[] | @csv' > ivan_rewards.csv



