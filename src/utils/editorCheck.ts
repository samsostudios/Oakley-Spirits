type WebflowEnv = 'design' | 'preview' | 'editor' | 'published';

export function getWebflowEnv(): WebflowEnv {
  const wf = (window as any).Webflow;
  const isEditor =
    document.documentElement.hasAttribute('w-editor') ||
    typeof (window as any).WebflowEditor !== 'undefined' ||
    wf?.env?.('editor') === true;

  const isPreview = wf?.env?.('preview') === true;

  console.log('>>>', isEditor, isPreview);
  console.log('E>>', document.documentElement);
  console.log('P>>', wf?.env?.('preview'));

  return isEditor ? 'editor' : isPreview ? 'preview' : 'published';
}
