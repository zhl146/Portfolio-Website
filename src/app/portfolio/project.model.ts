export class Project {
  name: string;
  description: string;
  imgPath: string;
  gitHubLink: string;
  demoLink: string;
  blogRoute: string;

  constructor( name: string,
               description: string,
               imgPath: string,
               gitHubLink: string,
               demoLink: string,
               blogRoute: string ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.gitHubLink = gitHubLink;
    this.demoLink = demoLink;
    this.blogRoute = blogRoute;
  }
}
