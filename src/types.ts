export interface IJoke {
  id: number;
  type: string;
}

export interface ISingleJoke extends IJoke {
  joke: string;
}

export interface ITwoPartJoke extends IJoke {
  setup: string;
  delivery: string;
}
