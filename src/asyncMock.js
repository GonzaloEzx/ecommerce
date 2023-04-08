const products = [
    {
        id: '1',
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: "https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png",
        stock: 25,
        description: 'Telefono muy caro iphone 12'
    },
    {
        id: '2',
        name: 'Nokia 1.3',
        price: 800,
        category: 'celular',
        img: "https://cbafederal.net/wp-content/uploads/2021/09/Nokia-1-3-16GB-Charcoal-6438409043870-10072020-01-p.png",
        stock: 25,
        description: 'Nokia 1.3 16gb 1gb Ram'
    },   
    {
        id: '3',
        name: 'LG B220',
        price: 200,
        category: 'celular',
        img: "https://cbafederal.net/wp-content/uploads/2021/08/D_NQ_NP_978935-MLA40035195292_122019-O.png",
        stock: 25,
        description: 'LG B220 Dual SIM 32MB 32MB RAM – TIPO NOKIA 1100'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}