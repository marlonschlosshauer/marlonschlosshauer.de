import { FC, PropsWithChildren } from "react";

export const DefaultLogo: FC = () => (
    <button className="w-[54px] h-[54px] bg-primary-alt rounded-sm" />
);

export const FooLogo: FC = () => (
    <button className="w-[54px] h-[54px] text-primary-alt">
        <svg viewBox="0 0 87 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M36.9149 2C38.4545 -0.666668 42.3035 -0.666667 43.8431 2L80.2162 65C81.7558 67.6667 79.8313 71 76.7521 71H4.00596C0.926759 71 -0.99774 67.6667 0.54186 65L36.9149 2Z"
                fill="currentColor"
            />
        </svg>
    </button>
);

export const BarLogo: FC = () => (
    <button className="w-[54px] h-[54px] bg-primary-alt rounded-full" />
);

export const Navigation: FC<PropsWithChildren> = ({ children }) => {
    return (
        <output>
            <div className="border border-black-alt rounded-lg pt-[48px] px-[48px]">
                <div className="hidden md:flex bg-primary-alt-alt rounded-t-lg p-[32px] justify-between items-center">
                    <div className="flex justify-around items-center gap-[24px]">
                        {children ? children : <DefaultLogo />}
                        <ul className="flex flex-row gap-[4px]">
                            <li className="w-[32px] h-[12px] bg-primary-alt rounded-sm" />
                            <li className="w-[32px] h-[12px] bg-primary-alt rounded-sm" />
                            <li className="w-[32px] h-[12px] bg-primary-alt rounded-sm" />
                            <li className="w-[32px] h-[12px] bg-primary-alt rounded-sm" />
                        </ul>
                    </div>
                    <button className="w-[38px] h-[38px] bg-primary-alt rounded-lg" />
                </div>
                <div className="flex md:hidden bg-primary-alt-alt rounded-t-lg p-[32px] justify-between items-center">
                    <div className="flex justify-around items-center gap-[24px]">
                        {children ? children : <DefaultLogo />}
                    </div>
                    <div className="flex flex-row gap-[48px] items-center">
                        <button className="w-[32px] h-[32px] bg-primary-alt rounded-sm" />
                        <button className="flex flex-col gap-[6px]">
                            <span className="w-[32px] h-[4px] bg-primary-alt rounded-sm" />
                            <span className="w-[32px] h-[4px] bg-primary-alt rounded-sm" />
                            <span className="w-[32px] h-[4px] bg-primary-alt rounded-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </output>
    );
};
