import {Button as B} from '../../components/Button';

export default {
    title: 'Components/Button',
    component: B,
    argTypes: {
        type: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {type: 'radio'},
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {type: 'radio'},
        }
    }
};

const Template = args => <B {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    content: 'Press me',
    size: 'lg',
    type: 'tertiary',
}