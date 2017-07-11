export interface BlogPost {
  title: string;
  author: string;
  create_date: string;
  edit_date: string;
  tag_list: string[];
  content: string;
  slug: string;
}

export interface BlogSummary extends BlogPost {
  imgPath: string;
}
