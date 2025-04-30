type WebflowEnv = 'design' | 'preview' | 'editor' | 'published';

export function getWebflowEnv(): WebflowEnv {
  const isEditor =
    document.documentElement.hasAttribute('w-editor') ||
    typeof (window as any).WebflowEditor !== 'undefined';

  const isPreview =
    !isEditor && window.top !== window.self && document.referrer.includes('webflow.io');

  console.log('>>>', isEditor, isPreview);
  console.log('E>>', document.documentElement);
  console.log('P>>', window.location.href);

  return 'published';
}
