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

    setTimeout(() => {
        foodAction("chicken", 4);
        setTimeout(() => {
            monitorWhereIsCaseoh(4);
            document.addEventListener('food_was_touched_4', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 4600);

    setTimeout(() => {
        foodAction("chicken", 5);
        setTimeout(() => {
            monitorWhereIsCaseoh(5);
            document.addEventListener('food_was_touched_5', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 6000);

    setTimeout(() => {
        foodAction("cookie", 6);
        setTimeout(() => {
            monitorWhereIsCaseoh(6);
            document.addEventListener('food_was_touched_6', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 7500);

    setTimeout(() => {
        foodAction("cookie", 7);
        setTimeout(() => {
            monitorWhereIsCaseoh(7);
            document.addEventListener('food_was_touched_7', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 8000);

    setTimeout(() => {
        foodAction("chicken", 8);
        setTimeout(() => {
            monitorWhereIsCaseoh(8);
            document.addEventListener('food_was_touched_8', () => {
                whenTouched('chicken')
            })
        }, 5)
    }, 9500);

    setTimeout(() => {
        foodAction("cake", 9);
        setTimeout(() => {
            monitorWhereIsCaseoh(9);
            document.addEventListener('food_was_touched_9', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 11000);

    setTimeout(() => {
        foodAction("chicken", 10);
        setTimeout(() => {
            monitorWhereIsCaseoh(10);
            document.addEventListener('food_was_touched_10', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 13000);

    setTimeout(() => {
        foodAction("cake", 11);
        setTimeout(() => {
            monitorWhereIsCaseoh(11);
            document.addEventListener('food_was_touched_11', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 13500);

    setTimeout(() => {
        foodAction("cookie", 12);
        setTimeout(() => {
            monitorWhereIsCaseoh(12);
            document.addEventListener('food_was_touched_12', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 15000);

    setTimeout(() => {
        foodAction("chicken", 13);
        setTimeout(() => {
            monitorWhereIsCaseoh(13);
            document.addEventListener('food_was_touched_13', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 16000);

    setTimeout(() => {
        foodAction("chicken", 14);
        setTimeout(() => {
            monitorWhereIsCaseoh(14);
            document.addEventListener('food_was_touched_14', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 17000);

    setTimeout(() => {
        foodAction("cookie", 15);
        setTimeout(() => {
            monitorWhereIsCaseoh(15);
            document.addEventListener('food_was_touched_15', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 18000);

    setTimeout(() => {
        foodAction("cookie", 16);
        setTimeout(() => {
            monitorWhereIsCaseoh(16);
            document.addEventListener('food_was_touched_16', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 18700);

    setTimeout(() => {
        foodAction("chicken", 17);
        setTimeout(() => {
            monitorWhereIsCaseoh(17);
            document.addEventListener('food_was_touched_17', () => {
                whenTouched('chicken')
            })
        }, 5)
    }, 19500);

    setTimeout(() => {
        foodAction("cake", 18);
        setTimeout(() => {
            monitorWhereIsCaseoh(18);
            document.addEventListener('food_was_touched_18', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 21000);
    
    setTimeout(() => {
        foodAction("cake", 19);
        setTimeout(() => {
            monitorWhereIsCaseoh(19);
            document.addEventListener('food_was_touched_19', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 22500);

    setTimeout(() => {
        foodAction("chicken", 20);
        setTimeout(() => {
            monitorWhereIsCaseoh(20);
            document.addEventListener('food_was_touched_20', () => {
                whenTouched('chicken')
            })
        }, 5)
    }, 24000);

    setTimeout(() => {
        foodAction("chicken", 21);
        setTimeout(() => {
            monitorWhereIsCaseoh(21);
            document.addEventListener('food_was_touched_21', () => {
                whenTouched('chicken')
            });
        }, 5)
    }, 25000);

    setTimeout(() => {
        foodAction("cake", 22);
        setTimeout(() => {
            monitorWhereIsCaseoh(22);
            document.addEventListener('food_was_touched_22', () => {
                whenTouched('cake')
            });
        }, 5)
    }, 26500);

    setTimeout(() => {
        foodAction("cookie", 23);
        setTimeout(() => {
            monitorWhereIsCaseoh(23);
            document.addEventListener('food_was_touched_23', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 28000);

    setTimeout(() => {
        foodAction("cookie", 24);
        setTimeout(() => {
            monitorWhereIsCaseoh(24);
            document.addEventListener('food_was_touched_24', () => {
                whenTouched('cookie')
            })
        }, 5)
    }, 295000);
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
































































































































































































