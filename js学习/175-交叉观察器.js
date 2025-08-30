



// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(`元素${entry.target.id}进入视野`);
//     } else {
//       console.log(`元素${entry.target.id}离开视野`);
//     }
//   });
// });

// const target1 = document.getElementById('target1');
// const target2 = document.getElementById('target2');


// observer.observe(target1);
// observer.observe(target2);

const options = {
    rootMargin: '0px',
    threshold: 0.1 // 10% 可见时触发
}


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log(`元素${entry.target.id || '无ID'} ${entry.isIntersecting ? '进入' : '离开'}视野`);
            });
        },
        {
            root: null, // 使用视口
            rootMargin: '0px',
            threshold: 0.1 // 10% 可见时触发
        }
    );

    const target1 = document.getElementById('target1');
    const target2 = document.getElementById('target2');

    if (target1 && target2) {
        observer.observe(target1); 
        observer.observe(target2);
    } else {
        console.error('目标元素未找到：', { target1, target2 });
    }

    const target3 = document.getElementById('target3');

    target3.addEventListener('mouseover', (event) => {
        const target = event.target;
        console.log(target.innerText, '鼠标移入'); 
        
    });
});
