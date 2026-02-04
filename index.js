require('dotenv').config()
const express = require('express')
const app = express()
//const port = 3000

const githubData = {
  "login": "anshulsingla114",
  "id": 134334591,
  "node_id": "U_kgDOCAHIfw",
  "avatar_url": "https://avatars.githubusercontent.com/u/134334591?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anshulsingla114",
  "html_url": "https://github.com/anshulsingla114",
  "followers_url": "https://api.github.com/users/anshulsingla114/followers",
  "following_url": "https://api.github.com/users/anshulsingla114/following{/other_user}",
  "gists_url": "https://api.github.com/users/anshulsingla114/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anshulsingla114/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anshulsingla114/subscriptions",
  "organizations_url": "https://api.github.com/users/anshulsingla114/orgs",
  "repos_url": "https://api.github.com/users/anshulsingla114/repos",
  "events_url": "https://api.github.com/users/anshulsingla114/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anshulsingla114/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Anshul Singla",
  "company": null,
  "blog": "",
  "location": "sector 22 rohini delhi",
  "email": null,
  "hireable": null,
  "bio": " Full Stack Developer. \r\n\r\n",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-05-22T20:55:54Z",
  "updated_at": "2026-01-26T12:24:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/anshul', (req,res) => {
    res.send('<h1>anshuldotcom</h1>')
})

app.get('/github' , (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
