import { useTranslations } from "next-intl"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function Testimonials() {

    const t = useTranslations("Testimonials");

    return (
        <section id="testimonials" className="py-12">
            <div className="container mx-auto flex flex-col gap-12 items-center">
                <h2 className="text-3xl font-bold">{t("title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="max-w-[400px] w-full">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">NextUI</p>
                                <p className="text-small text-default-500">nextui.org</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">NextUI</p>
                                <p className="text-small text-default-500">nextui.org</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">NextUI</p>
                                <p className="text-small text-default-500">nextui.org</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                </div>
            </div>
        </section>
    )
}