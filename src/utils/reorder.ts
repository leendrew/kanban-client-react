interface ReorderItem {
  index: number;
}

export function reorder<T extends ReorderItem[]>(list: T) {
  list.forEach((item, index) => {
    item.index = index;
  });
}
