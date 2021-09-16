export const checkSelectedItems = (list, destination) => {
  const selectedList = list.filter((item) => item.selected);
  selectedList.forEach((element) => {
    destination.push(element.value);
  });
};
