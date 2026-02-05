async function toggleDescription() {
    const descriptions = document.querySelectorAll('.subtexto');
    const stacks = document.querySelectorAll('.stack');
    
    if(stacks[0].classList.contains('active')) {
        clear(descriptions, stacks);
        await esperar(300);
    }

    if(descriptions[0].classList.contains('active')) {
        clear(descriptions, stacks);
        await esperar(300);
    }

    for (const description of descriptions) {
        if (description.classList.contains('active')) {
            break;
        }

        description.classList.add('active');
        await esperar(300);
    }
    
}

async function toggleStack() {
    const descriptions = document.querySelectorAll('.subtexto');
    const stacks = document.querySelectorAll('.stack');
    
    if(descriptions[0].classList.contains('active')) {
        clear(descriptions, stacks);
        await esperar(300);
    }

    if(stacks[0].classList.contains('active')) {
        clear(descriptions, stacks);
        await esperar(300);
    }

    for (const stack of stacks) {
        if (descriptions[0].classList.contains('active')) {
            break;
        }

        stack.classList.add('active');
        await esperar(300);
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clear(descriptions, stacks) {
    descriptions.forEach(d => d.classList.remove('active'));
    stacks.forEach(s => s.classList.remove('active'));
}