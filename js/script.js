/***********************
Variables
***********************/

const buttons = document.querySelectorAll(".button");
const contentContainer = document.querySelector(".items-to-filter");
const contentItems = document.querySelectorAll(".content-item");

/**********************
Class
***********************/

function FilterTypeProperties(btn_filterType, itemName) {
    this.btn_filterType = btn_filterType,
    this.itemName = itemName
};

const filterType = {
    otter: new FilterTypeProperties("btn_otter", "otter"),
    ocean: new FilterTypeProperties("btn_ocean", "ocean"),
    plants: new FilterTypeProperties("btn_plants", "plants"),
    green: new FilterTypeProperties("btn_green", "green")
};

const filterTypeArray = Object.values(filterType);

console.log(filterTypeArray);



buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        
        const btnName = e.target.classList[1];

        if (btnName === "btn_all") {
                
            contentItems.forEach(element => {
                element.style.display = "block";
            });
        } else {
            filterTypeArray.forEach(properties => {
                if (btnName === properties.btn_filterType) {    
                    const test = document.querySelectorAll("." + properties.itemName);

                    contentItems.forEach(element => {
                        element.style.display = "none";
                    });

                    test.forEach(element => {
                        element.style.display = "block"
                    });
                };
            });
        }
    });
});