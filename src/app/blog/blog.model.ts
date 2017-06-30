export class BlogPost {
  title: string;
  date: Date;
  imgPath: string;
  text: string;

  constructor( title: string,
               date: Date,
               imgPath: string,
               text: string ) {
    this.title = title;
    this.date = date;
    this.imgPath = imgPath;
    this.text = text;
  }
}
