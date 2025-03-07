import { db } from '@/lib/db'
import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag
} from 'next/cache'
import { getCategoryGlobalTag } from './cache'

interface CreateCategoryInput {
  name: string
}

export const getCategories = async () => {
  'use cache'

  cacheLife('days')
  cacheTag(getCategoryGlobalTag())

  try {
    return await db.category.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        name: true,
        status: true
      }
    })
  } catch (error) {
    console.error('Error getting categories data:', error)
    return []
  }
}

export const createCategory = async (input: CreateCategoryInput) => {
  try {

  } catch (error) {
    console.error('Error creating new category:', error)
    return {
      message: 'Something went wrong. Please try again later'
    }
  }
}