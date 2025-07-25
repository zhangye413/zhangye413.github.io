// 检查系统主题偏好
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 获取用户之前的主题选择
const currentTheme = localStorage.getItem('theme');
const themeToggle = document.querySelector('.theme-toggle');
const moonPath = document.querySelector('.moon');
const sunPath = document.querySelector('.sun');

// 初始化主题
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  moonPath.style.display = 'none';
  sunPath.style.display = 'block';
} else if (currentTheme === 'light') {
  document.body.classList.remove('dark-theme');
  moonPath.style.display = 'block';
  sunPath.style.display = 'none';
} else {
  // 如果用户之前没有选择过主题，则跟随系统主题
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme');
    moonPath.style.display = 'none';
    sunPath.style.display = 'block';
  }
}

// 切换主题的函数
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // 切换图标显示
  if (isDark) {
    moonPath.style.display = 'none';
    sunPath.style.display = 'block';
  } else {
    moonPath.style.display = 'block';
    sunPath.style.display = 'none';
  }
}

// 添加点击事件监听器
themeToggle.addEventListener('click', toggleTheme);

// 监听系统主题变化
prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.body.classList.add('dark-theme');
      moonPath.style.display = 'none';
      sunPath.style.display = 'block';
    } else {
      document.body.classList.remove('dark-theme');
      moonPath.style.display = 'block';
      sunPath.style.display = 'none';
    }
  }
}); 