document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // 检查本地存储的主题设置
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    body.classList.add('dark-theme');
  }

  // 监听系统主题变化
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        body.classList.add('dark-theme');
      } else {
        body.classList.remove('dark-theme');
      }
    }
  });

  // 切换主题
  themeToggle?.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  });
});