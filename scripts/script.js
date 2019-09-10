function createGrid(size = 16){
    const area = size * size;
    const container = document.querySelector('div.container');
    let innerDivs = "";
    
    //create divs to fill in container
    for(i = 1; i <= area; i++){
        innerDivs += "<div></div>";
    }

    container.innerHTML = innerDivs;

    const grid = document.querySelectorAll('div.container > div');
    grid.forEach((div) => {
        div.style.width = `${100 / size}%`;
        div.style.height = `${100 / size}%`;
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = "#000000";
        })
    });
}

createGrid();

const standard = document.querySelector('button.standard');
standard.addEventListener('click', () => {
    const grid = document.querySelectorAll('div.container > div');
    grid.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = '#000000';
        })
    });
});

const randomMulti = document.querySelector('button.randomMulti');
randomMulti.addEventListener('click', () => {
    const grid = document.querySelectorAll('div.container > div');
    grid.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = randomColor();
        })
    });
});

const randomRainbow = document.querySelector('button.randomRainbow');
randomRainbow.addEventListener('click', () => {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    const grid = document.querySelectorAll('div.container > div');
    grid.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = colors[Math.floor(Math.random() * 7)];
        })
    });
});



const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter desired grid size. (e.g. 20 will give a 20 x 20 grid)")
    createGrid(newSize);
});