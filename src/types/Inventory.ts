export interface InventoryInferface {
  id: number;
  productName: string;
  stockDueDate: string;
  supplierName: string;
  quantity: number | string;
  costPrice: number | string;
  amount: number | string;
  isEditable: boolean;
}
