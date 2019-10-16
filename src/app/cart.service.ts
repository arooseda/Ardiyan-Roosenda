import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Booster Pack',
      expanded: true,
      products: [
        { id: 0, name: 'Pokemon TCG Set A Booster Pack', price: '25000', imageUrl: '../assets/list/BoosterPackA.png'  },
        { id: 1, name: 'Pokemon TCG Set B Booster Pack', price: '25000' , imageUrl: '../assets/list/BoosterPackB.png' },
        { id: 2, name: 'Pokemon Breakthrough Booster Pack', price: '70000' , imageUrl: '../assets/list/Breakthough.png' },
      ]
    },
    {
      category: 'Set Box & Deck',
      products: [
        { id: 3, name: 'Pokemon GX Starter Deck', price: '120000', imageUrl: '../assets/list/StarterDeck.png' },
        { id: 4, name: 'Pokemon TCG Set A Booster Box', price: '450000', imageUrl: '../assets/list/BoosterBoxA.png' },
        { id: 5, name: 'Pokemon TCG Set B Booster Box', price: '450000', imageUrl: '../assets/list/BoosterBoxB.png' }
      ]
    },
    {
      category: 'Card',
      products: [
        { id: 6, name: 'Charizad GX TD', price: '40000', imageUrl: '../assets/list/CharizadTD.jpg' },
        { id: 7, name: 'Gyarados GX TD', price: '35000', imageUrl: '../assets/list/GyaradosTD.jpg' },
        { id: 8, name: 'Machamp GX TD', price: '35000', imageUrl: '../assets/list/MachampTD.jpg' },
        { id: 9, name: 'Snorlax GX TD', price: '35000', imageUrl: '../assets/list/SnorlaxTD.jpg' }
      ]
    },
    {
      category: 'Accesoris',
      products: [
        { id: 10, name: 'Sleeve Polos Clear 66 x 91 mm Standard 50pcs', price: '25000', imageUrl: '../assets/list/Sleeve.png' }
      ]
    },
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  removePost(product){
    let index = this.cart.indexOf(product);

    if(index > -1){
      this.cart.splice(index, 1);
    }
  }
}
