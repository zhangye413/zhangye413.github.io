document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  
  // 创建太阳图标
  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM21 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25A.75.75 0 0121 12zM5.47 17.78a.75.75 0 01-.53-1.28l1.59-1.59a.75.75 0 011.06 1.06l-1.59 1.59a.75.75 0 01-.53.22zM18.53 17.78a.75.75 0 01-.53-.22l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 01-.53 1.28zM5.47 6.22a.75.75 0 01.53-1.28l1.59 1.59a.75.75 0 11-1.06 1.06L5.47 6.22zM18.53 6.22l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 111.06 1.06z"/>
    </svg>
  `;
  
  // 创建月亮图标
  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
    </svg>
  `;
  
  // 从 localStorage 获取主题设置
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = sunIcon;
  } else {
    themeToggle.innerHTML = moonIcon;
  }
  
  // 切换主题
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = sunIcon;
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = moonIcon;
    }
  });
  
  // 主题切换按钮已存在于HTML中，无需重新插入
});