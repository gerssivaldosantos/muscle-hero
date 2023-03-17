
/* TODO: Achar uma forma de passar um tipo genérico para a função, de modo que
*  seja possível determinar o retorno desta função apartir da sua invocação
* (Para remover esse "ANY") */
export const getRandomFromEnum = <E>(enumData: Record<string, E>): E => {
  const randomIndex: number = Math.floor(Math.random() * Object.keys(enumData).length)
  const key: string = Object.keys(enumData)[randomIndex]
  return enumData[key]
}
