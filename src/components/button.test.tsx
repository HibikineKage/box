import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as icon from './icon.png';
import * as hibikine from './hibikine.png';
import {Stage} from 'react-pixi-fiber';
import Button from './button';
const textures = [icon, hibikine].map(i => PIXI.Texture.fromImage(i));
test('button test', () => {
    const tree = renderer.create(
        <Stage
            width={800}
            height={800}
            options={{
            backgroundColor: 0xffffff
        }}>
            <Button
                width={100}
                height={100}
                textures={{
                default: textures[0],
                hover: textures[1],
                press: textures[1]
            }}
                onClick={() => {
                console.log('clicked!');
            }}/>
        </Stage>
    );
    expect(tree.toJSON()).toMatchSnapshot();
})