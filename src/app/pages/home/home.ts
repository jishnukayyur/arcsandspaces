import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  images: any[] = [
    "/assets/images/slide1.jpg",
    "/assets/images/slide2.jpg",
    "/assets/images/slide3.jpg",
  ];
  currentIndex = 0;
  showContact = false;
  imgurls: string='';
  constructor( private http: HttpClient ) {}

  ngOnInit() {
    //this.getImages();
  }

 getImages() {
  fetch('https://script.google.com/macros/s/AKfycbzHyRWLFkpY8SijJTIOZzfvHXjUB41bhhyTyy6Q5f_eoYKtgFdp2X5zpdEp5Jo-jrFanQ/exec')
    .then(res => res.json())
    .then(dataset => {
      // We don't call downloadImage anymore. 
      // We just transform the URL and push it to the array.
      // this.images = dataset.map((img: any) => {
      //   // Use the thumbnail endpoint - it is much more stable for web apps
      //   return `https://drive.google.com/thumbnail?sz=w1000&id=${this.extractId(img)}`;
      // });
      dataset.forEach((img: any) => {
        this.downloadImage(img);
      })
    });
}

// Helper to make sure we have the clean ID
extractId(url: string): string {
  const parts = url.split('id=');
  return parts.length > 1 ? parts[1] : url;
}

downloadImage(url: string) {
  // We wrap the Google URL in a proxy URL
  const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

  this.http.get(proxiedUrl, { responseType: 'blob' }).subscribe({
    next: (blob) => {
      const imageSrc = URL.createObjectURL(blob);
      this.images.push(imageSrc);
    },
    error: (err) => console.error('ORB still blocking via proxy:', err)
  });
}

  getDriveImageUrl(url: string): string {
  if (!url) return '';

  // Extract fileId from different Google Drive URL formats
  const match =
    url.match(/id=([^&]+)/) ||        // uc?id=FILE_ID
    url.match(/\/d\/([^\/]+)/);       // /file/d/FILE_ID/

  const fileId = match ? match[1] : '';
  return fileId
    ? `https://drive.google.com/uc?export=view&id=${fileId}`
    : '';
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
  }
  openContact() {
    this.showContact = true;
  }

  closeContact() {
    this.showContact = false;
  }
  openWhatsApp() {
    window.open('https://wa.me/918281568250', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/arcsnspaces', '_blank');
  }

  callPhone() {
    window.location.href = 'tel:+918281569250';
  }
}
