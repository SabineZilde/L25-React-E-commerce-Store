const categories = [
    {
        title: 'Category 1',
        image: 'https://1.bp.blogspot.com/-DSmwNAq6vqg/VGXlFBWrySI/AAAAAAAAAKE/dQm2aKSYFWI/s1600/886549_568611516497028_1804478882_o.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam perferendis nulla expedita soluta fugit incidunt ex quae deleniti natus tempora unde, eius consectetur nemo dicta sint exercitationem, sapiente aspernatur!',
        id: 'first-category',
        products: [
            {
                title: 'Product 1',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/4RIn6NXQKUACkBAxiDuR2n/a9634cfac64dbe02ec25e0e3d26c1a7f/76279-1001-1-4ww.jpg',
                price: 20,
                id: 11,
            },
            {
                title: 'Product 2',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg',
                price: 20,
                id: 12,
            },
            {
                title: 'Product 3',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/5GdFeEcBwkDaqpHfcBp2ES/2670f3e31b032cc4cf79aeaeb619a279/04313-1001-M-4ww.jpg',
                price: 20,
                id: 13,
            },
            {
                title: 'Product 4',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1hzXOP9hV2K3fFQqspS1KS/b0edf9061117a63e7aff9083424e6757/06280-1309-1-4ww.jpg',
                price: 20,
                id: 14,
            },
            {
                title: 'Product 5',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/SxodAYb79hQ8V0LJnTS7J/f843cc904a01f073698c353dceda5b60/09165-1059-2-4ww.jpg',
                price: 20,
                id: 15,
            },
            {
                title: 'Product 6',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/26PKH2SIYIr2g8kgcHqgAC/10f5f2fe229a65d1f2f629fdceb34e20/09379-GROUP-4ww.jpg',
                price: 20,
                id: 16,
            },
            {
                title: 'Product 7',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/65nP1ADkbN65oH5XYbWPpi/5769224e2b4aee65428e15a6e2ce7c6a/06280-1029-4ww.jpg',
                price: 20,
                id: 17,
            },
            {
                title: 'Product 8',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/Nu0NDsCQChLN4MdVHo0cn/b6577ec36034cb036ecb0fae003d03f3/05442-Group-4ww.jpg',
                price: 20,
                id: 18,
            },
            {
                title: 'Product 9',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/7cNVb10Mb2od3qe1PMF0Ip/11212112e800ce5776483255c516912b/05891-1039-1-4ww.jpg',
                price: 20,
                id: 19,
            },
        ]
    },
    {
        title: 'Category 2',
        image: 'https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg',
        text: 'Some info about the category. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias nisi aut. Placeat omnis nesciunt dignissimos at, quibusdam inventore assumenda ad nam nihil ullam labore quasi nisi blanditiis error quaerat.',
        id: 'second-category',
        products: [
            {
                title: 'Product 1',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/4RIn6NXQKUACkBAxiDuR2n/a9634cfac64dbe02ec25e0e3d26c1a7f/76279-1001-1-4ww.jpg',
                price: 20,
                id: 21,
            },
            {
                title: 'Product 2',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg',
                price: 20,
                id: 12,
            },
            {
                title: 'Product 3',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/5GdFeEcBwkDaqpHfcBp2ES/2670f3e31b032cc4cf79aeaeb619a279/04313-1001-M-4ww.jpg',
                price: 20,
                id: 23,
            },
            {
                title: 'Product 4',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1hzXOP9hV2K3fFQqspS1KS/b0edf9061117a63e7aff9083424e6757/06280-1309-1-4ww.jpg',
                price: 20,
                id: 24,
            },
            {
                title: 'Product 5',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/SxodAYb79hQ8V0LJnTS7J/f843cc904a01f073698c353dceda5b60/09165-1059-2-4ww.jpg',
                price: 20,
                id: 25,
            },
            {
                title: 'Product 6',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/26PKH2SIYIr2g8kgcHqgAC/10f5f2fe229a65d1f2f629fdceb34e20/09379-GROUP-4ww.jpg',
                price: 20,
                id: 26,
            },
            {
                title: 'Product 7',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/65nP1ADkbN65oH5XYbWPpi/5769224e2b4aee65428e15a6e2ce7c6a/06280-1029-4ww.jpg',
                price: 20,
                id: 27,
            },
            {
                title: 'Product 8',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/Nu0NDsCQChLN4MdVHo0cn/b6577ec36034cb036ecb0fae003d03f3/05442-Group-4ww.jpg',
                price: 20,
                id: 28,
            },
            {
                title: 'Product 9',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/7cNVb10Mb2od3qe1PMF0Ip/11212112e800ce5776483255c516912b/05891-1039-1-4ww.jpg',
                price: 20,
                id: 29,
            },
        ]
    },
    {
        title: 'Category 3',
        image: 'https://www.sunnyartcentre.co.uk/wp-content/uploads/2020/06/canvas-board-for-oil-painting-and-acrylic-painting_.jpg',
        text: 'Another thext. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga labore ipsum autem ratione debitis eveniet ea neque necessitatibus similique a perspiciatis maiores totam veritatis officiis velit tenetur inventore, consectetur quam.',
        id: 'third-category',
        products: [
            {
                title: 'Product 1',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/4RIn6NXQKUACkBAxiDuR2n/a9634cfac64dbe02ec25e0e3d26c1a7f/76279-1001-1-4ww.jpg',
                price: 20,
                id: 31,
            },
            {
                title: 'Product 2',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg',
                price: 20,
                id: 32,
            },
            {
                title: 'Product 3',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/5GdFeEcBwkDaqpHfcBp2ES/2670f3e31b032cc4cf79aeaeb619a279/04313-1001-M-4ww.jpg',
                price: 20,
                id: 33,
            },
            {
                title: 'Product 4',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/1hzXOP9hV2K3fFQqspS1KS/b0edf9061117a63e7aff9083424e6757/06280-1309-1-4ww.jpg',
                price: 20,
                id: 34,
            },
            {
                title: 'Product 5',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/SxodAYb79hQ8V0LJnTS7J/f843cc904a01f073698c353dceda5b60/09165-1059-2-4ww.jpg',
                price: 20,
                id: 35,
            },
            {
                title: 'Product 6',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/26PKH2SIYIr2g8kgcHqgAC/10f5f2fe229a65d1f2f629fdceb34e20/09379-GROUP-4ww.jpg',
                price: 20,
                id: 36,
            },
            {
                title: 'Product 7',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/65nP1ADkbN65oH5XYbWPpi/5769224e2b4aee65428e15a6e2ce7c6a/06280-1029-4ww.jpg',
                price: 20,
                id: 37,
            },
            {
                title: 'Product 8',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/Nu0NDsCQChLN4MdVHo0cn/b6577ec36034cb036ecb0fae003d03f3/05442-Group-4ww.jpg',
                price: 20,
                id: 38,
            },
            {
                title: 'Product 9',
                image: 'https://images.ctfassets.net/f1fikihmjtrp/7cNVb10Mb2od3qe1PMF0Ip/11212112e800ce5776483255c516912b/05891-1039-1-4ww.jpg',
                price: 20,
                id: 39,
            },
        ]
    },
]

export default categories;