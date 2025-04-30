type WebflowEnv = 'design' | 'preview' | 'editor' | 'published';

export function getWebflowEnv(): WebflowEnv {
  const isEditor =
    document.documentElement.hasAttribute('w-editor') ||
    typeof (window as any).WebflowEditor !== 'undefined';

  const isPreview = window.location.href.includes('workflow=sitePreview');

  console.log('>>>', isEditor, isPreview);
  console.log('E>>', document.documentElement);
  console.log('P>>', window.location.href);

  return 'published';
}
