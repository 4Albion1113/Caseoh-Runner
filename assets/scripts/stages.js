function stage1() {
    monitorWhereIsCaseoh();
    foodAction("cookie");
    document.addEventListener('food_was_touched', () => {
        whenTouched('cookie')
    })
}

function foodAction(which_food) {
    appearFood(which_food);
    startMoving(which_food);
}
function appearFood(which_food) {
    showFoodAndGym(which_food);
}
function startMoving(which_food) {
    const food = document.querySelector('.food');
    let left = food.offsetLeft;
    setTimeout(() => {
        food.style.left = left - 5;
        left = food.offsetLeft;
        if (left > 0) {
            startMoving()
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

function monitorWhereIsCaseoh() {
    const casewho = document.querySelector('.casewho')
    const rect = casewho.getBoundingClientRect();
    const top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right;

    const food = document.querySelector('.food').getBoundingClientRect();
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
        document.dispatchEvent(new Event('food_was_touched'))
    }

    const gym = document.querySelector('.gym-equipment').getBoundingClientRect();
    const top_gym = gym.top,
        bottom_gym = gym.bottom,
        left_gym = gym.left,
        right_gym = gym.right;


    setTimeout(() => {
        monitorWhereIsCaseoh();
    }, 10)


}
