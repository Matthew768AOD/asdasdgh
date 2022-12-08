let number1 = 4
let bornin = control.millis() ;
// let makej2A = () => {
//     number1 -= 1
//     whaleysans.showNumber(number1)
// }
// let makej2B = () => {
//     number1 += 1
//     whaleysans.showNumber(number1)
// }

let previewStatePressed = input.buttonIsPressed(Button.B);
let makej =  function() {
    if (input.buttonIsPressed(Button.A)) {
        let actualStateA = input.buttonIsPressed(Button.A)
        
        {
            number1 -=1
            bornin = control.millis();
            previewStatePressed = true;
            
        }
    } else {
        if (previewStatePressed) {
            basic.showNumber(control.millis() - bornin)
            previewStatePressed = false;
        }
    }

    if (input.buttonIsPressed(Button.B)) {
        let actualStateA = input.buttonIsPressed(Button.B)
        {
            number1 += 1
            previewStatePressed = true;
        }
    } else {    
        if (previewStatePressed) {
            previewStatePressed = false;
    }

    basic.showNumber(number1)
}

//input.onButtonPressed(Button.A, makej2A);
//input.onButtonPressed(Button.B, makej2B);

while (true) {
    makej()
}}