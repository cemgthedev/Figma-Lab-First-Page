import clsx from "clsx";

import "../../styles/global.css";

export interface FigureQuartetProps {
    list: string[],
    className?: string
}

export function FigureQuartet({list, className}: FigureQuartetProps) {
    return (
        <div
            className={clsx(
                `
                    flex
                    flex-col
                    gap-2
                    z-[999]
                `,
                className
            )}
        >
            <img 
                src={list[0]} 
                alt="" 
                className="
                    ring-2
                    ring-slate-200
                    rounded-[4px]
                "
            />
            <div
                className="
                    flex
                    gap-1
                    items-center
                    justify-center
                "
            >
                {
                    list.slice(1, list.length).map((item) => (
                        <img src={item} alt="" />
                    ))
                }
            </div>
        </div>
    );
}

