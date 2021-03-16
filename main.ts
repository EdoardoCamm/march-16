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
// 1  Num=Num(old) +1= 0+1=1
// 2  Num= Num(old)+1= 1+1=2
// 3  Num= Num(old)+1= 2+2=4
// 4  Num= Num(old)+1= 3+4=7
// 5  Num= Num(old)+1= 4+7=11
// 6  Num= Num(old)+1= 5+11=16
input.onButtonPressed(Button.AB, function () {
    led.toggle(0, 0)
    basic.pause(100)
    led.toggle(0, 1)
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 0)
    led.toggle(1, 1)
    led.toggle(0, 2)
    basic.pause(100)
    led.toggle(3, 0)
    led.toggle(2, 1)
    led.toggle(1, 2)
    led.toggle(0, 3)
    basic.pause(100)
    led.toggle(4, 0)
    led.toggle(3, 1)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(0, 4)
    basic.pause(100)
    led.toggle(4, 1)
    led.toggle(3, 2)
    led.toggle(2, 3)
    led.toggle(1, 4)
    basic.pause(100)
    led.toggle(4, 2)
    led.toggle(3, 3)
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(4, 3)
    led.toggle(3, 4)
    basic.pause(100)
    led.toggle(4, 4)
})
// 1  Num=Num(old) +1= 0+1=1
// 2  Num= Num(old)+1= 1+1=2
// 3  Num= Num(old)+1= 2+2=4
// 4  Num= Num(old)+1= 3+4=7
// 5  Num= Num(old)+1= 4+7=11
// 6  Num= Num(old)+1= 5+11=16
input.onButtonPressed(Button.B, function () {
    while (Num <= 4) {
        basic.showNumber(Num)
        Num += 1
    }
    basic.pause(100)
})
let Num = 0
let Spi = 0
Spi = 0
