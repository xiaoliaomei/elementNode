const router = require('koa-router')()

router.post('/users/login', async (ctx, next) => {
   ctx.body = {
    "code": 20000,
    "data": {
        "accessToken": "admin-token"
    }
}
})

router.post('/users/info', async (ctx, next) => {
  ctx.body = {
    "code": 20000,
    "data": {
        "user": {
            "id": 0,
            "username": "admin",
            "password": "any",
            "name": "Super Admin",
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "introduction": "I am a super administrator",
            "email": "admin@test.com",
            "phone": "1234567890",
            "roles": [
                "admin"
            ]
        }
    }
}
})

router.get('/transactions', async (ctx, next) => {
  ctx.body = {
    "code": 20000,
    "data": {
        "total": 20,
        "items": [
            {
                "orderId": "e55d67fd-af7b-4a97-869e-83c87482a560",
                "status": "pending",
                "timestamp": 1674535867355,
                "username": "Robin Legros DDS",
                "price": 4337.66
            },
            {
                "orderId": "354ded70-fb72-48d8-b814-9b530757b542",
                "status": "success",
                "timestamp": 1650469749124,
                "username": "Hope Gulgowski",
                "price": 7272.69
            },
            {
                "orderId": "aff8747c-9806-432b-accf-eccd22591b5a",
                "status": "success",
                "timestamp": 1654796375986,
                "username": "Faith Luettgen",
                "price": 10328.92
            },
            {
                "orderId": "8c0f17ba-94d3-47dd-9c5a-5f0cfbc43983",
                "status": "success",
                "timestamp": 1665825727587,
                "username": "Debra Adams",
                "price": 13112.92
            },
            {
                "orderId": "089f764a-b65d-4b2d-b50d-50f221183dc8",
                "status": "success",
                "timestamp": 1674994596228,
                "username": "Ernest Greenholt",
                "price": 4983.95
            },
            {
                "orderId": "a338a34b-eef2-4eb4-af8b-83dfbe5fd767",
                "status": "pending",
                "timestamp": 1669001664186,
                "username": "Pearl Mills",
                "price": 6225.3
            },
            {
                "orderId": "30f745a0-9903-47da-9ab2-509aec8f2b13",
                "status": "pending",
                "timestamp": 1663173534818,
                "username": "Benny DuBuque",
                "price": 4190.24
            },
            {
                "orderId": "30370ad4-872f-4673-a320-6f8f44e808c1",
                "status": "success",
                "timestamp": 1658487308254,
                "username": "Mr. Sherri Kunde",
                "price": 14409.17
            },
            {
                "orderId": "239b38df-32b1-43f7-a3af-192fbe239324",
                "status": "success",
                "timestamp": 1646544138798,
                "username": "Cristina Quitzon",
                "price": 14218.33
            },
            {
                "orderId": "66d52049-dbd6-4629-85ef-4346049be112",
                "status": "success",
                "timestamp": 1675058576252,
                "username": "Lee Treutel",
                "price": 6377.89
            },
            {
                "orderId": "279894bf-3e6c-48bb-a7c2-c805dd1a4cef",
                "status": "success",
                "timestamp": 1649510568707,
                "username": "Justin Marquardt",
                "price": 3586.24
            },
            {
                "orderId": "f5d2838a-618d-4ff6-9090-70688e1811f8",
                "status": "success",
                "timestamp": 1653551173283,
                "username": "Zachary Jast II",
                "price": 6359.53
            },
            {
                "orderId": "8ea00a4f-d65f-4181-83bc-4ec0a8f2aef3",
                "status": "pending",
                "timestamp": 1666365570341,
                "username": "Darin Jacobi",
                "price": 7379.88
            },
            {
                "orderId": "0491813b-022b-466b-aa6f-e0f825a575bf",
                "status": "pending",
                "timestamp": 1659727793395,
                "username": "Joann Farrell",
                "price": 3753.88
            },
            {
                "orderId": "c718f279-b531-4543-aaea-ec709d856eed",
                "status": "success",
                "timestamp": 1662921729462,
                "username": "Wesley Walker",
                "price": 14374.58
            },
            {
                "orderId": "985fe5e8-88e5-4154-840b-945bbee6b808",
                "status": "success",
                "timestamp": 1657572597547,
                "username": "Conrad Crist",
                "price": 10657.78
            },
            {
                "orderId": "e2d74078-5fbf-403c-9840-7ed7110c3aec",
                "status": "success",
                "timestamp": 1674016392821,
                "username": "Beatrice Toy V",
                "price": 4022.65
            },
            {
                "orderId": "4e7a58d8-be43-4615-9938-99fcc346596d",
                "status": "pending",
                "timestamp": 1676918846640,
                "username": "Kendra Cole",
                "price": 4419.74
            },
            {
                "orderId": "6552fc8d-cb52-445c-acb7-4d3dea5ec2e6",
                "status": "pending",
                "timestamp": 1650826590747,
                "username": "Geraldine Kuhn DDS",
                "price": 1411.88
            },
            {
                "orderId": "f3155b05-b2b1-41a8-872c-5bb9c2f60aea",
                "status": "success",
                "timestamp": 1660545428085,
                "username": "Ida Mitchell",
                "price": 12072.77
            }
        ]
    }
}
})

module.exports = router
