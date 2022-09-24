export type PostDate = {
  time?: string;
  string?: string;
};

export type Post = {
  title?: string;
  href?: string;
  date?: PostDate;
  excerpt?: string;
  description?: string;
  banner?: string;
  tags?: string[];
};
