import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  images: any[] = [
    "assets/images/slide1.jpg",
    "assets/images/slide2.jpg",
    "assets/images/slide3.jpg",
  ];
  currentIndex = 0;
  showContact = false;
  imgurls: string = '';
  private autoSlideInterval: any;
  touchStartX = 0;
  touchEndX = 0;
  constructor(private http: HttpClient, private zone: NgZone) { }

  ngOnInit() {
    //this.startAutoSlide();
  }
  ngOnDestroy() {
    this.stopAutoSlide();
  }
  startAutoSlide() {
    //this.stopAutoSlide();

    this.zone.run(() => {
      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 5000);
    });
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  openContact() {
    this.showContact = true;
  }

  closeContact() {
    this.showContact = false;
  }
  openWhatsApp() {
    window.open('https://wa.me/918281569250', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/arcsnspaces', '_blank');
  }

  callPhone() {
    window.location.href = 'tel:+918281569250';
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (Math.abs(swipeDistance) > 50) { // minimum swipe
      if (swipeDistance > 0) {
        this.next(); // swipe left → next slide
      } else {
        this.prev(); // swipe right → prev slide
      }
    }

    this.startAutoSlide(); // restart auto slide
  }
}
