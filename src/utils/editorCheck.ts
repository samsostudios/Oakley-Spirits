type WebflowEnv = 'design' | 'preview' | 'editor';

export function getWebflowEnv(): WebflowEnv | 'published' {
  const env = (window as any).Webflow?.env?.();
  if (env === 'design' || env === 'preview' || env === 'editor') {
    return env;
  }
  return 'published';
}
