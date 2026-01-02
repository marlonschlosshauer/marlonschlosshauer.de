"use client";

import { ChangeEvent, FC, useState } from "react";
import { BarLogo, DefaultLogo, FooLogo, Navigation } from "./Navigation";

export const ExampleNavigation: FC = () => {
    const [path, setPath] = useState("default");

    const handlePathChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPath(event.target.value);
    };

    return (
        <section className="flex flex-col gap-2">
            <fieldset className="flex flex-row gap-2">
                <legend>Select your path:</legend>
                <ul className="flex flex-row gap-4">
                    <li>
                        <input
                            type="radio"
                            id="default"
                            name="path"
                            value="default"
                            checked={path === "default"}
                            onChange={handlePathChange}
                        />
                        <label htmlFor="default" className="pl-1">
                            Default
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="foo"
                            name="path"
                            value="foo"
                            checked={path === "foo"}
                            onChange={handlePathChange}
                        />
                        <label htmlFor="foo" className="pl-1">
                            Foo
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="Bar"
                            name="path"
                            value="Bar"
                            checked={path === "Bar"}
                            onChange={handlePathChange}
                        />
                        <label htmlFor="Bar" className="pl-1">
                            Bar
                        </label>
                    </li>
                </ul>
            </fieldset>
            <Navigation>
                {path === "default" ? <DefaultLogo /> : path === "foo" ? <FooLogo /> : <BarLogo />}
            </Navigation>
        </section>
    );
};
