export type PostDate = {
  time: Date;
  string: string;
};

export type Post = {
  title: string;
  href: string;
  date: PostDate;
  excerpt: string | undefined;
  description: string;
  banner: string;
  tags: string[];
};
