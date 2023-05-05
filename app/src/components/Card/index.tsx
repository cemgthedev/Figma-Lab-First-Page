import clsx from "clsx";
import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    className?: string
}

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={clsx(
                `
                    flex
                    gap-8
                    p-6
                    items-start
                    justify-center
                    relative
                    rounded-lg
                    overflow-hidden
                    
                `,
                className
            )}
        >
            <div
                className="
                    bg-slate-900
                    absolute
                    top-0
                    w-full
                    h-1/2
                    z-1
                "
            ></div>
            { children }
        </div>
    );
}