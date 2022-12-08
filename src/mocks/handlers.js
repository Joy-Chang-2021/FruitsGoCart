import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.get('http://fruits-go/:shop', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ 
        name: "Dolores beatae", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.",
        products: [
          {
            id: 31277226,
            category: "電影00",
            image: "https://i.pinimg.com/564x/9e/42/27/9e4227a0ee81ec8874fd92cf6203066c.jpg",
            type: [
              {
                name: "藍光",
                price: 550,
                quantity: 10
              },
              {
                name: "海報",
                price: 200,
                quantity: 8
              }
            ]
          },
          {
            id: 49556142,
            category: "電影01",
            image: "https://i.pinimg.com/564x/31/21/53/3121534a54680876fbc01b9c16240fd1.jpg",
            type: [
              {
                name: "藍光",
                price: 650,
                quantity: 10
              },
              {
                name: "海報",
                price: 300,
                quantity: 8
              }
            ]
          },
          {
            id: 94940209,
            category: "電影02",
            image: "https://i.pinimg.com/564x/99/f8/70/99f8702093bd74454c4636a33f558c4a.jpg",
            type: [
              {
                name: "藍光",
                price: 600,
                quantity: 10
              },
              {
                name: "海報",
                price: 350,
                quantity: 8
              }
            ]
          }
        ]
      }),
    )
  }),
]