
docker-compose pull && docker-compose up
```
#### Query the project

Open your browser and head to `http://localhost:3000`.

````graphql
{
  query {
    rewards(
      last: 50
      orderBy: BALANCE_OF_DESC
      filter: {
        accountId: {
          in: [
            "ZwDkW3D3Z417kFDSh6ez9xhUWpTn1c1DAKZHUQCZXZeMqFN"
            "ZfEuzYHyfo5TZfAx9fsntdkx2W4gDFLPwUNeqSrJTpQJXDc"
            "W3RJVe6n1i3sFhbitDYHBJqq5aQt1F3vi2384tSdccuZxEp"
            "YkZxbbmyCQDvpu9sMrHMqx86sijfbVcRbQ5vtkdh1xKgTjV"
            "XhjGfuq5T1KoEFp2k5TEDaKBe6o2nFdo8JRXL3UYb1vZySW"
            "ZqpPKt2sk2Xwd1YgYq8UvPF3JJDJ7XcEKFCcybYTeYDaigC"
            "Wg8vPjUhTQx4JM88qsBKG6u2rXJbYCF7LxUxJvqtVvYnPzj"
            "ZPPSjcJwBkCjhUG3Yd9kaii8R7QTw8ykjiztQHfokeoYMjN"
            "bdwHz6t2fJ2ALk63N2ECUVTyghbFFq8dFTss5pytFxApFaR"
            "YJqWvgMJcD1Di3BQvZ2W2KnSGKPfJGMVX6BZ9wfEaipviK9"
            "b449sv9HhoTkrBor6Y6GPgv77mfqANCfXAi716sDN7BWm6t"
            "XhdK6WfN4CzaeuPNT8v6s6YT1KgY2ftowEzr9KX9jTNjBsi"
            "WGYLrLw8TPjp1ynU9AiwZtanc7B2CMtB43ssKmawDwfoUsZ"
            "ZP8rbjrkyf5Qkjr32fEy3n6av2nPzHh6Egv62Vu8kgEwZ8Z"
            "Wwfs24NNBLsdN9BHHj29spDsq5vkjk771dxPvMrXwraLywn"
            "a4iJiYqsy3LK5KezfiDidVrGgUs5HVdffp7a6roBhVV7cuq"
            "b9AB1qFXsw81RuTBQ1sCP6PQ6k27QXWoe7VHrv9m6iwmBRK"
            "WdwRSePZTEa61BJNqu3cmoMiTE4ukp3xHKnNvP1mtugKL52"
          ]
        }
      }
    ) {
      nodes {
        id
        eraIndex
        accountId
        smartContract
        balanceOf
      }
    }
  }
}
````
