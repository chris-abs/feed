import {Button} from "../../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            options: ["small", "medium", "large"],
            control: {type: "radio"},
        },
        fontWeight: {
            options: ["light", "normal", "bold"],
            control: {type: "radio"},
        }
    }
};

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    color: "white",
    backgroundColor: "blue",
    label: "Press me",
    size: "medium",
    fontWeight: "bold",
    borderRadius: true,
}