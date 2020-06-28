import React from 'react'
import { Category } from '../Category/index'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  )
}
