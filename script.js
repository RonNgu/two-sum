document.title = "Two Sum Calculator";

const elmInput = document.querySelector("#elem");
const goalInput = document.querySelector("#goal");
const remInput = document.querySelector("#rem");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#removeBtn");
const targetBtn = document.querySelector("#targetBtn");
const arr = document.querySelector("#display");
const output = document.querySelector("#output");

let array = [];
addBtn.addEventListener("click", () => {
    let input = Number(elmInput.value);
    array.push(input);
    arr.textContent = "[ " + array + " ]";
    output.textContent = "Two Sum: [" + twoSum(array, Number(goalInput.value)) + "]";
});

removeBtn.addEventListener("click", () => {
    let input = array.indexOf(Number(remInput.value));
    if (input !== -1) {
        array.splice(input, 1);
    }

    arr.textContent = "[ " + array + " ]";
    output.textContent = "Two Sum: [" + twoSum(array, Number(goalInput.value)) + "]";
});

targetBtn.addEventListener("click", () => {
    let input = Number(goalInput.value);
    output.textContent = "Two Sum: [" + twoSum(array, input) + "]";
});

var twoSum = function(nums, target) {
    let answer = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                answer.push(i);
                answer.push(j);
            }
        }
    }
    return answer;
};