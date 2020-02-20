import React from 'react'
import ReactDom from 'react-dom'
import { Main } from './components/main'
import { MyComp } from './components/contents';

const container = document.createElement('DIV')
document.body.appendChild(container);

ReactDom.render(<Main text='a title'><MyComp /></Main>, container)
