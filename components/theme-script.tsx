export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const saved = localStorage.getItem('theme') || 'system';
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = saved === 'dark' || (saved === 'system' && prefersDark);
              document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
