import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Stage } from 'react-pixi-fiber';
import Button from './button';

test('button test', () => {
  const tree = renderer.create(
    <Stage
      width={800}
      height={800}
      options={{
        backgroundColor: 0xffffff,
      }}
    >
      <Button
        width={100}
        height={100}
        textures={{
          default: new PIXI.Texture(new PIXI.BaseTexture()),
          hover: new PIXI.Texture(new PIXI.BaseTexture()),
          press: new PIXI.Texture(new PIXI.BaseTexture()),
        }}
        onClick={() => {}}
      />
    </Stage>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
