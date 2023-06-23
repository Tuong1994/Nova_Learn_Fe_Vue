export interface IComment {
  id?: string;
  commentBody: string;
  parentId: string;
  productId: string;
  productName?: string;
  customerId: string;
  customerName?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
