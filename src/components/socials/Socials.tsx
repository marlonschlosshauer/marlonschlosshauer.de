import { External } from "./External";
import { Frame } from "./Frame";
import { Internal } from "./Internal";

const Complete = () => (
    <Frame>
        <Internal />
        <External />
    </Frame>
);

const Internal_ = () => (
    <Frame>
        <External />
    </Frame>
);

const External_ = () => (
    <Frame>
        <External />
    </Frame>
);

export const Socials = {
    Complete: Complete,
    Internal: Internal_,
    External: External_,
};
