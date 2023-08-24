export const asyForEach = async (array: any[], callback: any) => {
  if (!Array.isArray(array)) {
    throw new Error('Expected an Array');
  }
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], array);
  }
};
