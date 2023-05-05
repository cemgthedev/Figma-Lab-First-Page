import clsx from "clsx";
import { ReactNode } from "react";

export interface FigureProps {
    children: ReactNode,
    className?:string
}

export function Figure({ children, className }:FigureProps) {
    return (
        <div
            className={clsx(
                `
                    flex
                    flex-col
                    gap-4
                    z-[999]
                `,
                className
            )}
        >
            { children }
        </div>
    );
}