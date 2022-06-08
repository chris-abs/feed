import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledBaseButton = styled.button`
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 1em;
    height: ${props => props.height}
    width: ${props => props.width}
`

const PrimaryButton = styled(StyledBaseButton)`
    background-color: blue;
`

const SecondaryButton = styled(StyledBaseButton)`
    background-color: green; 
`

const TertiaryButton = styled(StyledBaseButton)`
    background-color: pink; 
`

export function Button({onClick, type = 'primary', size = 'lg', content}) {
    let height = '3vh'
    let width = '5vw'
    if (size === 'sm') {
        height = '2vh'
        width = '4vw'
    }
    if (size === 'lg') {
        height = '4vh'
        width = '6vw'
    }
    if (type === 'secondary') {
        return <SecondaryButton onClick={onClick} height={height} width={width}>{content}</SecondaryButton>
    }
    if (type === 'tertiary') {
        return <TertiaryButton onClick={onClick} height={height} width={width}>{content}</TertiaryButton>
    }

    return <PrimaryButton onClick={onClick} height={height} width={width}>{content}</PrimaryButton>

}

Button.prototype = {
    content: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    onClick: PropTypes.func,
}