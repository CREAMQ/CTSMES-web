
export interface Result<T> {
    err_code?: Number;
    message?: string;
    data?:T;
    type?:Number;
}
