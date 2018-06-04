export const dummyFunction = () => { };
export const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));
/**
 * valueがnull, undefined以外の場合、valueでobj[key]を更新する
 * コンストラクタ内でオプション引数に対して利用するヘルパー関数
 * 副作用あり
 * @param obj 
 * @param key 
 * @param value 
 */
export const setIfDef = <T, K extends keyof T>(obj: T, key: K, value?: T[K]) => {
  if (value != null) {
    obj[key] = value
  }
  return obj;
};
