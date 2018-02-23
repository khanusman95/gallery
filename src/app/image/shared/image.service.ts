import { Injectable } from '@angular/core';



@Injectable()
export class ImageService{

    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id:number){
        return IMAGES.slice(0).find(image => image.id==id)
    }
}


const IMAGES = [
    {"id": 1, "category":"movie", "caption": "Dark Knight", "url":"assets/img/img_14.jpg"},
    {"id": 2, "category":"movie", "caption": "view from a boat", "url":"assets/img/img_02.jpg"},
    {"id": 3, "category":"boats", "caption": "view from a boat", "url":"assets/img/img_03.jpg"},
    {"id": 4, "category":"boats", "caption": "view from a boat", "url":"assets/img/img_15.jpg"},
    {"id": 5, "category":"cat", "caption": "view from a boat", "url":"assets/img/img_05.jpg"},
    {"id": 6, "category":"web", "caption": "view from a boat", "url":"assets/img/img_18.jpg"},
    {"id": 7, "category":"web", "caption": "view from a boat", "url":"assets/img/img_07.jpg"},
    {"id": 8, "category":"batman", "caption": "view from a boat", "url":"assets/img/img_08.jpg"},
    {"id": 9, "category":"batman", "caption": "view from a boat", "url":"assets/img/img_09.jpg"},
    {"id": 10, "category":"brad-pitt", "caption": "view from a boat", "url":"assets/img/img_10.jpg"},
    {"id": 11, "category":"boats", "caption": "view from a boat", "url":"assets/img/img_11.jpg"},
    {"id": 12, "category":"boats", "caption": "view from a boat", "url":"assets/img/img_12.jpg"}
]