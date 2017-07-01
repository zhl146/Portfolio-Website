export class BlogPost {
  title: string;
  date: string;
  content: PostElement[];
}

export class PostElement {
  type: 'section-header' | 'image' | 'paragraph' | 'codeSnippet' | 'externalEmbed';
  content: string;
}
