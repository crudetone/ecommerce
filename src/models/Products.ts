export interface ProductItem {
  id: number|string,
  _id?: number|string,
  createdAt?: any,
  title?: string,
  desc?: string,
  img: string,
  categories?: string[],
  size?: string[],
  color?: string[],
  price: number,
  inStock?: boolean
}