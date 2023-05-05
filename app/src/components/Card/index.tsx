import clsx from "clsx";
import { Product } from "../../pages/LandingPage";
import { Figure } from "../../components/Figure";
import { FigureQuartet } from "../../components/FigureQuartet";
import { Heading } from "../../components/Heading";
import { Label } from "../../components/Label";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import "../../styles/global.css"
import { FigureContent } from "../../components/FigureContent";
import { useEffect, useState } from "react";
import nextId from "react-id-generator";

export interface CardProps {
    products: Product[],
    setProducts: Function,
    className?: string
}

export function Card({ products, setProducts, className }: CardProps) {
    const [product, setProduct] = useState({} as Product);
    const [sustainability, setSustainability] = useState([] as string[]);
    const [delivery, setDelivery] = useState([] as string[]);

    useEffect(() => {
        setProduct(products[0] as Product);
        setSustainability(products[0].sustainability as string[]);
        setDelivery(products[0].delivery as string[]);
    }, [products]);

    function getIndex(list:string[], item: string) {
        const response = list.filter(i => i === item);
        return list.indexOf(response[0]);
    }

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
                    max-sm:flex-col
                    
                `,
                className
            )}
        >
            <div
                className="
                    bg-slate-900
                    absolute
                    inset-0
                    w-full
                    h-1/2
                    z-1
                    max-sm:h-full
                "
            ></div>
            <FigureQuartet list={products as Product[]} handleAbout={setProducts}/>
                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        flex-none
                        h-full
                    "
                >
                    <Figure>
                        <Heading
                            size="lg"
                            className="
                                text-white
                                text-center
                                animate-bottom
                                w-[300px] 
                            "
                        >
                            { product.title }
                        </Heading>
                        <FigureContent>
                            <Text
                                className="
                                    m-auto
                                    w-[256px] 
                                    text-white
                                    text-center
                                    font-medium
                                    animate-found
                                "
                            >
                                { product.description }
                            </Text>
                            <Heading
                                size="lg"
                                className="
                                    text-sky-500
                                    text-center
                                    animate-ping-blink
                                "
                            >
                                { product.price }
                            </Heading>
                            <Button
                                className="
                                    bg-sky-600
                                    shadow-blur
                                    transition
                                    hover:bg-sky-400
                                    hover:shadow-blur-hover
                                    animate-found-short
                                "
                            >
                                <Label
                                    className="text-white"
                                >
                                    ADICIONAR
                                </Label>
                                <img src="/assets/icons/carrinho.svg" alt="" />
                            </Button>
                        </FigureContent>
                    </Figure>
                    <Figure>
                        <Figure>
                            <div
                                className="
                                    flex
                                    gap-1
                                    items-center
                                    animate-top
                                "
                            >
                                <Label
                                    size="sm"
                                    className="
                                        text-gray-600
                                        max-sm:text-white
                                    "
                                >
                                    SUSTENTABILIDADE
                                </Label>
                                <img src="/assets/icons/i-sustentabilidade.svg" alt="" />
                            </div>
                            <FigureContent>
                                {   
                                    sustainability.map((item) => (
                                        <div
                                            key={nextId()}
                                            className={clsx(
                                                `
                                                flex
                                                gap-1
                                                items-center
                                                opacity-0
                                                max-sm:text-white
                                                `,
                                                {
                                                    'animate-found-short': getIndex(product.sustainability, item) === 0,
                                                    'animate-found-medium': getIndex(product.sustainability, item) === 1,
                                                    'animate-found-long': getIndex(product.sustainability, item) === 2,
                                                }
                                            )}
                                        >
                                            <img src="/assets/icons/list-icon.svg" alt="" />
                                            <Text
                                                size="sm"
                                                className="
                                                    text-gray-600
                                                    max-sm:text-white
                                                "
                                            >
                                                {item}
                                            </Text>
                                        </div>
                                    ))
                                }
                            </FigureContent>
                            
                        </Figure>
                        <hr className="h-[4px] bg-white"/>
                        <Figure>
                            <div
                                className="
                                    flex
                                    gap-1
                                    items-center
                                    animate-top
                                "
                            >
                                <Label
                                    size="sm"
                                    className="
                                        text-gray-600
                                        max-sm:text-white
                                    "
                                >
                                    ENTREGA
                                </Label>
                                <img src="/assets/icons/i-entrega.svg" alt="" />
                            </div>
                            <FigureContent>
                            {
                                    delivery.map((item) => (
                                        <div
                                            key={nextId()}
                                            className={clsx(
                                                `
                                                flex
                                                gap-1
                                                items-center
                                                opacity-0
                                                `,
                                                {
                                                    'animate-found-short': getIndex(product.delivery, item) === 0,
                                                    'animate-found-medium': getIndex(product.delivery, item) === 1,
                                                    'animate-found-long': getIndex(product.delivery, item) === 2,
                                                }
                                            )}
                                        >
                                            <img src="/assets/icons/list-icon.svg" alt="" />
                                            <Text
                                                size="sm"
                                                className="
                                                    text-gray-600
                                                    max-sm:text-white
                                                "
                                            >
                                                {item}
                                            </Text>
                                        </div>
                                    ))
                                }
                            </FigureContent>
                            
                        </Figure>
                    </Figure>
                </div>
        </div>
    );
}