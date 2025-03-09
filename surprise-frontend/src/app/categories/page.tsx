import React from 'react';

const categories = [
    { id: 1, name: 'Category 1', subCategories: ['Sub 1', 'Sub 2'] },
    { id: 2, name: 'Category 2', subCategories: ['Sub 3', 'Sub 4'] },
    { id: 3, name: 'Category 3', subCategories: ['Sub 5', 'Sub 6'] },
];

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' },
    { id: 4, name: 'Product 4', description: 'Description 4' },
];

const CategoryPage: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <aside style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
                <h2>Categories</h2>
                <ul>
                    {categories.map(category => (
                        <li key={category.id}>
                            <input type="checkbox" id={`category-${category.id}`} />
                            <label htmlFor={`category-${category.id}`}>{category.name}</label>
                            <ul>
                                {category.subCategories.map(subCategory => (
                                    <li key={subCategory}>
                                        <input type="checkbox" id={`subCategory-${subCategory}`} />
                                        <label htmlFor={`subCategory-${subCategory}`}>{subCategory}</label>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div>
                    <h3>Rating</h3>
                    <div>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                </div>
            </aside>
            <main style={{ flex: 1, padding: '20px' }}>
                <h2>Products</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {products.map(product => (
                        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px' }}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CategoryPage;