import clsx from "clsx";
import nextId from "react-id-generator";

import '../../styles/global.css';
import { Product } from "../../models/Product";

export interface FigureQuartetProps {
    list: Product[],
    className?: string,
    handleAbout: Function
}

export function FigureQuartet({list, className, handleAbout}: FigureQuartetProps) {
    function handleAboutActivate(id: number) {
        handleAbout((prevState: Product[]) => [...prevState.filter(product => product.id == id), ...prevState.filter(product => product.id != id)]);
    }

    function getIndex(list:Product[], id:number) {
        const item = list.filter(i => i.id === id);
        return list.indexOf(item[0]) + 1;
    }

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
                src={list[0].imageUrl} 
                alt="" 
                className="
                    rounded-lg
                    animate-bottom
                    w-[300px]
                    h-[335px]
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
                        <img 
                            onClick={() => handleAboutActivate(item.id)}
                            key={nextId()}
                            src={item.imageUrl} 
                            alt="" 
                            className={clsx(
                                `
                                    rounded-md
                                    h-[96px]
                                `,
                                {
                                    'animate-rigth': getIndex(list, item.id) === 2,
                                    'animate-top': getIndex(list, item.id) === 3,
                                    'animate-left': getIndex(list, item.id) === 4
                                }
                            )}
                        />
                    ))
                }
            </div>
        </div>
    );
}

