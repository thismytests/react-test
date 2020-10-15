export const updateUrlId = (props: { history: Array<any> }, value: any) => {
  props.history.push(value || '/artists/beatles');
};
