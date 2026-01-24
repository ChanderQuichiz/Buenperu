import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  rating: number;
}

@Component({
  selector: 'app-matchescarousel',
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './matchescarousel.html',
  styleUrl: './matchescarousel.css',
})
export class Matchescarousel {
  products = signal<Product[]>([
    {
      id: 1,
      code: 'P001',
      name: 'Blue Band',
      description: 'Producto destacado 1',
      price: 80,
      image: 'blue-band.jpg',
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: 2,
      code: 'P002',
      name: 'Blue T-Shirt',
      description: 'Producto destacado 2',
      price: 29,
      image: 'blue-t-shirt.jpg',
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: 3,
      code: 'P003',
      name: 'Bracelet',
      description: 'Producto destacado 3',
      price: 15,
      image: 'bracelet.jpg',
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: 4,
      code: 'P004',
      name: 'Brown Purse',
      description: 'Producto destacado 4',
      price: 120,
      image: 'brown-purse.jpg',
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: 5,
      code: 'P005',
      name: 'Chakra Bracelet',
      description: 'Producto destacado 5',
      price: 34,
      image: 'chakra-bracelet.jpg',
      inventoryStatus: 'OUTOFSTOCK',
      rating: 2
    },
    {
      id: 6,
      code: 'P006',
      name: 'Game Controller',
      description: 'Producto destacado 6',
      price: 99,
      image: 'game-controller.jpg',
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ]);

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
