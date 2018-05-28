import * as React from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';
import * as icon from './icon.png';
import * as hibikine from './hibikine.png';
import Button from '../components/button';
import Router from '../router/index';

const textures = [icon, hibikine].map(i => PIXI.Texture.fromImage(i));
console.log(icon);
const App = () => <Router />;
export default App;
