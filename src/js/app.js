export default function showDescription({ special }) {
  const result = [];

  special.forEach((element) => {
    const {
      description = 'Описание недоступно', ...rest
    } = element;
    result.push({
      ...rest, description,
    });
  });
  return result;
}
