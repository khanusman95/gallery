import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  title = 'Recent Photographs';
  @Input() filterBy? : string = 'all'; 
  visibleImages:any[] = [];

  constructor(private ImageService: ImageService) {
    this.visibleImages = this.ImageService.getImages();
   }

  ngOnChanges(){
    this.visibleImages = this.ImageService.getImages();
  }

}
