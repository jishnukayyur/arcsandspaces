import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Folder } from 'lucide-angular';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  readonly FolderIcon = Folder;
  activeGallery: any = null;
  galleries = [
    {
      title: 'Exterior',
      cover: 'assets/gallery/exterior/1.jpg',
      images: [
        'assets/gallery/exterior/1.jpg',
        'assets/gallery/exterior/2.jpg',
        'assets/gallery/exterior/3.jpg',
        'assets/gallery/exterior/4.jpg',
      ]
    },
    {
      title: 'Room',
      cover: 'assets/gallery/room/1.jpg',
      images: [
        'assets/gallery/room/1.jpg',
        'assets/gallery/room/2.jpg',
        'assets/gallery/room/3.jpg',
        'assets/gallery/room/4.jpg'
      ]
    },
    {
      title: 'Kitchen',
      cover: 'assets/gallery/kitchen/1.jpg',
      images: [
        'assets/gallery/kitchen/1.jpg',
        'assets/gallery/kitchen/2.jpg'
      ]
    },
    {
      title: 'Living Room',
      cover: 'assets/gallery/hall/1.jpg',
      images: [
        'assets/gallery/hall/1.jpg',
        'assets/gallery/hall/2.jpg',
        'assets/gallery/hall/3.jpg'
      ]
    }
  ];

  ngOnInit() {}
  openGallery(item: any) {
    this.activeGallery = item;
  }

  closeGallery() {
    this.activeGallery = null;
  }
}
