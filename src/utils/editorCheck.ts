import type { Webflow } from '@finsweet/ts-utils';

export const editorCheck = () => {
  console.log('>>>>>>>>>>', window.Webflow);
  let isEditor;
  const flow = window.Webflow as Webflow;
  if (Webflow.env('editor') === undefined) {
    console.log('no editor', flow.env);
    isEditor = false;
  } else {
    // console.log('editor');
    isEditor = true;
    const body = document.querySelector('body') as HTMLElement;
    body.style.cursor = 'default';
  }

  return isEditor;
};
