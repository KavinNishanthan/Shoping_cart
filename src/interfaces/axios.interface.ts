export interface IAxiosRequest {
  path: string;
  payload?: object;
  config?: object;
  success?: (data: any) => any;
  error?: (error: any) => any;
  final?: () => any;
}
