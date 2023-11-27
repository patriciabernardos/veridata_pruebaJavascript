const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];


// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
    let path;

    for (let i = 0; i < categories.length; i++) {
        if (categoryName == categories[i].name) {
            path = "/" + categories[i].name;
        } else {
            for (let j = 0; j < categories[i].subcategories.length; j++) {
                if (categoryName == categories[i].subcategories[j].name) {
                    path = "/" + categories[i].name + "/" + categories[i].subcategories[j].name;
                } else {
                    for (let z = 0; z < categories[z].subcategories.length; z++) {
                        if (categories[i].subcategories[j].subcategories[z] !== undefined && categories[i].subcategories[j].subcategories[z].name == categoryName) {
                            path = "/" + categories[i].name + "/" + categories[i].subcategories[j].name + "/" + categories[i].subcategories[j].subcategories[z].name;

                        }
                    }
                }
            }
        }

    }

    return path;
};



// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
console.log(getCategoryPath(categories, 'category1')); // should output: '/category5'
console.log(getCategoryPath(categories, 'category3')); // should output: '/category5'
