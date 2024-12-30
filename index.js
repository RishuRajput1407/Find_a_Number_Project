let heading = document.createElement("h2");
    heading.textContent = "Search for a Number";
    document.body.appendChild(heading);


    let input = document.createElement("input");
    input.type = "number";
    input.id = "searchInput";
    input.placeholder = "Enter a number";
    document.body.appendChild(input);

 
    let button = document.createElement("button");
    button.textContent = "Search";
    button.onclick = searchNum;
    document.body.appendChild(button);

    let result = document.createElement("p");
    result.id = "result";
    document.body.appendChild(result);

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function searchNum() {
        let num = document.getElementById("searchInput").value;
        let resultElement = document.getElementById("result");

        if (num === "") {
            resultElement.textContent = "Please enter a number.";
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === parseInt(num)) {
                resultElement.textContent = `Number found: ${arr[i]}`;
                return;
            }
        }

        resultElement.textContent = "Number not found";
    }