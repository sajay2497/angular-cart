import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  allcartitem: any;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getcartItem().subscribe(
      (res: any) => {
        this.allcartitem = res
      }
    )
    this.cartservice.setcartItem();
  }

  cartplus(proid: any) {
    var id = proid;
    this.cartservice.addQty({id});
  }

  cartmins(proid: any) {
    var id = proid;
    this.cartservice.removeQty({id});
  }
  singlecartdelete(proid: any){
    var id = proid;
    this.cartservice.deleteItem({id});
  }

}
