// *** VARIABLES ***

// Array of brand objects with name and url properties
const brands = [
    {name: "Yuengling", url: "https://quenchagency.com/work/yuengling/"},
    {name: "Turkey Hill", url: "https://quenchagency.com/work/turkey-hill/"},
    {name: "StarKist", url: "https://quenchagency.com/work/starkist/"},
    {name: "Mrs. T's", url: "https://quenchagency.com/work/mrs-ts/"},
    {name: "Ortega", url: "https://quenchagency.com/work/ortega/"},
    {name: "Mrs Dash", url: "https://quenchagency.com/work/mrs-dash/"},
    {name: "Hoss's Family", url: "https://quenchagency.com/work/hosss/"},
    {name: "Big Hill Ciderworks", url: "https://quenchagency.com/work/big-hill-ciderworks/"},
    {name: "Cream of Wheat", url: "https://quenchagency.com/work/cream-of-wheat/"},
    {name: "Foxy Organic", url: "https://quenchagency.com/work/foxy-organic/"},
    {name: "Ahold", url: "https://quenchagency.com/work/ahold/"},
    {name: "Hershey", url: "https://quenchagency.com/work/hershey/"},
    {name: "Jarlsberg", url: "https://quenchagency.com/work/jarlsberg/"},
    {name: "Herr's", url: "https://quenchagency.com/work/herrs/"},
    {name: "Sun Maid", url: "https://quenchagency.com/work/sun-maid/"},
    {name: "House-Autry", url: "https://quenchagency.com/work/house-autry/"}
]

let nodes = document.querySelectorAll('p,span,li')

// *** FUNCTIONS ***

function generateLinkElement(brandObject){
    return `<a href="${brandObject.url}" target="blank">${brandObject.name}</a>`
}

// *** SCRIPT ***

nodes.forEach(node => {
    if (node.innerHTML.includes("Yuengling")) {
        node.innerHTML = node.innerHTML.replaceAll("Yuengling", `${generateLinkElement(brands[0])}`);
    }
});

console.log(nodes);