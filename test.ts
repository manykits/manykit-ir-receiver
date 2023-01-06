/**
 * IR tests
 */

manykit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
manykit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, () => {});
manykit.onIrButton(IrButton.Up, IrButtonAction.Released, () => {});
manykit.onIrDatagram(() => {});
const received: boolean = manykit.wasIrDataReceived();
const button: number = manykit.irButton();
const datagram: string = manykit.irDatagram();
const buttonCode: number = manykit.irButtonCode(IrButton.Number_9);
