import { Card } from "../../components/Card";
import { Figure } from "../../components/Figure";
import { FigureQuartet } from "../../components/FigureQuartet";
import { Heading } from "../../components/Heading";
import { Label } from "../../components/Label";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import "../../styles/global.css"
import { FigureContent } from "../../components/FigureContent";

const list = [
    "/assets/images/foto1.svg",
    "/assets/images/foto2.svg",
    "/assets/images/foto3.svg",
    "/assets/images/foto4.svg",
]

export function LandingPage() {
    return (
        <main
            className="
                ring-1 ring-red-500
                flex
                items-center
                justify-center
                h-screen
            "
        >
            <Card
                className="bg-slate-200"
            >
                <FigureQuartet list={list}/>
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
                            "
                        >
                            CAMISA VERMELHA
                        </Heading>
                        <FigureContent>
                            <Text
                                className="
                                    max-w-[256px] 
                                    text-white
                                    text-center
                                    font-medium
                                "
                            >
                                Essa é uma camisa vermelha feita de algodão com detalhes listrados preto e vermelho.
                            </Text>
                            <Heading
                                size="lg"
                                className="
                                    text-sky-500
                                    text-center
                                    animate-ping-blink
                                "
                            >
                                R$ 59,00
                            </Heading>
                            <Button
                                className="
                                    bg-sky-600
                                    shadow-blur
                                    transition
                                    hover:bg-sky-400
                                    hover:shadow-blur-hover
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
                                "
                            >
                                <Label
                                    size="sm"
                                    className="text-gray-600"
                                >
                                    SUSTENTABILIDADE
                                </Label>
                                <img src="/assets/icons/i-sustentabilidade.svg" alt="" />
                            </div>
                            <FigureContent>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        Tecido Sustentável
                                    </Text>
                                </div>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        100% algodão
                                    </Text>
                                </div>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        Garantia vitalícia
                                    </Text>
                                </div>
                            </FigureContent>
                            
                        </Figure>
                        <hr className="h-[4px] bg-white"/>
                        <Figure>
                            <div
                                className="
                                    flex
                                    gap-1
                                    items-center
                                "
                            >
                                <Label
                                    size="sm"
                                    className="text-gray-600"
                                >
                                    ENTREGA
                                </Label>
                                <img src="/assets/icons/i-entrega.svg" alt="" />
                            </div>
                            <FigureContent>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        Todo o brasil
                                    </Text>
                                </div>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        Expressa em 24 horas
                                    </Text>
                                </div>
                                <div
                                    className="
                                        flex
                                        gap-1
                                        items-center
                                    "
                                >
                                    <img src="/assets/icons/list-icon.svg" alt="" />
                                    <Text
                                        size="sm"
                                        className="text-gray-600"
                                    >
                                        Devolução em até 30 dias
                                    </Text>
                                </div>
                            </FigureContent>
                            
                        </Figure>
                    </Figure>
                </div>
            </Card>
        </main>
    );
}