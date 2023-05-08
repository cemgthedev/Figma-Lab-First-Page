import clsx from "clsx";
import { ReactNode } from "react";

import '../../styles/global.css';

export interface FigureContentProps {
    children: ReactNode,
    className?:string
}

export function FigureContent({ children, className }:FigureContentProps) {
    return (
        <div
            className={clsx(
                `
                    flex
                    flex-col
                    gap-1
                    z-[999]
                `,
                className
            )}
        >
            { children }
        </div>
    );
}