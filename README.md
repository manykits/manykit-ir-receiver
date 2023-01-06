# ManyKit IR Receiver

## ManyKit Board

The ManyKit connects to the BBC micro:bit to provide easy connections to a wide variety of sensors, actuators and other components.

http://manykit.com/

# Documentation

## manykit.connectIrReceiver

Connects to the IR receiver module at the specified pin and configures the IR protocol.

```sig
manykit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
```

### Parameters

- `pin` - digital pin with an attached IR receiver
- `protocol` - the IR protocol to be detected, for example IrProtocol.Keyestudio or IrProtocol.NEC

## manykit.onIrButton

Do something when a specific button is pressed or released on the remote control.

```sig
manykit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, () => {})
```

### Parameters

- `button` - the button to be checked
- `action`- the trigger action
- `handler` - body code to run when the event is raised

## manykit.irButton

Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.

```sig
manykit.irButton()
```

## manykit.onIrDatagram

Do something when a specific button is pressed or released on the remote control.

```sig
manykit.onIrDatagram(() => {})
```

### Parameters

- `handler` - body code to run when the event is raised

## manykit.irDatagram

Returns the IR datagram as 32-bit hexadecimal string. The last received datagram is returned or "0x00000000" if no data has been received yet.

```sig
manykit.irDatagram()
```

## manykit.wasIrDataReceived

Returns true if any IR data was received since the last call of this function. False otherwise.

```sig
manykit.wasIrDataReceived();
```

## manykit.irButtonCode

Returns the command code of a specific IR button.

```sig
manykit.irButtonCode(IrButton.Number_9)
```

### Parameters

- `button` - the button

## MakeCode Example

```blocks
manykit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)

manykit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})

manykit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})

basic.forever(function () {
    if (manykit.wasAnyIrButtonPressed()) {
        basic.showNumber(manykit.irButton())
    }
})

```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.
