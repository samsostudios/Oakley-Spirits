export const loadComponent = (
  selector: string,
  importModule: () => Promise<{ default: () => void }>
) => {
  console.log('LOAD', selector);
  const element = document.querySelector(selector);
  if (element) {
    importModule().then((module) => {
      module.default();
    });
  }
};
export default loadComponent;
