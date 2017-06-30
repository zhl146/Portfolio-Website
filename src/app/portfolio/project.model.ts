export class Project {
  name: string;
  description: string;
  imgPath: string;
  gitHubLink: string;
  demoLink: string;
  featureList: Feature[];

  constructor( name: string,
               description: string,
               imgPath: string,
               gitHubLink: string,
               demoLink: string,
               featureList: Feature[] ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.gitHubLink = gitHubLink;
    this.demoLink = demoLink;
    this.featureList = featureList;
  }
}

export class Feature {
  name: string;
  description: string;
  imgPath: string;

  constructor( name: string,
               description: string,
               imgPath: string ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
  }
}
