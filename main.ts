// 1 Index=0    Spi= 2 x index+Spi(old)= 2x0+0=0
// 2 index=1    Spi= 2 x index+Spi(old)= 2x1+0=2
// 3 Index=2   Spi= 2 x index+Spi(old)= 2x2+2=6
// 4 index=3   Spi= 2 x index+Spi(old)= 2x3+8=12
// 5 index=4   Spi= 2 x index+Spi(old)= 2x4+12=20
// 6 index=5   Spi= 2 x index+Spi(old)= 2x5+20=30
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        Spi += index * 2
    }
    basic.showNumber(Spi)
})
let Spi = 0
Spi = 0
basic.showNumber(Spi)
