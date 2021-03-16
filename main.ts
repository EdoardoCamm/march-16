// 1  Num=Num(old) +1= 0+1=1
// 2  Num= Num(old)+1= 1+1=2
// 3  Num= Num(old)+1= 2+2=4
// 4  Num= Num(old)+1= 3+4=7
// 5  Num= Num(old)+1= 4+7=11
// 6  Num= Num(old)+1= 5+11=16
input.onButtonPressed(Button.A, function () {
    while (Num <= 4) {
        basic.showNumber(Num)
        Num += 1
    }
    basic.pause(100)
})
// index=0 plot 0.0
// index=1 plot 1.1
// index=2 plot 2.2
// index=3 plot 3.3
// index=4 plot 4.4
input.onButtonPressed(Button.AB, function () {
    index = 0
    while (index <= 4) {
        led.plot(index, index)
        basic.pause(100)
        index += 1
    }
    index = 0
    // index value= 5
    while (index <= 4) {
        led.unplot(index, index)
        basic.pause(100)
        index += 1
    }
})
// 1 Index=0    Spi= 2 x index+Spi(old)= 2x0+0=0
// 2 index=1    Spi= 2 x index+Spi(old)= 2x1+0=2
// 3 Index=2   Spi= 2 x index+Spi(old)= 2x2+2=6
// 4 index=3   Spi= 2 x index+Spi(old)= 2x3+8=12
// 5 index=4   Spi= 2 x index+Spi(old)= 2x4+12=20
// 6 index=5   Spi= 2 x index+Spi(old)= 2x5+20=30
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 5; index++) {
        Spi += index * 2
    }
    basic.showNumber(Spi)
})
// plot (x,y)
// plot (0,0)
// plot (0,1)
// plot (0,2)
// plot (0,3)
// plot (0,4)
// plot (1,0)
// plot (1,1)
// plot (1,2)
// plot (1,3)
// plot (1,4)
// plot (2,0)
// plot (2,1)
// .....
input.onGesture(Gesture.Shake, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
let index = 0
let Num = 0
let Spi = 0
Spi = 0
