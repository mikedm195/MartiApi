import { Cart } from "../models/Cart";
import { Category } from "../models/Category";
import { Order } from "../models/Order";
import { OrderDetail } from "../models/OrderDetail";
import { Photo } from "../models/Photo";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Seller } from "../models/Seller";


export interface SqlRepository
{
  isUserAuth(email: string, password: string): Promise<User>;
  saveUser(user: User): Promise<number>;
  setUser(user: User): Promise<void>;
  getUserDetails(userId: number): Promise<User>;
  deleteUser(userId: number): Promise<void>;
  
  saveProduct(product: Product): Promise<number>;
  setProduct(product: Product): Promise<void>;
  getProductDetails(productId: number): Promise<Product>;
  getProductList(categoryId: number, color: string, edad: string): Promise<Product[]>;
  deleteProduct(productId: number): Promise<void>;

  saveCart(cart: Cart): Promise<number>;
  setCart(cart: Cart): Promise<void>;
  getCartDetails(cartId: number, productId: number): Promise<Cart>;
  getCartList(userId: number): Promise<Cart[]>;
  deleteCart(cartId: number, productId: number): Promise<void>;

  saveCategory(category: Category): Promise<number>;
  setCategory(category: Category): Promise<void>;
  getCategoryDetails(categoryId: number): Promise<Category>;
  getCategoryList(): Promise<Category[]>;
  deleteCategory(categoryId: number): Promise<void>;

  saveOrder(order: Order): Promise<number>;
  getOrderDetails(orderId: number): Promise<Order>;

  saveSeller(seller: Seller): Promise<number>;
  setSeller(seller: Seller): Promise<void>;
  getSellerDetails(sellerId: number): Promise<Seller>;
  getSellerList(orderId: number): Promise<Seller[]>;
  deleteSeller(sellerId: number): Promise<void>;

  savePhoto(photo: Photo): Promise<number>;
  setPhoto(photo: Photo): Promise<void>;
  getPhotoDetails(photoId: number): Promise<Photo>;
  getPhotoList(productId: number, colorId: number): Promise<Photo[]>;
  deletePhoto(photoId: number): Promise<void>;

  getColorList(): Promise <string[]>;
  getAgeList(): Promise <string[]>;
}