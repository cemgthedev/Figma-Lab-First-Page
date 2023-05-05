import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode,
    className?: string
}

export function Button({ children, className }: ButtonProps) {
    return (
        <div
            className={clsx(
                `
                    flex
                    items-center
                    justify-center
                    gap-1
                    p-6
                    rounded-md
                `,
                className
            )}
        >
            { children }
        </div>
    );
}