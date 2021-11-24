import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Route, Link, Routes } from 'react-router-dom';
import Category from './Category'

export default function Categories () {
  const categories = useSelector(selectCategories)

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        { 
          Object.keys(categories).map(category => {
            return (
              <li key={category}>
                <Link to={`/${category}`}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
      <Routes>
        <Route path={`/:name`} element={<Category />} />
      </Routes>
    </main>
  )
}
