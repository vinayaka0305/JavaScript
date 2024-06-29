const month = 3;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;

    default:
        console.log("default match");
        break;
}

// if break not added it will execute all condition after the break without checking except default
// break will break the control flow