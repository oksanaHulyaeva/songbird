export interface IData {
  category: string
  id: string
  content: Array<string>
}

export interface IAction<T = any> {
  type: string;
  payload?: T;
}

export interface IState {
  level: { level: number; }
  score: { score: number; }
}