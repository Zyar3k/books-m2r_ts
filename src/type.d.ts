interface IBook {
  _id: string;
  key: string;
  author: { name: string; lastName: string };
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
  listFilter: (e: any) => void;
  toggleLog: () => void;
  isLogged: boolean;
};
