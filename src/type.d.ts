interface IBook {
  _id: string;
  key: string;
  author: string;
  title: string;
  bbc: boolean;
  emp: boolean;
  gan: boolean;
  ama: boolean;
  pozy: boolean;
  link: string;
  page: number;
  readed: boolean;
  available: boolean;
}

type ContextType = {
  books: IBook[] | null | undefined;
  isLogged: boolean;
};
