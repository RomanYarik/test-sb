import {classes} from './main.st.css'
import React from 'react';

export interface IMainProps  {
    text: string;
}

export const Main: React.FC<IMainProps> = ({children, text}) => <div><h1>{text}</h1><div className={classes.content}>{children}</div></div>