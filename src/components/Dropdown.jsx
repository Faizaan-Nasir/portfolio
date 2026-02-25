import { useState } from 'react';

export default function Dropdown({ categories, selectedCategory, setSelectedCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='dropdown' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className='dropdown-header'>{selectedCategory} ▼</div>
            <div className={isOpen ? 'dropdown-content-open' : 'dropdown-content'}>
                <div className='dropdown-item' onClick={() => setSelectedCategory('Show All')}>Show All</div>
                {categories.map((category) => <div className='dropdown-item' onClick={() => setSelectedCategory(category)}>{category}</div>)}
            </div>
        </div>
    )
}