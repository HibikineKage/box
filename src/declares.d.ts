import { ReactType } from 'react';
import { SpriteProperties } from 'react-pixi-fiber';

declare module 'react-pixi-fiber' {
  export interface SpriteProperties {
    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed and released on the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    click?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed on the display. object. DisplayObject's interactive property must be set to true to fire event.
     */
    mousedown?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device (usually a mouse) is moved while over the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    mousemove?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device (usually a mouse) is moved off the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    mouseout?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device (usually a mouse) is moved onto the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    mouseover?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device button (usually a mouse left-button) is released over the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    mouseup?: (event: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device button (usually a mouse left-button) is released outside the display object that initially registered a mousedown. DisplayObject's interactive property must be set to true to fire event.
     */
    mouseupoutside?: (evenut: PIXI.interaction.InteractionEvent) => any;
    /**
     * Fired when a pointer device button is pressed on the display object. DisplayObject's interactive property must be set to true to fire event.
     */
    pointerdown?: (event: PIXI.interaction.InteractionEvent) => any;
  }
  /**
   * Custom component properties.
   */
  export interface Behavior<T, U extends PIXI.DisplayObject> {
    /**
     * Use this to create an instance of [PIXI.DisplayObject].
     */
    customDisplayObject: (props: T) => U;
    /**
     * Use this to apply newProps to your Component in a custom way.
     */
    customApplyProps?: (displayObject: U, oldProps: T, newProps: T) => any;
    /**
     * Use this to do something after displayObject is attached, which happens after componentDidMount lifecycle method.
     */
    customDidAttach?: (displayObject: U) => any;
    /**
     * Use this to do something (usually cleanup) before detaching, which happens before componentWillUnmount lifecycle method.
     */
    customWillDetach?: (displayObject: U) => any;
  }
  export interface StageProperties extends Component<PIXI.Container> {
    options?: PIXI.ApplicationOptions;
  }
  /**
   * Create a custom component.
   */
  export function CustomPIXIComponent<T, U extends PIXI.DisplayObject>(
    behavior: Behavior<T, U>,
    /**
     * The name of this custom component like 'Rectangle'.
     */
    type: string
  ): ReactType;
  export interface StageContext {
    app: PIXI.Application;
  }
}
