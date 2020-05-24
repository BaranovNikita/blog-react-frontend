interface Post {
  title: string,
  author: string,
  alias: string,
  text: string,
  description: string,
  id: number,
  createdAt: Date,
  updatedAt: Date,
  categories: Category[]
}

interface Category {
  title: string,
  createdAt?: Date,
  updatedAt?: Date,
  id: number
}
