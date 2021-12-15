// 首字母大写
export const capitalize = (str: string) => {
  return str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()
}
