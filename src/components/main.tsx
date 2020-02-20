import './main.css'
import React, { ReactNode } from 'react';

export interface IMainProps  {
    text: string;
}

export const Main: React.FC<IMainProps> = ({children, text}) => <div><h1>{text}</h1><div className='content'>{children}</div></div>