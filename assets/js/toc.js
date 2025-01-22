document.addEventListener('DOMContentLoaded', function() {
  const tocContainer = document.getElementById('toc');
  if (!tocContainer) return;
  
  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';
  
  const headings = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3');
  if (headings.length === 0) return;
  
  headings.forEach((heading, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
    
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    a.className = `toc-link toc-link-${heading.tagName.toLowerCase()}`;
    
    li.appendChild(a);
    tocList.appendChild(li);
  });
  
  tocContainer.appendChild(tocList);
  
  const tocLinks = tocList.getElementsByTagName('a');
  let headingPositions = [];
  
  function updateHeadingPositions() {
    headingPositions = Array.from(headings).map(heading => ({
      id: heading.id,
      top: heading.offsetTop - 100 // 考虑固定导航栏的高度
    }));
  }
  
  updateHeadingPositions();
  window.addEventListener('resize', updateHeadingPositions);
  
  function updateActiveLink() {
    const scrollPosition = window.pageYOffset;
    
    let activeHeading = null;
    for (let i = headingPositions.length - 1; i >= 0; i--) {
      if (scrollPosition >= headingPositions[i].top) {
        activeHeading = headingPositions[i];
        break;
      }
    }
    
    Array.from(tocLinks).forEach(link => {
      const li = link.parentElement;
      li.classList.remove('active');
      if (activeHeading && link.getAttribute('href') === `#${activeHeading.id}`) {
        li.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
  
  tocList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});