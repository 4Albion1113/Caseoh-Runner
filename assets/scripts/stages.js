function stage1() {
    foodAction("cookie", 0);
    setTimeout(() => {
        monitorWhereIsCaseoh(0);
        document.addEventListener('food_was_touched_0', () => {
            whenTouched('cookie')
        })
    }, 5)

    setTimeout(() => {
        foodAction("chicken", 1);
        setTimeout(() => {
            monitorWhereIsCaseoh(1);
            document.addEventListener('food_was_touched_1', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 1500);

    setTimeout(() => {
        foodAction("cake", 2);
        setTimeout(() => {
            monitorWhereIsCaseoh(2);
            document.addEventListener('food_was_touched_2', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 3000);

    setTimeout(() => {
        foodAction("cookie", 3);
        setTimeout(() => {
            monitorWhereIsCaseoh(3);
            document.addEventListener('food_was_touched_3', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 3200);
}

function foodAction(which_food, which_one) {
    appearFood(which_food, which_one);
    startMoving(which_food, which_one);
}
function appearFood(which_food, which_one) {
    const mainfood = document.querySelector('.food_main');
    const newElement = document.createElement('div');

    newElement.classList.add('food')
    newElement.classList.add('food-' + which_one)
    newElement.innerHTML = mainfood.innerHTML
    newElement.dataset.index = which_one

    document.body.appendChild(newElement)
    const elementToShow = document.querySelector('.food-' + which_one + ' .' + which_food);
    elementToShow.classList.add('active');
}
function startMoving(which_food, which_one) {
    const food = document.querySelector('.food-' + which_one);
    let left = food.offsetLeft;
    setTimeout(() => {
        food.style.left = left - 5;
        left = food.offsetLeft;
        if (left > 0) {
            startMoving(which_food, which_one)
        }
    })
}
function whenTouched(which_food) {
    if (which_food == 'cookie') {
        score += 50;
    }
    else if (which_food == 'chicken') {
        score += 75
    }
    else if (which_food == 'cake') {
        score += 100
    }
    document.querySelector('.score').innerText = score;
    document.querySelector('.food').left = '100vw'

}


function monitorWhereIsCaseoh(which_one) {
    const casewho = document.querySelector('.casewho')
    const rect = casewho.getBoundingClientRect();
    const top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right;

    const food = document.querySelector('.food-' + which_one).getBoundingClientRect();
    const top_food = food.top,
        bottom_food = food.bottom,
        left_food = food.left,
        right_food = food.right;

    const top_food_is_on_casewho = top <= top_food && top_food <= bottom
    const bottom_food_is_on_casewho = top <= bottom_food && bottom_food <= bottom
    const left_food_is_on_casewho = left <= left_food && left_food <= right
    const right_food_is_on_casewho = left <= right_food && right_food <= right

    if ((top_food_is_on_casewho || bottom_food_is_on_casewho) &&
        (left_food_is_on_casewho || right_food_is_on_casewho)) {
        document.dispatchEvent(new Event('food_was_touched_' + which_one))
    }

    const gym = document.querySelector('.gym-equipment').getBoundingClientRect();
    const top_gym = gym.top,
        bottom_gym = gym.bottom,
        left_gym = gym.left,
        right_gym = gym.right;


    setTimeout(() => {
        monitorWhereIsCaseoh(which_one);
    }, 10)


}
































































































































































































