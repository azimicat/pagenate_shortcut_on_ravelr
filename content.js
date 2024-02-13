document.addEventListener('keyup', function (e) {
    if (e.key === '{' || e.key === '[') {
        let prevPage = document.querySelector('a.previous_page');
        console.log('previous_page')
        console.log(prevPage)
        if (prevPage) {
            prevPage.click();
            scroll_top()
        }
    }
    if (e.key === '}' || e.key === ']') {
        let nextPage = document.querySelector('a.next_page');
        console.log('next_page')
        console.log(nextPage)
        if (nextPage) {
            nextPage.click();
            scroll_top()
        }
    }
});


function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
